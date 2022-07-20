import {GetAllPosts} from '@domain/usecases/get-all-posts.domain';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';

import React from 'react';
import PostsList from './components/PostsList';
import {HomeScreenCosumer} from './contex';
import * as S from './styles';

export type HomeScreenProps = {
  service: GetAllPosts;
  storage: StorageClientAdapter;
};

const HomeScreen: React.FC<HomeScreenProps> = ({service, storage}) => {
  return (
    <HomeScreenCosumer service={service} storage={storage}>
      <S.Container>
        <PostsList />
      </S.Container>
    </HomeScreenCosumer>
  );
};

export default HomeScreen;
