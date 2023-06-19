import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';
import { Auth } from 'src/common/decorator/auth.decorator';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { UserDto } from '../user/dto/user.dto';

@Controller('auth')
@ApiTags('auth')
@ApiBearerAuth()
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
        ) {}

    @Auth()
    @Get('/get-me')
    @Serialize(UserDto)
    getMe(@CurrentUser() userId: number) {
        return this.userService.findOne({ id: userId })
    }

    @Post('/signup')
    signup(@Body() dto: CreateUserDto) {
        return this.authService.signup(dto)
    }

    @Post('/signin')
    signin(@Body() dto:AuthUserDto) {
        return this.authService.signin(dto)
    }
}
