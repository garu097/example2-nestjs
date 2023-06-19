import { UserEntity } from './../user/user.entity';
import { UpdateReportDto } from './dtos/update-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsEntity } from './reports.entity';
import { ILike, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChangeApproveDto } from './dtos/change-approve.dto';

@Injectable()
export class ReportsService {
    constructor(@InjectRepository(ReportsEntity) private readonly reportRepository: Repository<ReportsEntity>) {}

    create(user: UserEntity,dto: CreateReportDto) {
        const newReport = this.reportRepository.create(dto)
        newReport.user = user
        return this.reportRepository.save(newReport)
    }

    find(key?: string) {
        return this.reportRepository.find({
            where: key ? [
                { id: isNaN(+key) ? undefined : +key },
                { made: ILike(`%${key}%`) },
                { model: ILike(`%${key}%`) }
            ] : [],
            order: {
                id: "ASC"
            }
        })
    }

    async findOneById(id: number) {
        const report = await this.reportRepository.findOneBy({ id })
        if(!report) {
            throw new NotFoundException()
        }
        return report
    }

    async update(id: number, dto: Partial<UpdateReportDto>) {
        const report = await this.findOneById(id)
        Object.assign(report, dto)
        return this.reportRepository.save(report) 
    }

    async remove(id: number) {
        const report = await this.findOneById(id)
        return this.reportRepository.remove(report)
    }

    async changeApprove(id: number, dto: ChangeApproveDto){
        const report = await this.findOneById(id)
        report.approved = dto.approved
        return this.reportRepository.save(report)
    }
}
