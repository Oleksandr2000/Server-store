import { Model, ObjectId } from 'mongoose';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';
import { Favorite, FavoriteDocument } from './favorite.model';
export declare class FavoriteService {
    private favoriteModel;
    constructor(favoriteModel: Model<FavoriteDocument>);
    togle(dto: AddToFavoriteDto): Promise<import("mongodb").DeleteResult | (Favorite & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    get(query: {
        product?: ObjectId;
        user: ObjectId;
    }): Promise<Omit<Favorite & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
}
