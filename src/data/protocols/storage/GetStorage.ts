export interface GetStorage {
  /**
   * @async
   * @param key Reference to get a value in storage
   */
  get: (key: string) => any;
}
