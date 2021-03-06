import {UnexpectedError} from '@domain/errors';
import {HttpResponse} from './HttpResponse';
import {HttpStatus} from './HttpStatus';

export class HttpResponseValidate {
  public validate(httpResponse: HttpResponse) {
    switch (httpResponse.statusCode) {
      case HttpStatus.OK:
        return httpResponse.body;
      case HttpStatus.CREATED:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }
}
