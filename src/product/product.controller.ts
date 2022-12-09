import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
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
    async getAll() {
        return await this.productService.getAll();
    }

    @Get(':id')
    async getOne(@Param() param: { id: string }) {
        return await this.productService.getOne(param.id);
    }

    @Delete(':id')
    async delete(@Param() id: string) {
        await this.productService.delete(id);
    }

    @Patch('update/:id')
    async update(@Param() id: string, @Body() dto: CreateProductDto) {
        return await this.productService.update(id, dto);
    }

    @HttpCode(200)
    @Post('filtred-products')
    async getAllFilteredProducts(@Body() dto: filterProductDto) {
        return await this.productService.getAllFilteredProducts(dto);
    }
}
