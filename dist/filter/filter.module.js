"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const color_model_1 = require("../product/models/color.model");
const material_model_1 = require("../product/models/material.model");
const size_model_1 = require("../product/models/size.model");
const filter_controller_1 = require("./filter.controller");
const filter_service_1 = require("./filter.service");
let FilterModule = class FilterModule {
};
FilterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: color_model_1.Color.name, schema: color_model_1.ColorSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: material_model_1.Material.name, schema: material_model_1.MaterialSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: size_model_1.Size.name, schema: size_model_1.SizeSchema }]),
        ],
        providers: [filter_service_1.FilterService],
        controllers: [filter_controller_1.FilterController],
    })
], FilterModule);
exports.FilterModule = FilterModule;
//# sourceMappingURL=filter.module.js.map