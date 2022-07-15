export interface SetStorage {
  /**
   * @async
   * @param key Reference to set a value in storage
   * @param value An object you want to insert into storage
   */
  get: (key: string, value: object) => void;
}
