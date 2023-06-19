import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthUserDto } from '../auth/dto/auth-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as ms from 'ms';
import { ConfigService } from '@nestjs/config';
import { IPayload } from './dto/jwt-payload';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService, 
        private readonly jwtService: JwtService, 
        private readonly configService: ConfigService) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.findOne({ email })
        if(!user) {
            throw new UnauthorizedException("Your account is not yet registered ")
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            throw new UnauthorizedException("Password is not match")
        }

        return user
    }

    async signup(dto: CreateUserDto) {
        const isExist = !!(await this.userService.findOne({ email: dto.email }))
        if(isExist) {
            throw new UnauthorizedException("Email has been registered")
        }

        const hash = await bcrypt.hash(dto.password, 12)
        return this.userService.create({ email: dto.email, password: hash})
    }

    async signin(dto: AuthUserDto) {
        const user = await this.validateUser(dto.email, dto.password);
        const payload: IPayload = {
            userId: user.id,
            email: user.email
        }
        return {
            accessToken: await this.jwtService.signAsync(payload),
            expiresIn: ms(this.configService.get('jwt.expiresIn')),
        };
    }
}