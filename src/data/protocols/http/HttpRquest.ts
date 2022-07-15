import {HtppMethod} from './HttpMethod';
import {HttpRequestHeaders} from './HttpRequestHeaders';

export type HttpRequest = {
  url: string;
  method: HtppMethod;
  body?: any;
  params?: any;
  headers?: HttpRequestHeaders;
};
