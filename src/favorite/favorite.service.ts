import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';
import { Favorite, FavoriteDocument } from './favorite.model';

@Injectable()
export class FavoriteService {
    constructor(@InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>) {}

    async togle(dto: AddToFavoriteDto) {
        const existFavorite = await this.favoriteModel.findOne({ user: dto.user, product: dto.product });

        if (existFavorite) {
            const favorite = await this.favoriteModel.deleteOne({ _id: existFavorite._id });

            return favorite;
        } else {
            const favorite = await this.favoriteModel.create(dto);

            return favorite;
        }
    }

    async get(query: { product?: ObjectId; user: ObjectId }) {
        const favorites = await this.favoriteModel
            .find({ user: query.user, product: query.product ? query.product : { $ne: null } })
            .populate('product');

        return favorites;
    }
}
