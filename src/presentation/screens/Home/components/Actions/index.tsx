import React, {memo} from 'react';
import * as S from './styles';

import PostFind from '@presentation/screens/Home/components/PostFind';
import Typography from '@presentation/components/Typography';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useHomeScreenContext} from '../../contex';
import {Routes} from '@main/navigation/routes';

const FavoriteIcon = memo(() => <Icon name="heart-o" size={24} />);

const Action: React.FC = () => {
  const {navigation} = useHomeScreenContext();
  return (
    <S.Container>
      <PostFind />
      <S.PostActions>
        <S.PostActionsItem onPress={() => navigation.navigate(Routes.FAVORITE)}>
          <Typography variant="body" color="white800">
            <FavoriteIcon />
          </Typography>
        </S.PostActionsItem>
      </S.PostActions>
    </S.Container>
  );
};

export default Action;
