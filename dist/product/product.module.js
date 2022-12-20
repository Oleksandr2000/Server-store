"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_controller_1 = require("./product.controller");
const product_model_1 = require("./models/product.model");
const product_service_1 = require("./product.service");
const category_model_1 = require("../category/category.model");
const color_model_1 = require("./models/color.model");
const material_model_1 = require("./models/material.model");
const size_model_1 = require("./models/size.model");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: product_model_1.Product.name, schema: product_model_1.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: category_model_1.Category.name, schema: category_model_1.CategorySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: color_model_1.Color.name, schema: color_model_1.ColorSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: material_model_1.Material.name, schema: material_model_1.MaterialSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: size_model_1.Size.name, schema: size_model_1.SizeSchema }]),
        ],
        providers: [product_service_1.ProductService],
        controllers: [product_controller_1.ProductController],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map