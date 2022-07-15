export interface DeleteAPost {
  remove: (id: string) => Promise<void>;
}
