import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsLatitude, IsLongitude, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class UpdateReportDto {
    @ApiProperty()
    @Min(0)
    @IsNumber()
    @IsOptional()
    price: number

    @ApiProperty()
    @IsString()
    @IsOptional()
    made: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    model: string;

    @ApiProperty({ default: 2023 })
    @IsInt()
    @IsOptional()
    @Min(1950)
    @Max(2050)
    year: number;

    @ApiProperty()
    @IsOptional()
    @IsLongitude()
    lng: number;

    @ApiProperty()
    @IsOptional()
    @IsLatitude()
    lat: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Min(0)
    mileage: number;
}