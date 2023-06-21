import { Body, Controller, Get, Post} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';
import { Auth } from 'src/common/decorator/auth.decorator';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { UserDto } from '../user/dto/user.dto';
import { UserEntity } from '../user/user.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
        ) {}

    @Auth()
    @ApiResponse({ type: UserDto})
    @Get('/get-me')
    @Serialize(UserDto)
    getMe(@CurrentUser() userId: number): Promise<UserEntity> {
        return this.userService.findOne({ id: userId })
    }

    @Post('/signup')
    @ApiResponse({ type: UserDto})
    signup(@Body() dto: CreateUserDto) {
        return this.authService.signup(dto)
    }

    @Post('/signin')
    @ApiResponse({ type: UserDto })
    @Serialize(UserDto)
    signin(@Body() dto:AuthUserDto) {
        return this.authService.signin(dto)
    }
}
