import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/signup')
    signup(@Body() dto: CreateUserDto) {
        return this.authService.signup(dto)
    }

    @Post('/signin')
    signin(@Body() dto:AuthUserDto) {
        return this.authService.signin(dto)
    }
}
