import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCapsuleDto } from './dto/create-capsule.dto';
import { Capsule, CapsuleDocument } from './model/capsule.model';

@Injectable()
export class CapsuleService {
    constructor(@InjectModel(Capsule.name) private capsuleModel: Model<CapsuleDocument>) {}

    async create(dto: CreateCapsuleDto) {}

    async remove(id: string) {}

    async update(dto: CreateCapsuleDto, id: string) {}
}
