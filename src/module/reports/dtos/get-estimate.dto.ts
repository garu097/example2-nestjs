import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsLatitude, IsLongitude, IsOptional, IsString, Max, Min } from 'class-validator';
export class GetEstimateDto {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    made: string

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    model: string

    @ApiProperty({ required: false })
    @IsLongitude()
    @IsOptional()
    lng: number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsLatitude()
    lat: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @Transform(({value}) => parseInt(value))
    @IsInt()
    @Min(1950)
    @Max(2050)
    year: number

    @ApiProperty({ required: false })
    @IsOptional()
    @Transform(({value}) => parseInt(value))
    @IsInt()
    mileage: number;
}