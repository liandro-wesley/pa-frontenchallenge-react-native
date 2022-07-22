import {HttpClient, HttpResponseValidate} from '@data/protocols/http';
import {ReadAPost} from '@domain/usecases/read-a-post.domain';
import {ReadAPostModel} from '@domain/models/read-a-post.model';

export class RemoteReadAPost implements ReadAPost {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ReadAPostModel>,
  ) {}

  async details(): Promise<ReadAPostModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    return new HttpResponseValidate().validate(httpResponse);
  }
}
