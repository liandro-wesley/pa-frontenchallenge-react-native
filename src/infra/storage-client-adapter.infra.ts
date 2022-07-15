import {GetStorage, SetStorage, RemoveStorage} from '@data/protocols/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageClientAdapter
  implements SetStorage, GetStorage, RemoveStorage
{
  public async get(key: string): Promise<any> {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(`${data}`);
  }

  public async set(key: string, value: object): Promise<void> {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  public async remove(key: string): Promise<void> {
    return await AsyncStorage.removeItem(key);
  }
}
