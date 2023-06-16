import { IsInt, IsLatitude, IsLongitude, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateReportDto {
    @Min(0)
    @IsNumber()
    price: number

    @IsString()
    made: string;

    @IsString()
    model: string;

    @IsInt()
    @Min(1950)
    @Max(2050)
    year: number;

    @IsLongitude()
    lng: number;

    @IsLatitude()
    lat: number;

    @IsNumber()
    @Min(0)
    mileage: number;
}