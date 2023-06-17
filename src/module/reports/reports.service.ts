import { UpdateReportDto } from './dtos/update-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsEntity } from './reports.entity';
import { ILike, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReportsService {
    constructor(@InjectRepository(ReportsEntity) private readonly reportRepository: Repository<ReportsEntity>) {}

    create(dto: CreateReportDto) {
        const newReport = this.reportRepository.create(dto)
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
        if(!report) {
            throw new NotFoundException()
        }
        Object.assign(report, dto)
        return this.reportRepository.save(report) 
    }

    async remove(id: number) {
        const report = await this.findOneById(id)
        if(!report) {
            throw new NotFoundException()
        }
        return this.reportRepository.remove(report)
    }
}
