import { Model, ObjectId } from 'mongoose';
import { BasketDocument } from './basket.model';
import { AddToBasketDto } from './dto/add-to-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
export declare class BasketService {
    private basketModel;
    constructor(basketModel: Model<BasketDocument>);
    add(dto: AddToBasketDto): Promise<void>;
    changeCount(_id: ObjectId, dto: UpdateBasketDto): Promise<void>;
    remove(_id: ObjectId): Promise<void>;
}
