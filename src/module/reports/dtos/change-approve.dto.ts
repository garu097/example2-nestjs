import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class ChangeApproveDto {
    @ApiProperty()
    @IsBoolean()
    approved: boolean
}