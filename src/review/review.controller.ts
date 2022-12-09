import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Review } from './review.model';

@Controller('reviews')
export class ReviewsController {
    @Post('create')
    async create(@Body() dto: Review) {}

    @Delete(':id')
    async delete(@Param() id: string) {}

    @Get('byProduct/:productId')
    async getByProduct(@Param() productId: string) {}
}
