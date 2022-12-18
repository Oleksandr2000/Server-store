import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { CreateProductDto } from './dto/create-product.dto';
import { filterProductDto } from './dto/filter-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post('create')
    async create(@Body() dto: CreateProductDto) {
        return await this.productService.create(dto);
    }

    @Get()
    async getAll(@Query() query: filterProductDto) {
        return await this.productService.getAll(query);
    }

    @Get(':id')
    async getOne(@Param() param: { id: string }) {
        return await this.productService.getOne(param.id);
    }

    @Delete(':id')
    async delete(@Param() param: { id: string }) {
        await this.productService.delete(param.id);
    }

    @Patch('update/:id')
    async update(@Param() param: { id: string }, @Body() dto: CreateProductDto) {
        return await this.productService.update(param.id, dto);
    }
}
