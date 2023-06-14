import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './../user/user.module';
import { JWT_CONSTANTS } from 'src/common/constant/jwt.constant';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';


@Module({
  imports: [
    JwtModule.register({
    global: true,
    secret: JWT_CONSTANTS.SECRET,
    signOptions: { expiresIn: '60s' },
  }),
  PassportModule,
  UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
