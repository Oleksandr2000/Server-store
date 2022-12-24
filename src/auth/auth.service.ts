import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './auth.model';
import { UserDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private jwtService: JwtService) {}

    async registration(dto: UserDto) {
        const existUser = await this.userModel.findOne({ email: dto.email });

        if (existUser) {
            throw new HttpException('Користувач існує', HttpStatus.BAD_REQUEST);
        }

        const salt = await bcrypt.genSalt(4);

        const passwordHash = await bcrypt.hash(dto.password, salt);

        const user = await this.userModel.create({
            name: dto.name,
            email: dto.email,
            number: dto.number,
            role: dto.role ?? 'USER',
            password: passwordHash,
        });

        const token = await this.generateToken(user);

        const res = {
            user: { ...user },
            token: token.token,
        };
        return res;
    }

    async login(dto: UserDto) {
        const user = await this.userModel.findOne({ email: dto.email }).exec();
        const passwordEquals = await bcrypt.compare(dto.password, user.password);
        if (!user || !passwordEquals) {
            throw new UnauthorizedException({ message: 'Невірні данні' });
        }

        const token = await this.generateToken(user);

        const res = {
            user: { _id: user._id, name: user.name, email: user.email, number: user.number, role: user.role },
            token: token.token,
        };

        return res;
    }

    private async generateToken(user: any) {
        const payload = { email: user.email };
        return {
            token: this.jwtService.sign(payload),
        };
    }
}
