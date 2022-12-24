import { ObjectId } from 'mongoose';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';
import { FavoriteService } from './favorite.service';
export declare class FavoriteController {
    private favoriteService;
    constructor(favoriteService: FavoriteService);
    togleItem(dto: AddToFavoriteDto): Promise<import("mongodb").DeleteResult | (import("./favorite.model").Favorite & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    getFavorites(query: {
        product?: ObjectId;
        user: ObjectId;
    }): Promise<Omit<import("./favorite.model").Favorite & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
}
