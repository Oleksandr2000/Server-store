import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';
import { Favorite, FavoriteDocument } from './favorite.model';

@Injectable()
export class FavoriteService {
    constructor(@InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>) {}

    async add(dto: AddToFavoriteDto) {
        await this.favoriteModel.create(dto);
    }

    async remove(_id: ObjectId) {
        await this.favoriteModel.deleteOne({ _id });
    }
}
