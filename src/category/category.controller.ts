import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Post('')
    async create(@Body() dto: CreateCategoryDto) {
        return await this.categoryService.create(dto);
    }

    @Patch(':id')
    async update(@Param() param: { id: string }, @Body() dto: CreateCategoryDto) {
        return await this.categoryService.update(param.id, dto);
    }

    @Delete(':id')
    async delete(@Param() param: { id: string }) {
        return await this.categoryService.delete(param.id);
    }

    @Get()
    async getAll() {
        return await this.categoryService.getAll();
    }

    @Get('/:id')
    async getOne(@Param() param: { id: string }) {
        return await this.categoryService.getOne(param.id);
    }
}
