import HomeScreen from '@presentation/screens/Home';
import React from 'react';
import {makeGetAllPosts} from '@main/factories/usecases/remote-get-all-posts.factory';
import {makeStorageAdapter} from '@main/factories/cache/storage-client-adapter.factory';

const HomeScreenFactory: React.FC = () => {
  return (
    <HomeScreen
      getAllPosts={makeGetAllPosts()}
      storage={makeStorageAdapter()}
    />
  );
};

export default HomeScreenFactory;
