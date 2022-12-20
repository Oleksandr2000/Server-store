"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
const collection_module_1 = require("./collection/collection.module");
const capsule_module_1 = require("./capsule/capsule.module");
const filter_module_1 = require("./filter/filter.module");
const basket_module_1 = require("./basket/basket.module");
const favorite_module_1 = require("./favorite/favorite.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.development.env',
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(String(process.env.DB_URL)),
            auth_module_1.AuthModule,
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
            collection_module_1.CollectionModule,
            capsule_module_1.CapsuleModule,
            filter_module_1.FilterModule,
            basket_module_1.BasketModule,
            favorite_module_1.FavoriteModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map