import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color, ColorDocument } from 'src/product/models/color.model';
import { Material, MaterialDocument } from 'src/product/models/material.model';
import { Size, SizeDocument } from 'src/product/models/size.model';
import { Category, CategoryDocument } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

    async create(dto: CreateCategoryDto) {
        const findCategory = await this.categoryModel.findOne({ name: dto.name });

        if (!findCategory) {
            await this.categoryModel.create(dto);
        }

        const categories = await this.categoryModel.find().exec();

        return categories;
    }

    async update(_id: string, dto: CreateCategoryDto) {
        await this.categoryModel.findOneAndUpdate({ _id }, dto, { returnDocument: 'after' });
    }

    async delete(_id: string) {
        await this.categoryModel.deleteOne({ _id });
    }

    async getAll() {
        const categories = await this.categoryModel.find().exec();

        return categories;
    }

    async getOne(_id: string) {
        const category = await this.categoryModel.findById({ _id }).exec();

        return category;
    }
}
