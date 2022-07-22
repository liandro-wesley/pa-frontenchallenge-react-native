import React from 'react';
import {CreateAPost} from '@domain/usecases/create-a-post.domain';
import * as S from './styles';
import {CreateScreenConsumer} from './context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '@main/navigation/stack';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import Action from './components/Actions';
import PostForm from './components/PostForm';

type Props = {
  postService: CreateAPost;
  storage: StorageClientAdapter;

  navigation: NativeStackNavigationProp<StackParams, any>;
};

const CreatePostScreen: React.FC<Props> = ({
  postService,
  navigation,
  storage,
}) => {
  return (
    <CreateScreenConsumer
      navigation={navigation}
      storage={storage}
      postService={postService}>
      <S.Container>
        <Action />
        <PostForm />
      </S.Container>
    </CreateScreenConsumer>
  );
};

export default CreatePostScreen;
