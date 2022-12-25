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
exports.FilterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const color_model_1 = require("../product/models/color.model");
const material_model_1 = require("../product/models/material.model");
const size_model_1 = require("../product/models/size.model");
let FilterService = class FilterService {
    constructor(colorModel, sizeModel, materialModel) {
        this.colorModel = colorModel;
        this.sizeModel = sizeModel;
        this.materialModel = materialModel;
    }
    async checkExistFilter(name, category, model) {
        const existFilter = await model.findOne({ name, category });
        if (existFilter) {
            throw new common_1.HttpException(`Фільтр ${name} для категорії ${category} вже існує`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getColor(slug) {
        const colors = await this.colorModel.find({ category: slug }).exec();
        return colors;
    }
    async getMaterial(slug) {
        const materials = await this.materialModel.find({ category: slug }).exec();
        return materials;
    }
    async getSize(slug) {
        const sizes = await this.sizeModel.find({ category: slug }).exec();
        return sizes;
    }
    async getCategoryFilters(slug) {
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
    async createColor(dto) {
        await this.checkExistFilter(dto.name, dto.category, this.colorModel);
        const color = await this.colorModel.create(dto);
        return color;
    }
    async createSize(dto) {
        await this.checkExistFilter(dto.name, dto.category, this.sizeModel);
        const size = await this.sizeModel.create(dto);
        return size;
    }
    async createMaterial(dto) {
        await this.checkExistFilter(dto.name, dto.category, this.materialModel);
        const material = await this.materialModel.create(dto);
        return material;
    }
    async updateColor(dto, _id) {
        await this.checkExistFilter(dto.name, dto.category, this.colorModel);
        const color = await this.colorModel.findOneAndUpdate({ _id }, dto, { new: true });
        return color;
    }
    async updateSize(dto, _id) {
        await this.checkExistFilter(dto.name, dto.category, this.sizeModel);
        const size = await this.sizeModel.findOneAndUpdate({ _id }, dto, { new: true });
        return size;
    }
    async updateMaterial(dto, _id) {
        await this.checkExistFilter(dto.name, dto.category, this.materialModel);
        const material = await this.materialModel.findOneAndUpdate({ _id }, dto, { new: true });
        return material;
    }
    async deleteColor(_id) {
        await this.colorModel.deleteOne({ _id });
    }
    async deleteSize(_id) {
        await this.sizeModel.deleteOne({ _id });
    }
    async deleteMaterial(_id) {
        await this.materialModel.deleteOne({ _id });
    }
};
FilterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(color_model_1.Color.name)),
    __param(1, (0, mongoose_1.InjectModel)(size_model_1.Size.name)),
    __param(2, (0, mongoose_1.InjectModel)(material_model_1.Material.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], FilterService);
exports.FilterService = FilterService;
//# sourceMappingURL=filter.service.js.map