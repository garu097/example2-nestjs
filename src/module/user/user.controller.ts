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

    }

    @ApiTags('auth')
    @Post('/signup')
    createUser(@Body() dto: CreateUserDto) {
        return dto
    }

}
