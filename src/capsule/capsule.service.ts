import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateCapsuleDto, UpdateCapsuleDto } from './dto/create-capsule.dto';
import { Capsule, CapsuleDocument } from './model/capsule.model';

@Injectable()
export class CapsuleService {
    constructor(@InjectModel(Capsule.name) private capsuleModel: Model<CapsuleDocument>) {}

    async create(dto: CreateCapsuleDto) {
        const look = await this.capsuleModel.create(dto);

        return look;
    }

    async remove(_id: ObjectId) {
        await this.capsuleModel.deleteOne({ _id });
    }

    async update(dto: UpdateCapsuleDto) {
        const look = await this.capsuleModel.findOneAndUpdate(
            { _id: dto._id },
            { name: dto.name, products: dto.products },
            {
                new: true,
            },
        );

        console.log(look);

        return look;
    }

    async getRecomendation(product: ObjectId) {
        const looks = await this.capsuleModel.find({ products: { $in: product } });

        return looks;
    }

    async getAll() {
        const looks = await this.capsuleModel.find().populate('products');

        return looks;
    }

    async getOne(_id: ObjectId) {
        const look = await this.capsuleModel.findOne({ _id }).populate('products');

        return look;
    }
}
