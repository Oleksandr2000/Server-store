import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { BasketService } from './basket.service';
import { AddToBasketDto } from './dto/add-to-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';

@Controller('basket')
export class BasketController {
    constructor(private basketService: BasketService) {}

    @Post('add')
    async addToBasket(@Body() dto: AddToBasketDto) {
        return await this.basketService.add(dto);
    }

    @Patch('count/:id')
    async changeCount(@Param() param: { id: ObjectId }, @Body() dto: UpdateBasketDto) {
        return await this.basketService.changeCount(param.id, dto);
    }

    @Delete('remove/:id')
    async removeFromBasket(@Param() param: { id: ObjectId }) {
        return await this.basketService.remove(param.id);
    }
}
