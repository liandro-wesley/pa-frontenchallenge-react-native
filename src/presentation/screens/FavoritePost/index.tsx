import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';
import React from 'react';

type Props = {
  storage: StorageClientAdapter;
};

const FavoritePostsScreen: React.FC<Props> = ({storage}) => {
  console.log(storage);
  return null;
};

export default FavoritePostsScreen;
