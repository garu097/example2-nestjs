import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
    constructor(private readonly userService:UserService) {}

    @ApiTags('auth')
    @Get('/:id')
    findUser(@Param('id')id: number) {
        return this.userService.findOne(id)
    }

    @ApiTags('auth')
    @Get('/search/:key')
    searchdUserByKey(@Param('key') key: string) {
        return this.userService.find(key)
    }

    @ApiTags('auth')
    @Post('/signup')
    createUser(@Body() dto: CreateUserDto) {
        return this.userService.create(dto)
    }

}
