import { Model, ObjectId } from 'mongoose';
import { Basket, BasketDocument } from './model/basket.model';
import { AddToBasketDto } from './dto/add-to-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { OrderDocument } from './model/order.model';
import { ConfirmOrderDto } from './dto/confirm-order.dto';
export declare class BasketService {
    private basketModel;
    private ordertModel;
    constructor(basketModel: Model<BasketDocument>, ordertModel: Model<OrderDocument>);
    add(dto: AddToBasketDto): Promise<import("mongodb").UpdateResult>;
    changeCount(_id: ObjectId, dto: UpdateBasketDto): Promise<void>;
    remove(_id: ObjectId): Promise<void>;
    getBasketProduct(_id: ObjectId): Promise<{
        basket: Omit<Basket & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        count: number;
        totalPrice: number;
    }>;
    confirmOrder(dto: ConfirmOrderDto): Promise<void>;
}
