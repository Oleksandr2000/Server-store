import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CapsuleService } from './capsule.service';
import { CreateCapsuleDto, UpdateCapsuleDto } from './dto/create-capsule.dto';

@Controller('capsule')
export class CapsuleController {
    constructor(private capsuleService: CapsuleService) {}

    @Post()
    async create(@Body() dto: CreateCapsuleDto) {
        return await this.capsuleService.create(dto);
    }

    @Delete(':id')
    async remove(@Param() param: { id: ObjectId }) {
        return await this.capsuleService.remove(param.id);
    }

    @Patch('update')
    async update(@Body() dto: UpdateCapsuleDto) {
        return await this.capsuleService.update(dto);
    }

    @Get()
    async getAll() {
        return await this.capsuleService.getAll();
    }

    @Get(':id')
    async getOne(@Param() param: { id: ObjectId }) {
        return await this.capsuleService.getOne(param.id);
    }

    @Get('recomendation/:id')
    async getRecomendation(@Param() param: { id: ObjectId }) {
        return await this.capsuleService.getRecomendation(param.id);
    }
}
