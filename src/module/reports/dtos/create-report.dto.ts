import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsLatitude, IsLongitude, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateReportDto {
    @ApiProperty()
    @Min(0)
    @IsNumber()
    price: number

    @ApiProperty()
    @IsString()
    made: string;

    @ApiProperty()
    @IsString()
    model: string;

    @ApiProperty({ default: 2023 })
    @IsInt()
    @Min(1950)
    @Max(2050)
    year: number;

    @ApiProperty()
    @IsLongitude()
    lng: number;

    @ApiProperty()
    @IsLatitude()
    lat: number;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    mileage: number;
}