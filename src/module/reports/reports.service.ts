import { UserEntity } from './../user/user.entity';
import { UpdateReportDto } from './dtos/update-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsEntity } from './reports.entity';
import { ILike, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChangeApproveDto } from './dtos/change-approve.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';

@Injectable()
export class ReportsService {
    constructor(@InjectRepository(ReportsEntity) private readonly reportRepository: Repository<ReportsEntity>) {}

    create(user: UserEntity,dto: CreateReportDto) {
        const newReport = this.reportRepository.create(dto)
        newReport.user = user
        return this.reportRepository.save(newReport)
    }

    async createEstimate(dto: GetEstimateDto) {
        const { made, model, lng, lat, year, mileage } = dto 
        
        const queryBuilder = this.reportRepository.createQueryBuilder()
                .select("*");

        if (made) {
            queryBuilder.andWhere("made = :made", { made });
        }

        if (model) {
            queryBuilder.andWhere("model = :model", { model });
        }

        if(lng) {
            queryBuilder.andWhere("lng BETWEEN :minLng AND :maxLng", { minLng: Math.max(lng - 5, 0), maxLng: lng + 5 });
        }

        if(lat) {
            queryBuilder.andWhere("lat BETWEEN :minLat AND :maxLat", { minLat: Math.max(lat - 5, 0), maxLat: lat + 5 });
        }

        if(year) {
           queryBuilder.andWhere("year BETWEEN :minY AND :maxY", { minY: Math.max(year - 5, 1950), maxY: Math.min(year + 5, 2050) })
        }

        if(mileage) {
            queryBuilder.orderBy("ABS(:mileage - mileage)", "ASC")
                        .setParameter("mileage", mileage)
        }

        const result = await queryBuilder.getRawMany();

        return result
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
