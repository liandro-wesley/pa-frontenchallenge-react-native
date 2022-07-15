import {HttpClient, HttpResponseValidate} from '@data/protocols/http';
import {CreateAPost} from '@domain/usecases/create-a-post.domain';
import {CreateAPostModel} from '@domain/models/create-a-post.model';

export class RemoteCreateAPost implements CreateAPost {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<CreateAPostModel>,
  ) {}

  async create(): Promise<CreateAPostModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return new HttpResponseValidate().validate(httpResponse);
  }
}
