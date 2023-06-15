import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class AuthUserDto {
    @ApiProperty({ default: 'garu09111@gmail.com'})
    @IsNotEmpty()
    @IsEmail()
    email: string
    
    @ApiProperty({default: 'string12'})
    @IsNotEmpty()
    @IsString()
    password: string
}