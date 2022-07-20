import {ReadAPostModel} from '@domain/models/read-a-post.model';
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
import {Alert} from 'react-native';

type ReadPostScreenConsumerProps = {
  children: ReactNode;
  service: ReadAPost;
  storage: StorageClientAdapter;
  navigation: NativeStackNavigationProp<StackParams, Routes.READ>;
};

type InitialContextProps = {
  post: ReadAPostModel;
  loading: boolean;
  navigation: NativeStackNavigationProp<StackParams, Routes.READ>;
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
}: ReadPostScreenConsumerProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<ReadAPostModel>({} as ReadAPostModel);

  const triggerToGetPostDetails = useCallback(async () => {
    try {
      setLoading(true);
      const response = await service.details();
      setPost(response);
    } catch (error: any) {
      navigation.navigate(Routes.HOME);
      setLoading(false);
      Alert.alert('Atenção', `${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [service, navigation]);

  useEffect(() => {
    triggerToGetPostDetails();
  }, [triggerToGetPostDetails]);

  const value = {
    loading,
    post,
    navigation,
  };
  return (
    <ReadPostScreenContext.Provider value={value}>
      {children}
    </ReadPostScreenContext.Provider>
  );
}
