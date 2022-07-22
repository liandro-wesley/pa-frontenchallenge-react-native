import {ReadAPostModel} from '@domain/models/read-a-post.model';
import {GetAllFavoritePosts} from '@domain/usecases/get-all-favorite-posts.domain';
import {ReadAPost} from '@domain/usecases/read-a-post.domain';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import {Routes} from '@main/navigation/routes';
import {StackParams} from '@main/navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {Alert, ToastAndroid} from 'react-native';

type ReadPostScreenConsumerProps = {
  children: ReactNode;
  service: ReadAPost;
  favoritePosts: {
    get: GetAllFavoritePosts;
  };
  storage: StorageClientAdapter;
  navigation: NativeStackNavigationProp<StackParams, Routes.READ>;
};

type InitialContextProps = {
  post: ReadAPostModel;
  loading: boolean;
  navigation: NativeStackNavigationProp<StackParams, Routes.READ>;
  favoritePost: (post: ReadAPostModel) => Promise<void>;
  removeFavoritePost: (postId: string) => Promise<void>;
  isItFavorite: boolean;
};

export const ReadPostScreenContext = createContext<InitialContextProps>(
  {} as InitialContextProps,
);

export function useReadPostScreenContext() {
  return useContext(ReadPostScreenContext);
}

export function ReadPostScreenConsumer({
  children,
  service,
  navigation,
  storage,
  favoritePosts,
}: ReadPostScreenConsumerProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<ReadAPostModel>({} as ReadAPostModel);
  const [isItFavorite, setIsItFavorite] = useState(false);

  const favoritePost = useCallback(
    async (data: ReadAPostModel) => {
      try {
        setLoading(true);

        const hasFavoritePosts = await favoritePosts.get.findAll();
        if (hasFavoritePosts === null) {
          ToastAndroid.show(
            'Publicação adicionada à lista de favoritos',
            ToastAndroid.LONG,
          );
          setIsItFavorite(true);
          return await storage.set<ReadAPostModel[]>('favorites', [data]);
        } else {
          ToastAndroid.show(
            'Publicação adicionada à lista de favoritos',
            ToastAndroid.LONG,
          );
          setIsItFavorite(true);
          return await storage.set<ReadAPostModel[]>('favorites', [
            ...hasFavoritePosts,
            data,
          ]);
        }
      } catch (error: any) {
        navigation.navigate(Routes.HOME);
        setLoading(false);
        setIsItFavorite(false);
        Alert.alert('Atenção', `${error.message}`);
      } finally {
        setLoading(false);
      }
    },
    [navigation, storage, favoritePosts.get],
  );

  const removeFavoritePost = useCallback(
    async (postId: string) => {
      try {
        setLoading(true);

        const hasFavoritePosts = await favoritePosts.get.findAll();
        const addNewFavoritePosts = hasFavoritePosts.filter(
          data => data.id.toString() !== postId.toString(),
        );
        await storage.set<ReadAPostModel[]>('favorites', addNewFavoritePosts);
        setIsItFavorite(false);
        return ToastAndroid.show(
          'Publicação removida da lista de favoritos',
          ToastAndroid.LONG,
        );
      } catch (error: any) {
        navigation.navigate(Routes.HOME);
        setLoading(false);
        setIsItFavorite(false);
        Alert.alert('Atenção', `${error.message}`);
      } finally {
        setLoading(false);
      }
    },
    [navigation, storage, favoritePosts.get],
  );

  const postIsFavorited = useCallback(
    async (postId: string) => {
      try {
        const hasFavoritePosts = await favoritePosts.get.findAll();

        if (hasFavoritePosts === null || hasFavoritePosts === undefined) {
          return setIsItFavorite(false);
        } else {
          const response = hasFavoritePosts.find(
            data => data.id.toString() === postId.toString(),
          );
          if (response) {
            return setIsItFavorite(true);
          } else {
            return setIsItFavorite(false);
          }
        }
      } catch (error) {
        ToastAndroid.show(
          'Não foi possível identificar se a publicação está favoritada!',
          ToastAndroid.LONG,
        );
        return setIsItFavorite(false);
      }
    },
    [favoritePosts.get],
  );

  const triggerToGetPostDetails = useCallback(async () => {
    try {
      setLoading(true);
      const response = await service.details();
      await postIsFavorited(response.id);
      setPost(response);
    } catch (error: any) {
      try {
        setLoading(true);
        const response = await storage.get<ReadAPostModel>('posts');
        return setPost(response);
      } catch (err) {
        navigation.navigate(Routes.HOME);
        setLoading(false);
        Alert.alert('Atenção', `${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  }, [service, navigation, postIsFavorited, storage]);

  useEffect(() => {
    triggerToGetPostDetails();
  }, [triggerToGetPostDetails]);

  const value = {
    loading,
    post,
    navigation,
    favoritePost,
    isItFavorite,
    removeFavoritePost,
  };
  return (
    <ReadPostScreenContext.Provider value={value}>
      {children}
    </ReadPostScreenContext.Provider>
  );
}
