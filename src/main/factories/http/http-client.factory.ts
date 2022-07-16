import {AxiosHttpClient} from '@infra/http-client-adapter.infra';

export const makeHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};
