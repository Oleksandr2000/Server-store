import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color, ColorDocument } from 'src/product/models/color.model';
import { Material, MaterialDocument } from 'src/product/models/material.model';
import { Size, SizeDocument } from 'src/product/models/size.model';
import { CreateFilterDto } from './create-filter.dto';

@Injectable()
export class FilterService {
    constructor(
        @InjectModel(Color.name) private colorModel: Model<ColorDocument>,
        @InjectModel(Size.name) private sizeModel: Model<SizeDocument>,
        @InjectModel(Material.name) private materialModel: Model<MaterialDocument>,
    ) {}

    async checkExistFilter(name: string, category: string, model: any) {
        const existFilter = await model.findOne({ name, category });

        if (existFilter) {
            throw new HttpException(`Фільтр ${name} для категорії ${category} вже існує`, HttpStatus.BAD_REQUEST);
        }
    }

    async getColor(slug: string) {
        const colors = await this.colorModel.find({ category: slug }).exec();

        return colors;
    }

    async getMaterial(slug: string) {
        const materials = await this.materialModel.find({ category: slug }).exec();

        return materials;
    }

    async getSize(slug: string) {
        const sizes = await this.sizeModel.find({ category: slug }).exec();

        return sizes;
    }

    async getCategoryFilters(slug: string) {
        const colors = await this.getColor(slug);
        const materials = await this.getMaterial(slug);
        const sizes = await this.getSize(slug);

        const filters = {
            colors,
            materials,
            sizes,
        };

        return filters;
    }

    async getAllFilters() {
        const colors = await this.colorModel.distinct('name').exec();
        const materials = await this.materialModel.distinct('name').exec();
        const sizes = await this.sizeModel.distinct('name').exec();

        const filters = {
            colors,
            materials,
            sizes,
        };

        return filters;
    }

    async createColor(dto: CreateFilterDto) {
        await this.checkExistFilter(dto.name, dto.category, this.colorModel);

        const color = await this.colorModel.create(dto);

        return color;
    }

    async createSize(dto: CreateFilterDto) {
        await this.checkExistFilter(dto.name, dto.category, this.sizeModel);

        const size = await this.sizeModel.create(dto);

        return size;
    }

    async createMaterial(dto: CreateFilterDto) {
        await this.checkExistFilter(dto.name, dto.category, this.materialModel);

        const material = await this.materialModel.create(dto);

        return material;
    }

    async updateColor(dto: CreateFilterDto, _id: string) {
        await this.checkExistFilter(dto.name, dto.category, this.colorModel);

        const color = await this.colorModel.findOneAndUpdate({ _id }, dto, { new: true });

        return color;
    }

    async updateSize(dto: CreateFilterDto, _id: string) {
        await this.checkExistFilter(dto.name, dto.category, this.sizeModel);

        const size = await this.sizeModel.findOneAndUpdate({ _id }, dto, { new: true });

        return size;
    }

    async updateMaterial(dto: CreateFilterDto, _id: string) {
        await this.checkExistFilter(dto.name, dto.category, this.materialModel);

        const material = await this.materialModel.findOneAndUpdate({ _id }, dto, { new: true });

        return material;
    }

    async deleteColor(_id: string) {
        await this.colorModel.deleteOne({ _id });
    }

    async deleteSize(_id: string) {
        await this.sizeModel.deleteOne({ _id });
    }

    async deleteMaterial(_id: string) {
        await this.materialModel.deleteOne({ _id });
    }
}
