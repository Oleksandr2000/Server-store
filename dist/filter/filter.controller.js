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
exports.FilterController = void 0;
const common_1 = require("@nestjs/common");
const create_filter_dto_1 = require("./create-filter.dto");
const filter_service_1 = require("./filter.service");
let FilterController = class FilterController {
    constructor(filterService) {
        this.filterService = filterService;
    }
    async getAllFilters() {
        return await this.filterService.getAllFilters();
    }
    async getCategoryFilters(param) {
        return await this.filterService.getCategoryFilters(param.id);
    }
    async getColor(param) {
        return await this.filterService.getColor(param.slug);
    }
    async getMaterial(param) {
        return await this.filterService.getMaterial(param.slug);
    }
    async getSize(param) {
        return await this.filterService.getSize(param.slug);
    }
    async createColor(dto) {
        return await this.filterService.createColor(dto);
    }
    async createMaterial(dto) {
        return await this.filterService.createMaterial(dto);
    }
    async createSize(dto) {
        return await this.filterService.createSize(dto);
    }
    async updateColor(dto, param) {
        return await this.filterService.updateColor(dto, param.id);
    }
    async updateMaterial(dto, param) {
        return await this.filterService.updateMaterial(dto, param.id);
    }
    async updateSize(dto, param) {
        return await this.filterService.updateSize(dto, param.id);
    }
    async deleteColor(param) {
        return await this.filterService.deleteColor(param.id);
    }
    async deleteMaterial(param) {
        return await this.filterService.deleteMaterial(param.id);
    }
    async deleteSize(param) {
        return await this.filterService.deleteSize(param.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "getAllFilters", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "getCategoryFilters", null);
__decorate([
    (0, common_1.Get)('color/:slug'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "getColor", null);
__decorate([
    (0, common_1.Get)('material/:slug'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "getMaterial", null);
__decorate([
    (0, common_1.Get)('size/:slug'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "getSize", null);
__decorate([
    (0, common_1.Post)('color'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateFilterDto]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "createColor", null);
__decorate([
    (0, common_1.Post)('material'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateFilterDto]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "createMaterial", null);
__decorate([
    (0, common_1.Post)('size'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateFilterDto]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "createSize", null);
__decorate([
    (0, common_1.Patch)('color/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateFilterDto, Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "updateColor", null);
__decorate([
    (0, common_1.Patch)('material/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateFilterDto, Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "updateMaterial", null);
__decorate([
    (0, common_1.Patch)('size/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateFilterDto, Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "updateSize", null);
__decorate([
    (0, common_1.Delete)('color/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "deleteColor", null);
__decorate([
    (0, common_1.Delete)('material/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "deleteMaterial", null);
__decorate([
    (0, common_1.Delete)('size/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilterController.prototype, "deleteSize", null);
FilterController = __decorate([
    (0, common_1.Controller)('/filter'),
    __metadata("design:paramtypes", [filter_service_1.FilterService])
], FilterController);
exports.FilterController = FilterController;
//# sourceMappingURL=filter.controller.js.map