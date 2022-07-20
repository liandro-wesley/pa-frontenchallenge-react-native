import {RemoteReadAPost} from '@data/usecases/remote-read-a-post.data';
import {ReadAPost} from '@domain/usecases/read-a-post.domain';
import {Routes} from '@main/navigation/routes';
import {StackParams} from '@main/navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {makeApiUrl} from '../http/api-url.factory';
import {makeHttpClient} from '../http/http-client.factory';

export const makeReadAPost = (
  route: RouteProp<StackParams, Routes.READ>,
): ReadAPost => {
  return new RemoteReadAPost(
    makeApiUrl(`/posts/${route.params.postId}`),
    makeHttpClient(),
  );
};
