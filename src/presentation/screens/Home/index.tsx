import {GetAllPosts} from '@domain/usecases/get-all-posts.domain';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import {Routes} from '@main/navigation/routes';
import {StackParams} from '@main/navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import React from 'react';
import PostsList from './components/PostsList';
import {HomeScreenCosumer} from './contex';
import * as S from './styles';

export type HomeScreenProps = {
  service: GetAllPosts;
  storage: StorageClientAdapter;
  navigation: NativeStackNavigationProp<StackParams, Routes.READ>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({
  service,
  storage,
  navigation,
}) => {
  return (
    <HomeScreenCosumer
      navigation={navigation}
      service={service}
      storage={storage}>
      <S.Container>
        <PostsList />
      </S.Container>
    </HomeScreenCosumer>
  );
};

export default HomeScreen;
