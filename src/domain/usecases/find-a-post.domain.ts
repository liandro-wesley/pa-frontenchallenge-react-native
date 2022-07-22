import {FindAPostModel} from '@domain/models/find-a-post.model';

export interface FindAPost {
  search: (title: string) => Promise<FindAPostModel[]>;
}
