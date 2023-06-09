import { HttpException, HttpStatus } from '@nestjs/common';

export class NotfoundError extends HttpException {
  constructor(error?: any) {
    super(error || { message: 'Resource not found' }, HttpStatus.NOT_FOUND);
  }
}
