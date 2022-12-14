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
exports.CapsuleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const capsule_model_1 = require("./model/capsule.model");
let CapsuleService = class CapsuleService {
    constructor(capsuleModel) {
        this.capsuleModel = capsuleModel;
    }
    async create(dto) {
        const look = await this.capsuleModel.create(dto);
        return look;
    }
    async remove(_id) {
        await this.capsuleModel.deleteOne({ _id });
    }
    async update(dto) {
        const look = await this.capsuleModel.findOneAndUpdate({ _id: dto._id }, { name: dto.name, products: dto.products }, {
            new: true,
        });
        console.log(look);
        return look;
    }
    async getRecomendation(product) {
        const looks = await this.capsuleModel.find({ products: { $in: product } });
        return looks;
    }
    async getAll() {
        const looks = await this.capsuleModel.find().populate('products');
        return looks;
    }
    async getOne(_id) {
        const look = await this.capsuleModel.findOne({ _id }).populate('products');
        return look;
    }
};
CapsuleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(capsule_model_1.Capsule.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CapsuleService);
exports.CapsuleService = CapsuleService;
//# sourceMappingURL=capsule.service.js.map