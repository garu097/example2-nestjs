import { UpdateUserDto } from './dto/update-user.dto';
import { Body, Controller, Delete, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
@ApiTags('user')
@Controller('user')
@Serialize(UserDto)
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Get('/search')
    @ApiQuery({ name: 'key', required: false})
    searchdUserByKey(@Query('key') key: string) {
        return this.userService.find(key)
    }

    @Get('/:id/find')
    findUser(@Param('id')id: number) {
        return this.userService.findOne({ id })
    }


    @Patch('/:id/update')
    updateUser(@Param('id') id: number, @Body() dto: UpdateUserDto) {
        return this.userService.update(id, dto)
    }

    @Delete('/:id/delete')
    deleteUser(@Param('id')id: number) {
        return this.userService.remove(id)
    }
}
