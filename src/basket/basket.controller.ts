import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { BasketService } from './basket.service';
import { AddToBasketDto } from './dto/add-to-basket.dto';
import { ConfirmOrderDto } from './dto/confirm-order.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';

@Controller('basket')
export class BasketController {
    constructor(private basketService: BasketService) {}

    @Get(':id')
    async getBasketProduct(@Param() param: { id: ObjectId }) {
        return this.basketService.getBasketProduct(param.id);
    }

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

    @Post('confirm')
    async confirmOrder(@Body() dto: ConfirmOrderDto) {
        return await this.basketService.confirmOrder(dto);
    }
}
