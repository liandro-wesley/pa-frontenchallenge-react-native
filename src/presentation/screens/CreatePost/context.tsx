import {CreateAPostModel} from '@domain/models/create-a-post.model';
import {CreateAPost} from '@domain/usecases/create-a-post.domain';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import {StackParams} from '@main/navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {v4 as uuidv4} from 'uuid';

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {Routes} from '@main/navigation/routes';

type CreateScreenConsumerProps = {
  children: ReactNode;
  postService: CreateAPost;
  navigation: NativeStackNavigationProp<StackParams, any>;
  storage: StorageClientAdapter;
};

type InitialContextProps = {
  loading: boolean;
  navigation: NativeStackNavigationProp<StackParams, any>;
  createPost: (data: CreateAPostModel) => Promise<CreateAPostModel>;
};

export const CreateScreenContext = createContext<InitialContextProps>(
  {} as InitialContextProps,
);

export function useCreateScreenContext() {
  return useContext(CreateScreenContext);
}

export function CreateScreenConsumer({
  children,
  postService,
  navigation,
  storage,
}: CreateScreenConsumerProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const createPost = useCallback(
    async (data: CreateAPostModel): Promise<CreateAPostModel> => {
      try {
        setLoading(true);
        const response = await postService.create({
          body: data.body,
          title: data.title,
          id: data.id,
          userId: data.userId,
        });
        if (response) {
          ToastAndroid.show('Publicação criada com sucesso', ToastAndroid.LONG);
          await storage.set<CreateAPostModel>('posts', {
            ...data,
            id: data.id + uuidv4(),
          });
          navigation.navigate(Routes.HOME);
        }
        return response;
      } catch (error: any) {
        setLoading(true);
        Alert.alert('Atencao', error.message);
      } finally {
        setLoading(false);
      }
    },
    [navigation, postService, storage],
  );

  const value = {
    loading,
    navigation,
    createPost,
  };
  return (
    <CreateScreenContext.Provider value={value}>
      {children}
    </CreateScreenContext.Provider>
  );
}
