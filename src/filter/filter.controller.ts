import { Controller, Get, Param } from '@nestjs/common';
import { FilterService } from './filter.service';

@Controller('/filter')
export class FilterController {
    constructor(private filterService: FilterService) {}

    @Get()
    async getAllFilters() {
        return await this.filterService.getAllFilters();
    }

    @Get(':id')
    async getOneFilters(@Param() param: { id: string }) {
        return await this.filterService.getOneFilters(param.id);
    }
}
