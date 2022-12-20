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
exports.CapsuleController = void 0;
const common_1 = require("@nestjs/common");
const capsule_service_1 = require("./capsule.service");
const create_capsule_dto_1 = require("./dto/create-capsule.dto");
let CapsuleController = class CapsuleController {
    constructor(capsuleService) {
        this.capsuleService = capsuleService;
    }
    async create(dto) {
        return await this.capsuleService.create(dto);
    }
    async remove(id) {
        return await this.capsuleService.remove(id);
    }
    async update(dto, id) {
        return await this.capsuleService.update(dto, id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_capsule_dto_1.CreateCapsuleDto]),
    __metadata("design:returntype", Promise)
], CapsuleController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CapsuleController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_capsule_dto_1.CreateCapsuleDto, String]),
    __metadata("design:returntype", Promise)
], CapsuleController.prototype, "update", null);
CapsuleController = __decorate([
    (0, common_1.Controller)('capsule'),
    __metadata("design:paramtypes", [capsule_service_1.CapsuleService])
], CapsuleController);
exports.CapsuleController = CapsuleController;
//# sourceMappingURL=capsule.controller.js.map