import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        switch (err?.response?.statusCode || err?.response?.status) {
          case 400:
            let errors;
            try {
              errors = this.handleErrorsArray(err)
            } catch (error) {
              errors = error;
            }
            delete errors?.name
            throw new BadRequestException(errors);
          case 404:
            throw new NotFoundException(err.response);
          default:
            throw err;
        }
      }),
    );
  }

  /**
   * Refactor the error object
   * @param err
   */
  handleErrorsArray(err) {
    if (err?.response?.message?.search(':') !== -1) {
      const fieldError = err?.response?.message?.split(':');
      const field = fieldError[0];
      const error = fieldError[1];
      return {errors: {[field]: [`${error}`]}, message: 'validation_error'};
    } else {
      const error = {...err, ...err.response}
      delete error?.response;
      throw error;
    }
  }
}
