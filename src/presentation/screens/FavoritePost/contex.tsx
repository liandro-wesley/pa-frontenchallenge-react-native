import {GetAllPostsModel} from '@domain/models/get-all-posts.model';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import {StackParams} from '@main/navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  // Dispatch,
  // SetStateAction,
  useEffect,
  useCallback,
} from 'react';
import {Alert} from 'react-native';

type FavoritePostsScreenProps = {
  children: ReactNode;
  storage: StorageClientAdapter;
  navigation: NativeStackNavigationProp<StackParams, any>;
};

type InitialContextProps = {
  posts: GetAllPostsModel;
  loading: boolean;
  navigation: NativeStackNavigationProp<StackParams, any>;
};

export const FavoritePostsScreenContext = createContext<InitialContextProps>(
  {} as InitialContextProps,
);

export function useFavoritePostsScreenContext() {
  return useContext(FavoritePostsScreenContext);
}

export function FavoritePostsScreenConsumer({
  children,
  storage,
  navigation,
}: FavoritePostsScreenProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<GetAllPostsModel>([]);

  const triggerToGetAllPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await storage.get<GetAllPostsModel>('favorites');
      return setPosts(response);
    } catch (error: any) {
      setPosts([]);
      Alert.alert('Atenção', `${error.message}`);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [storage]);

  useEffect(() => {
    triggerToGetAllPosts();
  }, [triggerToGetAllPosts]);

  const value = {
    loading,
    posts,
    navigation,
  };
  return (
    <FavoritePostsScreenContext.Provider value={value}>
      {children}
    </FavoritePostsScreenContext.Provider>
  );
}
