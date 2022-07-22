import {GetAllPostsModel} from '@domain/models/get-all-posts.model';
import {FindAPost} from '@domain/usecases/find-a-post.domain';
import {GetAllPosts} from '@domain/usecases/get-all-posts.domain';
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
import {Alert, ToastAndroid} from 'react-native';

type HomeScreenCosumerProps = {
  children: ReactNode;
  service: GetAllPosts;
  findAPost: FindAPost;
  storage: StorageClientAdapter;
  navigation: NativeStackNavigationProp<StackParams, any>;
};

type InitialContextProps = {
  posts: GetAllPostsModel;
  loading: boolean;
  navigation: NativeStackNavigationProp<StackParams, any>;
  triggerToFindAPost: (title: string) => Promise<GetAllPostsModel>;
};

export const HomeScreenContext = createContext<InitialContextProps>(
  {} as InitialContextProps,
);

export function useHomeScreenContext() {
  return useContext(HomeScreenContext);
}

export function HomeScreenCosumer({
  children,
  service,
  storage,
  navigation,
  findAPost,
}: HomeScreenCosumerProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<GetAllPostsModel>([]);

  const triggerToFindAPost = useCallback(
    async (title: string): Promise<GetAllPostsModel> => {
      try {
        setLoading(true);
        const response = await findAPost.search(title);
        setPosts(response);
        ToastAndroid.show(
          `Achamos ${response.length} resultados para o termo ${title}`,
          ToastAndroid.LONG,
        );
        return response;
      } catch (error) {
        setLoading(true);
        ToastAndroid.show(
          'Não houve correspondência para sua busca',
          ToastAndroid.LONG,
        );
      } finally {
        setLoading(false);
      }
    },
    [findAPost],
  );

  const triggerToGetAllPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await service.findAll();
      const localResponse = await storage.get('posts');
      if (localResponse !== null || localResponse !== undefined) {
        return setPosts([localResponse, ...response]);
      } else {
        return setPosts(response);
      }
    } catch (error: any) {
      setPosts([]);
      Alert.alert('Atenção', `${error.message}`);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [service, storage]);

  useEffect(() => {
    triggerToGetAllPosts();
  }, [triggerToGetAllPosts]);

  const value = {
    loading,
    posts,
    navigation,
    triggerToFindAPost,
  };
  return (
    <HomeScreenContext.Provider value={value}>
      {children}
    </HomeScreenContext.Provider>
  );
}
