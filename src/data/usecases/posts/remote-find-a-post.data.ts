import {HttpClient, HttpResponseValidate} from '@data/protocols/http';
import {FindAPost} from '@domain/usecases/find-a-post.domain';
import {FindAPostModel} from '@domain/models/find-a-post.model';

export class RemoteFindAPost implements FindAPost {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<FindAPostModel>,
  ) {}

  async search(title: string): Promise<FindAPostModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params: title,
    });

    return new HttpResponseValidate().validate(httpResponse);
  }
}
