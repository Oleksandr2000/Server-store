import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Basket, BasketDocument } from './model/basket.model';
import { AddToBasketDto } from './dto/add-to-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { Order, OrderDocument } from './model/order.model';
import { ConfirmOrderDto } from './dto/confirm-order.dto';

@Injectable()
export class BasketService {
    constructor(
        @InjectModel(Basket.name) private basketModel: Model<BasketDocument>,
        @InjectModel(Order.name) private ordertModel: Model<OrderDocument>,
    ) {}

    async add(dto: AddToBasketDto) {
        const existProduct = await this.basketModel.findOne({ user: dto.user, product: dto.product, size: dto.size });

        if (existProduct) {
            return await this.basketModel.updateOne({ _id: existProduct._id }, { $inc: { count: 1 } }, { new: true });
        }

        await this.basketModel.create(dto);
    }

    async changeCount(_id: ObjectId, dto: UpdateBasketDto) {
        const updatedProduct = await this.basketModel.findOneAndUpdate(
            { _id },
            { $set: { count: dto.count } },
            { new: true },
        );

        if (updatedProduct.count === 0) {
            this.remove(_id);
        }
    }

    async remove(_id: ObjectId) {
        await this.basketModel.deleteOne({ _id });
    }

    async getBasketProduct(_id: ObjectId) {
        const basket = await this.basketModel.find({ user: _id }).populate('product');

        const count = basket.map((item) => item.count).reduce((i, acc) => acc + i, 0);

        const totalPrice = basket
            .map((item) => item.count * (item.product.price - item.product.sale))
            .reduce((i, acc) => acc + i, 0);

        return {
            basket,
            count,
            totalPrice,
        };
    }

    async confirmOrder(dto: ConfirmOrderDto) {
        await this.ordertModel.create(dto);

        await this.basketModel.deleteMany({ _id: { $in: dto.basket } });
    }
}
