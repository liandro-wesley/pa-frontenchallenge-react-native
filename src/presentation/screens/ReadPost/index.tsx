import {GetAllFavoritePosts} from '@domain/usecases/get-all-favorite-posts.domain';
import {ReadAPost} from '@domain/usecases/read-a-post.domain';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import {Routes} from '@main/navigation/routes';
import {StackParams} from '@main/navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {type PropsWithChildren} from 'react';
import View from './components/View';
import {ReadPostScreenConsumer} from './contex';
import * as S from './style';

type Props = {
  service: ReadAPost;
  favoritePosts: {
    get: GetAllFavoritePosts;
  };
  storage: StorageClientAdapter;
  navigation: NativeStackNavigationProp<StackParams, Routes.READ>;
};

const ReadPostScreen: React.FC<PropsWithChildren<Props>> = ({
  service,
  storage,
  navigation,
  favoritePosts,
}) => {
  return (
    <ReadPostScreenConsumer
      favoritePosts={favoritePosts}
      navigation={navigation}
      service={service}
      storage={storage}>
      <S.Container>
        <View />
      </S.Container>
    </ReadPostScreenConsumer>
  );
};

export default ReadPostScreen;
