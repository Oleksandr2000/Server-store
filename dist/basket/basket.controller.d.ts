import { ObjectId } from 'mongoose';
import { BasketService } from './basket.service';
import { AddToBasketDto } from './dto/add-to-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
export declare class BasketController {
    private basketService;
    constructor(basketService: BasketService);
    addToBasket(dto: AddToBasketDto): Promise<void>;
    changeCount(param: {
        id: ObjectId;
    }, dto: UpdateBasketDto): Promise<void>;
    removeFromBasket(param: {
        id: ObjectId;
    }): Promise<void>;
}
