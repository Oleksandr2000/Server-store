import { ObjectId } from 'mongoose';
import { BasketService } from './basket.service';
import { AddToBasketDto } from './dto/add-to-basket.dto';
import { ConfirmOrderDto } from './dto/confirm-order.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
export declare class BasketController {
    private basketService;
    constructor(basketService: BasketService);
    getBasketProduct(param: {
        id: ObjectId;
    }): Promise<{
        basket: Omit<import("./model/basket.model").Basket & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        count: number;
        totalPrice: number;
    }>;
    addToBasket(dto: AddToBasketDto): Promise<import("mongodb").UpdateResult>;
    changeCount(param: {
        id: ObjectId;
    }, dto: UpdateBasketDto): Promise<void>;
    removeFromBasket(param: {
        id: ObjectId;
    }): Promise<void>;
    confirmOrder(dto: ConfirmOrderDto): Promise<void>;
}
