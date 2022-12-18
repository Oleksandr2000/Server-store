import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateFilterDto } from './create-filter.dto';
import { FilterService } from './filter.service';

@Controller('/filter')
export class FilterController {
    constructor(private filterService: FilterService) {}

    @Get()
    async getAllFilters() {
        return await this.filterService.getAllFilters();
    }

    @Get(':id')
    async getCategoryFilters(@Param() param: { id: string }) {
        return await this.filterService.getCategoryFilters(param.id);
    }

    @Get('color/:slug')
    async getColor(@Param() param: { slug: string }) {
        return await this.filterService.getColor(param.slug);
    }

    @Get('material/:slug')
    async getMaterial(@Param() param: { slug: string }) {
        return await this.filterService.getMaterial(param.slug);
    }

    @Get('size/:slug')
    async getSize(@Param() param: { slug: string }) {
        return await this.filterService.getSize(param.slug);
    }

    @Post('color')
    async createColor(@Body() dto: CreateFilterDto) {
        return await this.filterService.createColor(dto);
    }

    @Post('material')
    async createMaterial(@Body() dto: CreateFilterDto) {
        return await this.filterService.createMaterial(dto);
    }

    @Post('size')
    async createSize(@Body() dto: CreateFilterDto) {
        return await this.filterService.createSize(dto);
    }

    @Patch('color/:id')
    async updateColor(@Body() dto: CreateFilterDto, @Param() param: { id: string }) {
        return await this.filterService.updateColor(dto, param.id);
    }

    @Patch('material/:id')
    async updateMaterial(@Body() dto: CreateFilterDto, @Param() param: { id: string }) {
        return await this.filterService.updateMaterial(dto, param.id);
    }

    @Patch('size/:id')
    async updateSize(@Body() dto: CreateFilterDto, @Param() param: { id: string }) {
        return await this.filterService.updateSize(dto, param.id);
    }

    @Delete('color/:id')
    async deleteColor(@Param() param: { id: string }) {
        return await this.filterService.deleteColor(param.id);
    }

    @Delete('material/:id')
    async deleteMaterial(@Param() param: { id: string }) {
        return await this.filterService.deleteMaterial(param.id);
    }

    @Delete('size/:id')
    async deleteSize(@Param() param: { id: string }) {
        return await this.filterService.deleteSize(param.id);
    }
}
