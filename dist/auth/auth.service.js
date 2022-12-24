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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const auth_model_1 = require("./auth.model");
const bcrypt = require("bcryptjs");
const dist_1 = require("@nestjs/jwt/dist");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async registration(dto) {
        var _a;
        const existUser = await this.userModel.findOne({ email: dto.email });
        if (existUser) {
            throw new common_1.HttpException('Користувач існує', common_1.HttpStatus.BAD_REQUEST);
        }
        const salt = await bcrypt.genSalt(4);
        const passwordHash = await bcrypt.hash(dto.password, salt);
        const user = await this.userModel.create({
            name: dto.name,
            email: dto.email,
            number: dto.number,
            role: (_a = dto.role) !== null && _a !== void 0 ? _a : 'USER',
            password: passwordHash,
        });
        const token = await this.generateToken(user);
        const res = {
            user: Object.assign({}, user),
            token: token.token,
        };
        return res;
    }
    async login(dto) {
        const user = await this.userModel.findOne({ email: dto.email }).exec();
        const passwordEquals = await bcrypt.compare(dto.password, user.password);
        if (!user || !passwordEquals) {
            throw new common_1.UnauthorizedException({ message: 'Невірні данні' });
        }
        const token = await this.generateToken(user);
        const res = {
            user: { _id: user._id, name: user.name, email: user.email, number: user.number, role: user.role },
            token: token.token,
        };
        return res;
    }
    async generateToken(user) {
        const payload = { email: user.email };
        return {
            token: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(auth_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, dist_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map