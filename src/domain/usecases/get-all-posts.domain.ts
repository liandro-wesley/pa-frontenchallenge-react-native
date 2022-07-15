import {GetAllPostsModel} from '@domain/models/get-all-posts.model';

export interface GetAllPosts {
  findAll: () => Promise<GetAllPostsModel>;
}
