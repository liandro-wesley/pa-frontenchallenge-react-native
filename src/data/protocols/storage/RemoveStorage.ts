export interface RemoveStorage {
  /**
   * @async
   * @param key Reference to remove a value in storage
   */
  remove: (key: string) => any;
}
