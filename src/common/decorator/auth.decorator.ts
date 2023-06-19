import { JwtAuthGuard } from './../guard/jwt-auth.guard';
import { applyDecorators,  SetMetadata,  UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { RolesGuard } from '../guard/roles.guard';
import { Role, ROLE } from '../constant/roles.constant';

export const Auth = (...roles: Role[]) => {
  return applyDecorators(
    SetMetadata(ROLE, roles ?? []),
    UseGuards(JwtAuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}