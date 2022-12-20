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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_model_1 = require("./category.model");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create(dto) {
        const findCategory = await this.categoryModel.findOne({ name: dto.name });
        if (findCategory) {
            throw new common_1.HttpException(`Категорія ${findCategory.name} вже існує`, common_1.HttpStatus.BAD_REQUEST);
        }
        const category = await this.categoryModel.create(dto);
        return category;
    }
    async update(_id, dto) {
        const updatedCategory = await this.categoryModel.findOneAndUpdate({ _id }, dto, { returnDocument: 'after' });
        if (updatedCategory) {
            throw new common_1.HttpException(`Інформацію про категорію ${updatedCategory.name} оновлено`, common_1.HttpStatus.OK);
        }
    }
    async delete(_id) {
        await this.categoryModel.deleteOne({ _id });
    }
    async getAll() {
        const categories = await this.categoryModel.find().exec();
        return categories;
    }
    async getOne(_id) {
        const category = await this.categoryModel.findById({ _id }).exec();
        return category;
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_model_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map