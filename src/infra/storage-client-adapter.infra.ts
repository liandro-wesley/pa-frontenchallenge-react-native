import {GetStorage, SetStorage, RemoveStorage} from '@data/protocols/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageClientAdapter
  implements SetStorage, GetStorage, RemoveStorage
{
  /**
   * @async
   * @param key Reference to get a value in storage
   */
  public async get(key: string): Promise<any> {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(`${data}`);
  }

  /**
   * @async
   * @param key Reference to set a value in storage
   * @param value An object you want to insert into storage
   */
  public async set(key: string, value: object): Promise<void> {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @async
   * @param key Reference to remove a value in storage
   */
  public async remove(key: string): Promise<void> {
    return await AsyncStorage.removeItem(key);
  }
}
