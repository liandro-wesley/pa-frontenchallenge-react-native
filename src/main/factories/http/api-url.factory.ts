import {BASE_URL} from '@env';

export const makeApiUrl = (path: string): string => {
  return `${BASE_URL}${path}`;
};
