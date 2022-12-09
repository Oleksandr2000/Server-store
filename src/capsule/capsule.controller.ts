import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CapsuleService } from './capsule.service';
import { CreateCapsuleDto } from './dto/create-capsule.dto';

@Controller('capsule')
export class CapsuleController {
    constructor(private capsuleService: CapsuleService) {}

    @Post()
    async create(@Body() dto: CreateCapsuleDto) {
        return await this.capsuleService.create(dto);
    }

    @Delete(':id')
    async remove(@Param() id: string) {
        return await this.capsuleService.remove(id);
    }

    @Patch(':id')
    async update(@Body() dto: CreateCapsuleDto, @Param() id: string) {
        return await this.capsuleService.update(dto, id);
    }
}
