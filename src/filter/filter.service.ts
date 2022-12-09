import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color, ColorDocument } from 'src/product/models/color.model';
import { Material, MaterialDocument } from 'src/product/models/material.model';
import { Size, SizeDocument } from 'src/product/models/size.model';

@Injectable()
export class FilterService {
    constructor(
        @InjectModel(Color.name) private colorModel: Model<ColorDocument>,
        @InjectModel(Size.name) private sizeModel: Model<SizeDocument>,
        @InjectModel(Material.name) private materialModel: Model<MaterialDocument>,
    ) {}

    async getOneFilters(slug: string) {
        const colors = await this.colorModel.find({ category: slug }).exec();
        const materials = await this.materialModel.find({ category: slug }).exec();
        const sizes = await this.sizeModel.find({ category: slug }).exec();

        const filters = {
            colors,
            materials,
            sizes,
        };

        return filters;
    }

    async getAllFilters() {
        const colors = await this.colorModel.find().exec();
        const materials = await this.materialModel.find().exec();

        const filters = {
            colors,
            materials,
        };

        return filters;
    }
}
