import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmModuleOptions} from './common/config/typeorm.config';
import { UserModule } from './module/user/user.module';
import { ReportsModule } from './module/reports/reports.module';
import { AuthModule } from './module/auth/auth.module';
import configuration from './common/config/index.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleOptions),
    UserModule,
    ReportsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
