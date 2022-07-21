import React, {memo} from 'react';
import * as S from './styles';

import PostFind from '@presentation/screens/Home/components/PostFind';
import Typography from '@presentation/components/Typography';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteIcon = memo(() => <Icon name="heart-o" size={24} />);

const Action: React.FC = () => {
  return (
    <S.Container>
      <PostFind />
      <S.PostActions>
        <S.PostActionsItem>
          <Typography variant="body" color="white800">
            <FavoriteIcon />
          </Typography>
        </S.PostActionsItem>
      </S.PostActions>
    </S.Container>
  );
};

export default Action;
