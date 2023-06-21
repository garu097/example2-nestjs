import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { Role } from "src/common/constant/roles.constant";

export class UserDto {
    @ApiProperty()
    @Expose()
    id: number

    @ApiProperty()
    @Expose()
    name: string

    @ApiProperty()
    @Expose()
    email: string

    @Expose()
    @ApiProperty()

    accessToken: string

    @Expose()
    @ApiProperty()
    role: Role
}