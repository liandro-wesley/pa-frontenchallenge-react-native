import {GetAllPostsModel} from '@domain/models/get-all-posts.model';
import {GetAllPosts} from '@domain/usecases/get-all-posts.domain';
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import {Alert} from 'react-native';

type HomeScreenCosumerProps = {
  children: ReactNode;
  service: GetAllPosts;
};

type InitialContextProps = {
  posts: GetAllPostsModel;
  loading: boolean;
};

export const HomeScreenContext = createContext<InitialContextProps>(
  {} as InitialContextProps,
);

export function useHomeScreenContext() {
  return useContext(HomeScreenContext);
}

export function HomeScreenCosumer({children, service}: HomeScreenCosumerProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<GetAllPostsModel>([]);

  useEffect(() => {
    const triggerToGetAllPosts = async () => {
      try {
        const response = await service.findAll();
        setPosts(response);
      } catch (error) {
        setPosts([]);
        Alert.alert('Atenção', `${error}`);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
  });

  const value = {
    loading,
    posts,
  };
  return (
    <HomeScreenContext.Provider value={value}>
      {children}
    </HomeScreenContext.Provider>
  );
}
