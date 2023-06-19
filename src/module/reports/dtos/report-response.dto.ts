import { Expose, Transform } from 'class-transformer';
export class ReportResponseDto {
    @Expose()
    id: number;
    @Expose()
    price: number;
    @Expose()
    made: string;
    @Expose()
    model: string;
    @Expose()
    year: number;
    @Expose()
    approved: boolean;
    @Expose()
    lng: number;
    @Expose()
    lat: number;
    @Expose()
    mileage: number;
    @Expose()
    @Transform(({ obj }) => obj.user?.id)
   userId: number;
}