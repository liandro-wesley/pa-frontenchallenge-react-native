import {GetAllPosts} from '@domain/usecases/get-all-posts.domain';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import {Routes} from '@main/navigation/routes';
import {StackParams} from '@main/navigation/stack';
import Typography from '@presentation/components/Typography';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import React, {memo} from 'react';
import Action from './components/Actions';
import PostsList from './components/PostsList';
import {HomeScreenCosumer} from './contex';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';
import {FindAPost} from '@domain/usecases/find-a-post.domain';

const AddIcon = memo(() => <Icon name="post-add" size={24} />);

export type HomeScreenProps = {
  service: GetAllPosts;
  findAPost: FindAPost;

  storage: StorageClientAdapter;
  navigation: NativeStackNavigationProp<StackParams, Routes.READ>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({
  service,
  storage,
  navigation,
  findAPost,
}) => {
  return (
    <HomeScreenCosumer
      findAPost={findAPost}
      navigation={navigation}
      service={service}
      storage={storage}>
      <S.Container>
        <Action />
        <PostsList />
        <S.CreatePost onPress={() => navigation.navigate(Routes.CREATE)}>
          <Typography variant="body" color="white800">
            <AddIcon />
          </Typography>
        </S.CreatePost>
      </S.Container>
    </HomeScreenCosumer>
  );
};

export default HomeScreen;
