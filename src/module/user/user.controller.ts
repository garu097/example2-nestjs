import { UpdateUserDto } from './dto/update-user.dto';
import { NotfoundError } from './../../common/errors/notfound.error';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@ApiTags('auth')
@Controller('auth')
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
        const user = this.userService.findOne(id)
        if(!user) {
            throw new NotfoundError()
        }
        return this.userService.remove(id)
    }
}
