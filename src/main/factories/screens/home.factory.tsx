import HomeScreen from '@presentation/screens/Home';
import React from 'react';
import {makeGetAllPosts} from '@main/factories/usecases/remote-get-all-posts.factory';

const HomeScreenFactory: React.FC = () => {
  return <HomeScreen getAllPosts={makeGetAllPosts()} />;
};

export default HomeScreenFactory;
