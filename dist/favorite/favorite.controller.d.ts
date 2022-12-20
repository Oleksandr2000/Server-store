import { ObjectId } from 'mongoose';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';
import { FavoriteService } from './favorite.service';
export declare class FavoriteController {
    private favoriteService;
    constructor(favoriteService: FavoriteService);
    addToBasket(dto: AddToFavoriteDto): Promise<void>;
    removeFromBasket(param: {
        id: ObjectId;
    }): Promise<void>;
}
