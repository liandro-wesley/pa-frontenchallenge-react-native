import React from 'react';
import {makeStorageAdapter} from '@main/factories/cache/storage-client-adapter.factory';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '@main/navigation/stack';
import CreatePostScreen from '@presentation/screens/CreatePost';
import {makeCreateAPost} from '../usecases/remote-create-a-post.factory';

type Props = {
  navigation: NativeStackNavigationProp<StackParams, any>;
};
const CreateScreenFactory: React.FC<Props> = ({navigation}) => {
  return (
    <CreatePostScreen
      storage={makeStorageAdapter()}
      navigation={navigation}
      postService={makeCreateAPost()}
    />
  );
};

export default CreateScreenFactory;
