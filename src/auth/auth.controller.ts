import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(201)
    @Post('registration')
    async register(@Body() dto: UserDto) {
        return await this.authService.registration(dto);
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: UserDto) {
        return await this.authService.login(dto);
    }
}
