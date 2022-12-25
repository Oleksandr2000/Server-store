import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
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

    @Get(':id')
    async getOne(@Param() param: { id: ObjectId }) {
        return await this.collectionService.getOne(param.id);
    }

    @Delete(':id')
    async remove(@Param() param: { id: ObjectId }) {
        return await this.collectionService.remove(param.id);
    }

    @Patch(':id')
    async udpate(@Body() dto: CreateCollectionDto, @Param() param: { id: ObjectId }) {
        return await this.collectionService.update(dto, param.id);
    }
}
