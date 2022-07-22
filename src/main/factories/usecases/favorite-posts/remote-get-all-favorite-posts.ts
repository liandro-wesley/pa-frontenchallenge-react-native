import {RemoteGetAllFavoritePosts} from '@data/usecases/favorite-posts/remote-get-all-favorite-posts.data';
import {GetAllFavoritePosts} from '@domain/usecases/get-all-favorite-posts.domain';
import {makeStorageAdapter} from '@main/factories/cache/storage-client-adapter.factory';

export const makeGetAllFavoritePosts = (): GetAllFavoritePosts => {
  return new RemoteGetAllFavoritePosts('favorites', makeStorageAdapter());
};
