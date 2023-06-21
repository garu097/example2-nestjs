import { ReportResponseDto } from './dtos/report-response.dto';
import { UpdateReportDto } from './dtos/update-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import {  Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorator/auth.decorator';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';
import { UserService } from '../user/user.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { ChangeApproveDto } from './dtos/change-approve.dto';
import { Role } from 'src/common/constant/roles.constant';
import { GetEstimateDto } from './dtos/get-estimate.dto';


@ApiTags('reports')
@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService,
                private readonly userService: UserService
        ){}

    @Get('/lists')
    @ApiQuery({ name: 'key', required: false})
    getListReports(@Query('key') key?: string) {
        return this.reportsService.find(key)
    }

    @Get('/estimate')
    getEstimate( @Query() dto: GetEstimateDto) {
        return this.reportsService.createEstimate(dto)
    }

    @Serialize(ReportResponseDto)
    @Get('/:id')
    getReport(@Param('id') id: number) {
        return this.reportsService.findOneById(id)
    }

    @Auth()
    @Serialize(ReportResponseDto)
    @Post('/create')
    async createReport(@CurrentUser() userId: number,@Body() dto: CreateReportDto) {
        const user = await this.userService.findOne({ id: userId })
        return this.reportsService.create(user ,dto)
    }

    @Auth(Role.Admin)
    @Patch('/:id/update')
    updateReport(@Param('id')id: number,@Body() dto: UpdateReportDto) {
        return this.reportsService.update(id, dto)
    }

    @Auth()
    @Patch('/:id/approve')
    changeApproveReport(@Param('id')id: number, @Body() dto: ChangeApproveDto, @CurrentUser() user ) {
        console.log("USER", user)
        return this.reportsService.changeApprove(id, dto)
    }

    @Auth()
    @Delete('/:id/delete')
    deleteReport(@Param('id') id: number) {
        return this.reportsService.remove(id)
    }
}
