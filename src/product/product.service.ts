import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/category/category.model';
import { CreateProductDto } from './dto/create-product.dto';
import { filterProductDto } from './dto/filter-product.dto';
import { Color, ColorDocument } from './models/color.model';
import { Material, MaterialDocument } from './models/material.model';
import {
    Product,
    ProductDocument,
    ProductMaterial,
    Color as ColorType,
    Size as SizeType,
} from './models/product.model';
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

    async createColor(item: ColorType, category: string) {
        const color = await this.colorModel.findOne({ name: item.name, category: category });

        if (!color) {
            await this.colorModel.create({ name: item.name, category: category });
        }
    }

    async createSize(sizes: SizeType[], category: string) {
        sizes.forEach(async (item) => {
            const size = await this.sizeModel.findOne({ name: item.name, category: category });

            if (!size) {
                await this.sizeModel.create({ name: item.name, category: category });
            }
        });
    }

    async createMaterial(material: ProductMaterial[], category: string) {
        material.forEach(async (item) => {
            const size = await this.materialModel.findOne({ name: item.name, category: category });

            if (!size) {
                await this.materialModel.create({ name: item.name, category: category });
            }
        });
    }

    async create(dto: CreateProductDto) {
        const existProduct = await this.productModel.findOne({ title: dto.title });

        if (existProduct) {
            throw new HttpException('Такий товар вже існує', HttpStatus.BAD_REQUEST);
        }

        const existCategory = await this.categoryModel.findOne({ slug: dto.category });

        if (!existCategory) {
            throw new HttpException(`Спочатку своріть категорію ${dto.category}}`, HttpStatus.BAD_REQUEST);
        }

        await this.createColor(dto.color, dto.category);
        await this.createSize(dto.sizes, dto.category);
        await this.createMaterial(dto.material, dto.category);

        const product = await this.productModel.create(dto);

        return product;
    }

    async getAll() {
        return await this.productModel.find().sort({ title: 1 }).exec();
    }

    async getAllFilteredProducts(dto: filterProductDto) {
        const count = await this.productModel.count({
            category: dto.category ? dto.category : { $ne: null },
            price: dto.maxPrice && dto.minPrice ? { $gt: dto.minPrice, $lt: dto.maxPrice } : { $ne: null },
            hit: dto.hit ? { $ne: false } : { $ne: null },
            sale: dto.sale ? { $gt: 0 } : { $ne: null },
            'sizes.name': dto.sizes && dto.sizes.length > 0 ? { $in: dto.sizes } : { $ne: null },
            'sizes.disabled': dto.sizes && dto.sizes.length > 0 ? false : { $ne: null },
            'color.name': dto.color && dto.color.length > 0 ? { $in: dto.color } : { $ne: null },
            'material.name': dto.material && dto.material.length > 0 ? { $in: dto.material } : { $ne: null },
        });

        const products = await this.productModel
            .find({
                category: dto.category ? dto.category : { $ne: null },
                price: dto.maxPrice && dto.minPrice ? { $gt: dto.minPrice, $lt: dto.maxPrice } : { $ne: null },
                hit: dto.hit ? { $ne: false } : { $ne: null },
                sale: dto.sale ? { $gt: 0 } : { $ne: null },
                'sizes.name': dto.sizes && dto.sizes.length > 0 ? { $in: dto.sizes } : { $ne: null },
                'sizes.disabled': dto.sizes && dto.sizes.length > 0 ? false : { $ne: null },
                'color.name': dto.color && dto.color.length > 0 ? { $in: dto.color } : { $ne: null },
                'material.name': dto.material && dto.material.length > 0 ? { $in: dto.material } : { $ne: null },
            })
            .sort([[dto.sort.field, dto.sort.value]])
            .skip(dto.skip * dto.limit)
            .limit(dto.limit)
            .exec();

        return { count, products };
    }

    async getOne(_id: string) {
        console.log(_id);
        const product = await this.productModel.findById(_id);

        const hashCode = product.code.split('#');
        console.log(hashCode);

        const variants = await this.productModel.find({ code: { $regex: hashCode[0] } }, { _id: 1, color: 1 });

        return { product, variants };
    }

    async delete(_id: string) {
        await this.productModel.deleteOne({ id: _id });
    }

    async update(_id: string, dto: CreateProductDto) {
        await this.createColor(dto.color, dto.category);
        await this.createSize(dto.sizes, dto.category);
        await this.createMaterial(dto.material, dto.category);

        const product = await this.productModel.findOneAndUpdate({ id: _id }, dto, { new: true });

        return product;
    }
}
