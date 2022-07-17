import {GetAllPosts} from '@domain/usecases/get-all-posts.domain';
import React from 'react';
import {Text} from 'react-native';
import {HomeScreenCosumer} from './contex';
import * as S from './styles';

export type HomeScreenProps = {
  getAllPosts: GetAllPosts;
};

const HomeScreen: React.FC<HomeScreenProps> = ({getAllPosts}) => {
  return (
    <HomeScreenCosumer service={getAllPosts}>
      <S.Container>
        <Text>Home</Text>
      </S.Container>
    </HomeScreenCosumer>
  );
};

export default HomeScreen;
