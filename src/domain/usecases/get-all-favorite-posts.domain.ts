import {GetAllFavoritePostsModel} from './../models/get-all-favorite-posts.model';

export interface GetAllFavoritePosts {
  findAll: () => Promise<GetAllFavoritePostsModel>;
}
