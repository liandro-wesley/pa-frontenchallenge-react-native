import {RemoteGetAllPosts} from '@data/usecases/posts/remote-get-all-posts.data';
import {GetAllPosts} from '@domain/usecases/get-all-posts.domain';
import {makeApiUrl} from '../http/api-url.factory';
import {makeHttpClient} from '../http/http-client.factory';

export const makeGetAllPosts = (): GetAllPosts => {
  return new RemoteGetAllPosts(makeApiUrl('/posts'), makeHttpClient());
};
