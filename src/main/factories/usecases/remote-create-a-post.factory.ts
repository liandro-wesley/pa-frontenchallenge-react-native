import {RemoteCreateAPost} from '@data/usecases/posts/remote-create-a-post.data';
import {CreateAPost} from '@domain/usecases/create-a-post.domain';
import {makeApiUrl} from '../http/api-url.factory';
import {makeHttpClient} from '../http/http-client.factory';

export const makeCreateAPost = (): CreateAPost => {
  return new RemoteCreateAPost(makeApiUrl('/posts'), makeHttpClient());
};
