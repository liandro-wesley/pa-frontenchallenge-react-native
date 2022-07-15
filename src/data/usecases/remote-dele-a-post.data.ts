import {HttpClient, HttpResponseValidate} from '@data/protocols/http';
import {DeleteAPost} from '@domain/usecases/delete-a-post';

export class RemoteDeleteAPost implements DeleteAPost {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<DeleteAPost>,
  ) {}

  async remove(userId: string): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${userId}`,
      method: 'delete',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return new HttpResponseValidate().validate(httpResponse);
  }
}
