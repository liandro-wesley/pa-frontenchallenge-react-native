import {HttpClient, HttpResponseValidate} from '@data/protocols/http';
import {GetAllPosts} from '@domain/usecases/get-all-posts.domain';
import {GetAllPostsModel} from '@domain/models/get-all-posts.model';

export class RemoteGetAllPosts implements GetAllPosts {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetAllPostsModel>,
  ) {}

  async findAll(): Promise<GetAllPostsModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    return new HttpResponseValidate().validate(httpResponse);
  }
}
