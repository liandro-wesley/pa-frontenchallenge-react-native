import {RemoteDeleteAPost} from '@data/usecases/remote-dele-a-post.data';
import {makeApiUrl} from '../http/api-url.factory';
import {makeHttpClient} from '../http/http-client.factory';

export const makeDeleteAPost = (id: string): RemoteDeleteAPost => {
  return new RemoteDeleteAPost(makeApiUrl(`/posts/${id}`), makeHttpClient());
};
