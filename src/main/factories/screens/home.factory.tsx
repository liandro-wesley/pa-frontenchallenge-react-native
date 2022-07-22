import HomeScreen from '@presentation/screens/Home';
import React from 'react';
import {makeGetAllPosts} from '@main/factories/usecases/remote-get-all-posts.factory';
import {makeStorageAdapter} from '@main/factories/cache/storage-client-adapter.factory';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '@main/navigation/stack';
import {makeFindAPost} from '../usecases/remote-find-a-post.factory';

type Props = {
  navigation: NativeStackNavigationProp<StackParams, any>;
};

const HomeScreenFactory: React.FC<Props> = ({navigation}) => {
  return (
    <HomeScreen
      findAPost={makeFindAPost()}
      navigation={navigation}
      service={makeGetAllPosts()}
      storage={makeStorageAdapter()}
    />
  );
};

export default HomeScreenFactory;
