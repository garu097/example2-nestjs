import { Expose } from "class-transformer";
import { Role } from "src/common/constant/roles.constant";

export class UserDto {
    @Expose()
    id: number

    @Expose()
    name: string

    @Expose()
    email: string

    @Expose()
    accessToken: string

    @Expose()
    role: Role
}