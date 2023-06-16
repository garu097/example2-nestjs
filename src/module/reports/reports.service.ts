import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsEntity } from './reports.entity';
import { ILike, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
    constructor( private readonly reportRepository: Repository<ReportsEntity>) {}

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

    findOneById(id: number) {
        return this.reportRepository.findOneBy({ id })
    }

    update(id: number) {
        
    }

    remove() {

    }
}
