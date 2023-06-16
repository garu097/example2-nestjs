import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService){}

    @Get()
    getListReports() {
        
    }

    @Post('/create-report')
    createReport(@Body() dto: CreateReportDto) {
        return this.reportsService.create(dto)
    }
}
