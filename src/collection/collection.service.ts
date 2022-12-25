import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateColectionDto } from 'src/product/dto/create-colection.dto';
import { Collection, CollectionDocument } from './models/collection.model';

@Injectable()
export class CollectionService {
    constructor(@InjectModel(Collection.name) private collectionModel: Model<CollectionDocument>) {}

    async create(dto: CreateColectionDto) {
        const existCollection = await this.collectionModel.findOne({ name: dto.name }).exec();

        if (existCollection) {
            throw new HttpException('Колекція вже існує', HttpStatus.BAD_REQUEST);
        }

        const collection = await this.collectionModel.create(dto);

        return collection;
    }

    async getAll() {
        const collections = await this.collectionModel.find();

        return collections;
    }

    async getOne(_id: ObjectId) {
        const collection = await this.collectionModel.findById(_id).populate('products');

        return collection;
    }

    async remove(_id: ObjectId) {
        await this.collectionModel.deleteOne({ _id });
    }

    async update(dto: CreateColectionDto, _id: ObjectId) {
        const collection = await this.collectionModel.findOneAndUpdate({ _id }, dto, { returnDocument: 'after' });

        return collection;
    }
}
