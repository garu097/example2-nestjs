import { UpdateUserDto } from './dto/update-user.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query , ClassSerializerInterceptor} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
@ApiTags('auth')
@Controller('auth')
@Serialize(UserDto)
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Get('/search')
    searchdUserByKey(@Query('key') key: string) {
        return this.userService.find(key)
    }

    @Get('/:id')
    findUser(@Param('id')id: number) {
        return this.userService.findOne(id)
    }

    @Post('/signup')
    createUser(@Body() dto: CreateUserDto) {
        return this.userService.create(dto)
    }

    @Patch('/:id')
    updateUser(@Param('id') id: number, @Body() dto: UpdateUserDto) {
        return this.userService.update(id, dto)
    }

    @Delete('/:id')
    deleteUser(@Param('id')id: number) {
        return this.userService.remove(id)
    }
}
