import {CreateAPostModel} from '@domain/models/create-a-post.model';

export type Params = {
  title: string;
  body: string;
  id: string;
  userId: string;
};

export interface CreateAPost {
  create: (params: Params) => Promise<CreateAPostModel>;
}
