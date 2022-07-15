import {HttpResponse} from './HttpResponse';
import {HttpRequest} from './HttpRquest';

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}
