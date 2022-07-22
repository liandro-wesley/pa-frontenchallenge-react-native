import React from 'react';
import {makeStorageAdapter} from '@main/factories/cache/storage-client-adapter.factory';
import ReadPostScreen from '@presentation/screens/ReadPost';
import {makeReadAPost} from '../usecases/remote-read-a-post.factory';
import {RouteProp} from '@react-navigation/native';
import {StackParams} from '@main/navigation/stack';
import {Routes} from '@main/navigation/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {makeGetAllFavoritePosts} from '../usecases/favorite-posts/remote-get-all-favorite-posts';

type Props = {
  route: RouteProp<StackParams, Routes.READ>;
  navigation: NativeStackNavigationProp<StackParams, Routes.READ>;
};

const ReadPostScreenFactory: React.FC<Props> = ({route, navigation}) => {
  return (
    <ReadPostScreen
      favoritePosts={{
        get: makeGetAllFavoritePosts(),
      }}
      service={makeReadAPost(route)}
      storage={makeStorageAdapter()}
      navigation={navigation}
    />
  );
};

export default ReadPostScreenFactory;
