import {Routes} from '@main/navigation/routes';

declare type StackParams = {
  [Routes.HOME]: undefined;
  [Routes.READ]: {postId: string};
};
