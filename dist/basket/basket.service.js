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
exports.BasketService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const basket_model_1 = require("./model/basket.model");
const order_model_1 = require("./model/order.model");
let BasketService = class BasketService {
    constructor(basketModel, ordertModel) {
        this.basketModel = basketModel;
        this.ordertModel = ordertModel;
    }
    async add(dto) {
        const existProduct = await this.basketModel.findOne({ user: dto.user, product: dto.product, size: dto.size });
        if (existProduct) {
            return await this.basketModel.updateOne({ _id: existProduct._id }, { $inc: { count: 1 } }, { new: true });
        }
        await this.basketModel.create(dto);
    }
    async changeCount(_id, dto) {
        const updatedProduct = await this.basketModel.findOneAndUpdate({ _id }, { $set: { count: dto.count } }, { new: true });
        if (updatedProduct.count === 0) {
            this.remove(_id);
        }
    }
    async remove(_id) {
        await this.basketModel.deleteOne({ _id });
    }
    async getBasketProduct(_id) {
        const basket = await this.basketModel.find({ user: _id }).populate('product');
        const count = basket.map((item) => item.count).reduce((i, acc) => acc + i, 0);
        const totalPrice = basket
            .map((item) => item.count * (item.product.price - item.product.sale))
            .reduce((i, acc) => acc + i, 0);
        return {
            basket,
            count,
            totalPrice,
        };
    }
    async confirmOrder(dto) {
        await this.ordertModel.create(dto);
        await this.basketModel.deleteMany({ _id: { $in: dto.basket } });
    }
};
BasketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(basket_model_1.Basket.name)),
    __param(1, (0, mongoose_1.InjectModel)(order_model_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], BasketService);
exports.BasketService = BasketService;
//# sourceMappingURL=basket.service.js.map