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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPageSchema = exports.TopPage = exports.Offer = exports.TopAdvantages = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class TopAdvantages {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopAdvantages.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopAdvantages.prototype, "description", void 0);
exports.TopAdvantages = TopAdvantages;
class Offer {
}
exports.Offer = Offer;
let TopPage = class TopPage {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPage.prototype, "firstCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPage.prototype, "secondCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], TopPage.prototype, "alias", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPage.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPage.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(Offer),
    __metadata("design:type", Offer)
], TopPage.prototype, "offer", void 0);
__decorate([
    (0, mongoose_1.Prop)([TopAdvantages]),
    __metadata("design:type", Array)
], TopPage.prototype, "advantages", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPage.prototype, "seoText", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPage.prototype, "tagsTitle", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], TopPage.prototype, "tags", void 0);
TopPage = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], TopPage);
exports.TopPage = TopPage;
exports.TopPageSchema = mongoose_1.SchemaFactory.createForClass(TopPage);
//# sourceMappingURL=top-page.model.js.map