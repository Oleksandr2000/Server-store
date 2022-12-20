"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsModule = void 0;
const common_1 = require("@nestjs/common");
const review_service_1 = require("./review.service");
const review_controller_1 = require("./review.controller");
const review_model_1 = require("./review.model");
const mongoose_1 = require("@nestjs/mongoose");
let ReviewsModule = class ReviewsModule {
};
ReviewsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: review_model_1.Review.name, schema: review_model_1.ReviewSchema }])],
        providers: [review_service_1.ReviewsService],
        controllers: [review_controller_1.ReviewsController],
    })
], ReviewsModule);
exports.ReviewsModule = ReviewsModule;
//# sourceMappingURL=review.module.js.map