import {RemoteFindAPost} from '@data/usecases/posts/remote-find-a-post.data';
import {FindAPost} from '@domain/usecases/find-a-post.domain';
import {makeApiUrl} from '../http/api-url.factory';
import {makeHttpClient} from '../http/http-client.factory';

export const makeFindAPost = (): FindAPost => {
  return new RemoteFindAPost(makeApiUrl('/posts'), makeHttpClient());
};
