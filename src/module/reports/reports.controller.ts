import { UpdateReportDto } from './dtos/update-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorator/auth.decorator';

@ApiTags('reports')
@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService){}

    @Get('/lists')
    @ApiQuery({ name: 'key', required: false})
    getListReports(@Query('key') key?: string) {
        return this.reportsService.find(key)
    }

    @Get('/:id')
    getReport(@Param('id') id: number) {
        return this.reportsService.findOneById(id)
    }

    @Auth()
    @Post('/create')
    createReport(@Body() dto: CreateReportDto) {
        return this.reportsService.create(dto)
    }

    @Auth()
    @Patch('/:id/update')
    updateReport(@Param('id')id: number,@Body() dto: UpdateReportDto) {
        return this.reportsService.update(id, dto)
    }

    @Auth()
    @Delete('/:id/delete')
    deleteReport(@Param('id') id: number) {
        return this.reportsService.remove(id)
    }
}
