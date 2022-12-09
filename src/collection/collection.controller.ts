import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';

@Controller('collection')
export class CollectionController {
    constructor(private collectionService: CollectionService) {}

    @Post()
    async create(@Body() dto: CreateCollectionDto) {
        return await this.collectionService.create(dto);
    }

    @Get()
    async getAll() {
        return await this.collectionService.getAll();
    }

    @Delete(':id')
    async remove(@Param() id: string) {
        return await this.collectionService.remove(id);
    }

    @Patch(':id')
    async udpate(@Body() dto: CreateCollectionDto, @Param() id: string) {
        return await this.collectionService.update(dto, id);
    }
}
