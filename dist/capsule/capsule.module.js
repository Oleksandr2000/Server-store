"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapsuleModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const capsule_controller_1 = require("./capsule.controller");
const capsule_service_1 = require("./capsule.service");
const capsule_model_1 = require("./model/capsule.model");
let CapsuleModule = class CapsuleModule {
};
CapsuleModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: capsule_model_1.Capsule.name, schema: capsule_model_1.CapsuleSchema }])],
        providers: [capsule_service_1.CapsuleService],
        controllers: [capsule_controller_1.CapsuleController],
    })
], CapsuleModule);
exports.CapsuleModule = CapsuleModule;
//# sourceMappingURL=capsule.module.js.map