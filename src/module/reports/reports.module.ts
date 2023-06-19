import { ReportsEntity } from './reports.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReportsEntity]), UserModule],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
