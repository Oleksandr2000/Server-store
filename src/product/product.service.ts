import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/category/category.model';
import { CreateProductDto } from './dto/create-product.dto';
import { filterProductDto } from './dto/filter-product.dto';
import { Color, ColorDocument } from './models/color.model';
import { Material, MaterialDocument } from './models/material.model';
import { Product, ProductDocument } from './models/product.model';
import { Size, SizeDocument } from './models/size.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
        @InjectModel(Color.name) private colorModel: Model<ColorDocument>,
        @InjectModel(Size.name) private sizeModel: Model<SizeDocument>,
        @InjectModel(Material.name) private materialModel: Model<MaterialDocument>,
    ) {}

    async create(dto: CreateProductDto) {
        const existProduct = await this.productModel.findOne({ title: dto.title });

        if (existProduct) {
            throw new HttpException('Такий товар вже існує', HttpStatus.BAD_REQUEST);
        }

        const existCategory = await this.categoryModel.findOne({ slug: dto.category });

        if (!existCategory) {
            throw new HttpException(`Спочатку своріть категорію ${dto.category}}`, HttpStatus.BAD_REQUEST);
        }

        const existColor = await this.colorModel.findOne({ name: dto.color.name, category: dto.category });

        if (!existColor) {
            throw new HttpException(
                `Для категорії ${dto.category} кольору ${dto.color.name} не існує`,
                HttpStatus.BAD_REQUEST,
            );
        }

        const product = await this.productModel.create(dto);

        return product;
    }

    async getAll(query: filterProductDto) {
        const colors = query.colors ? query.colors.split(',') : [];
        const sizes = query.sizes ? query.sizes.split(',') : [];
        const materials = query.materials ? query.materials.split(',') : [];

        const count = await this.productModel
            .count({
                category: query.category !== undefined ? query.category : { $ne: null },
                price:
                    query.maxPrice && query.minPrice
                        ? { $gt: Number(query.minPrice), $lt: Number(query.maxPrice) }
                        : { $ne: null },
                hit: query.hit ? { $ne: false } : { $ne: null },
                sale: query.sale ? { $gt: 0 } : { $ne: null },
                title: query.term ? { $regex: query.term, $options: 'i' } : { $ne: null },
                'color.name': colors && colors.length > 0 ? { $in: colors } : { $ne: null },
                'material.name': materials && materials.length > 0 ? { $in: materials } : { $ne: null },
                'sizes.name': sizes && sizes.length > 0 ? { $in: sizes } : { $ne: null },
                'sizes.count': sizes && sizes.length > 0 ? { $gt: 0 } : { $ne: null },
            })
            .exec();

        const products = await this.productModel
            .find({
                category: query.category !== undefined ? query.category : { $ne: null },
                price: query.maxPrice && query.minPrice ? { $gt: query.minPrice, $lt: query.maxPrice } : { $ne: null },
                hit: query.hit ? { $ne: false } : { $ne: null },
                sale: query.sale ? { $gt: 0 } : { $ne: null },
                title: query.term ? { $regex: query.term, $options: 'i' } : { $ne: null },
                'color.name': colors && colors.length > 0 ? { $in: colors } : { $ne: null },
                'material.name': materials && materials.length > 0 ? { $in: materials } : { $ne: null },
                'sizes.name': sizes && sizes.length > 0 ? { $in: sizes } : { $ne: null },
                'sizes.count': sizes && sizes.length > 0 ? { $gt: 0 } : { $ne: null },
            })
            .sort({ title: 1 })
            .skip(query.skip ? query.skip * query.limit : 0)
            .limit(query.limit ? query.limit : count)
            .exec();

        return { count, products };
    }

    async getOne(_id: string) {
        const product = await this.productModel.findById(_id).populate('recomendation');

        const hashCode = product.code.split('#');

        const variants = await this.productModel.find({ code: { $regex: hashCode[0] } }, { _id: 1, color: 1 });

        return { product, variants };
    }

    async delete(_id: string) {
        await this.productModel.deleteOne({ _id });
    }

    async update(_id: string, dto: CreateProductDto) {
        const product = await this.productModel.findOneAndUpdate({ _id }, dto, { new: true });

        return product;
    }
}
