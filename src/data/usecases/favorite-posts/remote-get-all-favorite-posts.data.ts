import {GetAllFavoritePostsModel} from '@domain/models/get-all-favorite-posts.model';
import {GetAllFavoritePosts} from '@domain/usecases/get-all-favorite-posts.domain';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';

export class RemoteGetAllFavoritePosts implements GetAllFavoritePosts {
  constructor(
    private readonly key: string,
    private readonly storage: StorageClientAdapter,
  ) {}

  async findAll(): Promise<GetAllFavoritePostsModel> {
    const response = await this.storage.get<GetAllFavoritePostsModel>(this.key);
    return response;
  }
}
