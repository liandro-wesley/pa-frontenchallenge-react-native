import FavoritePostsScreen from '@presentation/screens/FavoritePost';
import React from 'react';
import {makeStorageAdapter} from '../cache/storage-client-adapter.factory';

const FavoritePostsScreenFactory: React.FC = () => {
  return <FavoritePostsScreen storage={makeStorageAdapter()} />;
};

export default FavoritePostsScreenFactory;
