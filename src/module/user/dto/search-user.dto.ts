import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsOptional, IsString } from "class-validator"

export class SearchUserDto {
    @ApiProperty()
    @IsOptional()
    @IsInt()
    id: number

    @ApiProperty()
    @IsOptional()
    @IsString()
    name: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    email: string
}