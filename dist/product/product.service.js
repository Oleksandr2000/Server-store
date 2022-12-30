"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_model_1 = require("../category/category.model");
const color_model_1 = require("./models/color.model");
const material_model_1 = require("./models/material.model");
const product_model_1 = require("./models/product.model");
const size_model_1 = require("./models/size.model");
let ProductService = class ProductService {
    constructor(productModel, categoryModel, colorModel, sizeModel, materialModel) {
        this.productModel = productModel;
        this.categoryModel = categoryModel;
        this.colorModel = colorModel;
        this.sizeModel = sizeModel;
        this.materialModel = materialModel;
    }
    async create(dto) {
        const existProduct = await this.productModel.findOne({ title: dto.title });
        if (existProduct) {
            throw new common_1.HttpException('Такий товар вже існує', common_1.HttpStatus.BAD_REQUEST);
        }
        const existCategory = await this.categoryModel.findOne({ slug: dto.category });
        if (!existCategory) {
            throw new common_1.HttpException(`Спочатку своріть категорію ${dto.category}}`, common_1.HttpStatus.BAD_REQUEST);
        }
        const existColor = await this.colorModel.findOne({ name: dto.color.name, category: dto.category });
        if (!existColor) {
            throw new common_1.HttpException(`Для категорії ${dto.category} кольору ${dto.color.name} не існує`, common_1.HttpStatus.BAD_REQUEST);
        }
        const product = await this.productModel.create(dto);
        return product;
    }
    async getAll(query) {
        const colors = query.colors ? query.colors.split(',') : [];
        const sizes = query.sizes ? query.sizes.split(',') : [];
        const materials = query.materials ? query.materials.split(',') : [];
        const count = await this.productModel
            .count({
            category: query.category !== undefined ? query.category : { $ne: null },
            price: query.maxPrice && query.minPrice
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
            .sort([[query.sortField || 'title', query.sortValue || 1]])
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
            .sort([[query.sortField || 'title', query.sortValue || 1]])
            .skip(query.skip ? query.skip * query.limit : 0)
            .limit(query.limit ? query.limit : count)
            .exec();
        return { count, products };
    }
    async getOne(_id) {
        const product = await this.productModel.findById(_id).populate('recomendation');
        const hashCode = product.code.split('#');
        const variants = await this.productModel.find({ code: { $regex: hashCode[0] } }, { _id: 1, color: 1 });
        return { product, variants };
    }
    async delete(_id) {
        await this.productModel.deleteOne({ _id });
    }
    async update(_id, dto) {
        const product = await this.productModel.findOneAndUpdate({ _id }, dto, { new: true });
        return product;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Product.name)),
    __param(1, (0, mongoose_1.InjectModel)(category_model_1.Category.name)),
    __param(2, (0, mongoose_1.InjectModel)(color_model_1.Color.name)),
    __param(3, (0, mongoose_1.InjectModel)(size_model_1.Size.name)),
    __param(4, (0, mongoose_1.InjectModel)(material_model_1.Material.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map