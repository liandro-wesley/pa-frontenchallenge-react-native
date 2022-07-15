import {HttpStatus} from './HttpStatus';

export type HttpResponse<T = any> = {
  statusCode: HttpStatus;
  body: T;
};
