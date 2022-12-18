import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';
import { FavoriteService } from './favorite.service';

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}

    @Post('add')
    async addToBasket(@Body() dto: AddToFavoriteDto) {
        return await this.favoriteService.add(dto);
    }

    @Delete('remove/:id')
    async removeFromBasket(@Param() param: { id: ObjectId }) {
        return await this.favoriteService.remove(param.id);
    }
}
