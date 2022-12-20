"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteModule = void 0;
const common_1 = require("@nestjs/common");
const favorite_service_1 = require("./favorite.service");
const favorite_controller_1 = require("./favorite.controller");
const mongoose_1 = require("@nestjs/mongoose");
const favorite_model_1 = require("./favorite.model");
let FavoriteModule = class FavoriteModule {
};
FavoriteModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: favorite_model_1.Favorite.name, schema: favorite_model_1.FavoriteSchema }])],
        providers: [favorite_service_1.FavoriteService],
        controllers: [favorite_controller_1.FavoriteController],
    })
], FavoriteModule);
exports.FavoriteModule = FavoriteModule;
//# sourceMappingURL=favorite.module.js.map