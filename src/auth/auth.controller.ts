import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    @HttpCode(200)
    @Post('registr')
    async register(@Body() dto: UserDto) {}

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: UserDto) {}
}
