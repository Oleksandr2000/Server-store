import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindProductDto } from 'src/product/dto/find-product.dto';
import { TopPage } from './top-page.model';
import { TopPageModule } from './top-page.module';

@Controller('top-page')
export class TopPageController {
    @Post('create')
    async create(@Body() dto: TopPage) {}

    @Get(':id')
    async get(@Param() id: string) {}

    @Delete(':id')
    async delete(@Param() id: string) {}

    @Patch(':id')
    async update(@Param() id: string, @Body() dto: TopPageModule) {}

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindProductDto) {}
}
