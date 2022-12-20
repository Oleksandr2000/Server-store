import { Model, ObjectId } from 'mongoose';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';
import { FavoriteDocument } from './favorite.model';
export declare class FavoriteService {
    private favoriteModel;
    constructor(favoriteModel: Model<FavoriteDocument>);
    add(dto: AddToFavoriteDto): Promise<void>;
    remove(_id: ObjectId): Promise<void>;
}
