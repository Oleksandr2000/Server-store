import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';
import { FavoriteService } from './favorite.service';

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}

    @Post('togle')
    async togleItem(@Body() dto: AddToFavoriteDto) {
        return await this.favoriteService.togle(dto);
    }

    @Get()
    async getFavorites(@Query() query: { product?: ObjectId; user: ObjectId }) {
        return await this.favoriteService.get(query);
    }
}
