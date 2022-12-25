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
exports.CollectionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const collection_model_1 = require("./models/collection.model");
let CollectionService = class CollectionService {
    constructor(collectionModel) {
        this.collectionModel = collectionModel;
    }
    async create(dto) {
        const existCollection = await this.collectionModel.findOne({ name: dto.name }).exec();
        if (existCollection) {
            throw new common_1.HttpException('Колекція вже існує', common_1.HttpStatus.BAD_REQUEST);
        }
        const collection = await this.collectionModel.create(dto);
        return collection;
    }
    async getAll() {
        const collections = await this.collectionModel.find();
        return collections;
    }
    async getOne(_id) {
        const collection = await this.collectionModel.findById(_id).populate('products');
        return collection;
    }
    async remove(_id) {
        await this.collectionModel.deleteOne({ _id });
    }
    async update(dto, _id) {
        const collection = await this.collectionModel.findOneAndUpdate({ _id }, dto, { returnDocument: 'after' });
        return collection;
    }
};
CollectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collection_model_1.Collection.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CollectionService);
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map