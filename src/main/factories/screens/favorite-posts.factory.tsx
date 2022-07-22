import {StackParams} from '@main/navigation/stack';
import FavoritePostsScreen from '@presentation/screens/FavoritePost';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {makeStorageAdapter} from '../cache/storage-client-adapter.factory';

type Props = {
  navigation: NativeStackNavigationProp<StackParams, any>;
};

const FavoritePostsScreenFactory: React.FC<Props> = ({navigation}) => {
  return (
    <FavoritePostsScreen
      navigation={navigation}
      storage={makeStorageAdapter()}
    />
  );
};

export default FavoritePostsScreenFactory;
