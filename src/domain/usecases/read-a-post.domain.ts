import {ReadAPostModel} from '@domain/models/read-a-post.model';

export type Params = {
  postId: string;
};

export interface ReadAPost {
  details: () => Promise<ReadAPostModel>;
}
