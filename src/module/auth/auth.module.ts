import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';


@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get('jwt.secret'),
          signOptions: {
            expiresIn: configService.get('jwt.expiresIn'),
          },
        }
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  PassportModule,
  UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
