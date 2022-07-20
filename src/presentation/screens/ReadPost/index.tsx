import {ReadAPost} from '@domain/usecases/read-a-post.domain';
import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import {Routes} from '@main/navigation/routes';
import {StackParams} from '@main/navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {type PropsWithChildren} from 'react';
import View from './components/View';
import {ReadPostScreenConsumer} from './contex';
import * as S from './style';

type Props = {
  service: ReadAPost;
  storage: StorageClientAdapter;
  navigation: NativeStackScreenProps<StackParams, Routes.READ>;
};

const ReadPostScreen: React.FC<PropsWithChildren<Props>> = ({
  service,
  storage,
  navigation,
}) => {
  return (
    <ReadPostScreenConsumer
      service={service}
      storage={storage}
      navigation={navigation}>
      <S.Container>
        <View />
      </S.Container>
    </ReadPostScreenConsumer>
  );
};

export default ReadPostScreen;
