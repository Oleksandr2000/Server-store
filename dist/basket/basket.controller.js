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
exports.BasketController = void 0;
const common_1 = require("@nestjs/common");
const basket_service_1 = require("./basket.service");
const add_to_basket_dto_1 = require("./dto/add-to-basket.dto");
const confirm_order_dto_1 = require("./dto/confirm-order.dto");
const update_basket_dto_1 = require("./dto/update-basket.dto");
let BasketController = class BasketController {
    constructor(basketService) {
        this.basketService = basketService;
    }
    async getBasketProduct(param) {
        return this.basketService.getBasketProduct(param.id);
    }
    async addToBasket(dto) {
        return await this.basketService.add(dto);
    }
    async changeCount(param, dto) {
        return await this.basketService.changeCount(param.id, dto);
    }
    async removeFromBasket(param) {
        return await this.basketService.remove(param.id);
    }
    async confirmOrder(dto) {
        return await this.basketService.confirmOrder(dto);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "getBasketProduct", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_to_basket_dto_1.AddToBasketDto]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "addToBasket", null);
__decorate([
    (0, common_1.Patch)('count/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_basket_dto_1.UpdateBasketDto]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "changeCount", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "removeFromBasket", null);
__decorate([
    (0, common_1.Post)('confirm'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [confirm_order_dto_1.ConfirmOrderDto]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "confirmOrder", null);
BasketController = __decorate([
    (0, common_1.Controller)('basket'),
    __metadata("design:paramtypes", [basket_service_1.BasketService])
], BasketController);
exports.BasketController = BasketController;
//# sourceMappingURL=basket.controller.js.map