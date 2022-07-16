import {GetAllPosts} from '@domain/usecases/get-all-posts.domain';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {HomeScreenCosumer} from './contex';

export type HomeScreenProps = {
  getAllPosts: GetAllPosts;
};

const HomeScreen: React.FC<HomeScreenProps> = ({getAllPosts}) => {
  return (
    <HomeScreenCosumer service={getAllPosts}>
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </HomeScreenCosumer>
  );
};

export default HomeScreen;
