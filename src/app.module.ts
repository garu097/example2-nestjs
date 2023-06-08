import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIG } from './common/config/orm-config';
import { UserModule } from './module/user/user.module';
import { ReportsModule } from './module/reports/reports.module';

@Module({
  imports: [
    UserModule,
    ReportsModule,
    TypeOrmModule.forRoot(CONFIG),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
