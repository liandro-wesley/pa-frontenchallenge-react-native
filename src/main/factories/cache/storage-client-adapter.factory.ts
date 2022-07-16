import {StorageClientAdapter} from '@infra/storage-client-adapter.infra';

export const makeStorageAdapter = (): StorageClientAdapter => {
  return new StorageClientAdapter();
};
