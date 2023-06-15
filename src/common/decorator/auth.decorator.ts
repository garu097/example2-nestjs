import { JwtAuthGuard } from './../guard/jwt-auth.guard';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

export function Auth() {
  return applyDecorators(
    UseGuards(JwtAuthGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}