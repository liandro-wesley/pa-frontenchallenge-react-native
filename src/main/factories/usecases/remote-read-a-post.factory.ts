import {RemoteReadAPost} from '@data/usecases/remote-read-a-post.data';
import {ReadAPost} from '@domain/usecases/read-a-post.domain';
import {RouteProp} from '@react-navigation/native';
import {makeApiUrl} from '../http/api-url.factory';
import {makeHttpClient} from '../http/http-client.factory';

export const makeReadAPost = (
  route: RouteProp<{params: {postId: string}}, 'params'>,
): ReadAPost => {
  return new RemoteReadAPost(
    makeApiUrl(`/posts/${route.params.postId}`),
    makeHttpClient(),
  );
};
