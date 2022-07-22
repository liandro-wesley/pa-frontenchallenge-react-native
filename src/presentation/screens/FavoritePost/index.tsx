import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import {StackParams} from '@main/navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import Action from './components/Actions';
import PostsList from './components/PostsList';
import {FavoritePostsScreenConsumer} from './contex';
import * as S from './style';

type Props = {
  storage: StorageClientAdapter;
  navigation: NativeStackNavigationProp<StackParams, any>;
};

const FavoritePostsScreen: React.FC<Props> = ({storage, navigation}) => {
  return (
    <FavoritePostsScreenConsumer navigation={navigation} storage={storage}>
      <S.Container>
        <Action />
        <PostsList />
      </S.Container>
    </FavoritePostsScreenConsumer>
  );
};

export default FavoritePostsScreen;
