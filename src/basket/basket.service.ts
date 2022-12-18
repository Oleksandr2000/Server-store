import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Basket, BasketDocument } from './basket.model';
import { AddToBasketDto } from './dto/add-to-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';

@Injectable()
export class BasketService {
    constructor(@InjectModel(Basket.name) private basketModel: Model<BasketDocument>) {}

    async add(dto: AddToBasketDto) {
        await this.basketModel.create(dto);
    }

    async changeCount(_id: ObjectId, dto: UpdateBasketDto) {
        await this.basketModel.updateOne({ _id }, { $set: { count: dto.count } }, { new: true });
    }

    async remove(_id: ObjectId) {
        await this.basketModel.deleteOne({ _id });
    }
}
