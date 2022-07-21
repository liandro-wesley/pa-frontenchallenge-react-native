import React, {memo} from 'react';
import Typography from '@presentation/components/Typography';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useReadPostScreenContext} from '../../contex';
import {Routes} from '@main/navigation/routes';

const BackIcon = memo(() => <Icon name="chevron-left" size={24} />);
const DeleteIcon = memo(() => <Icon name="trash-o" size={24} />);
const FavoriteIcon = memo(() => <Icon name="heart-o" size={24} />);
const FavoriteIconSolid = memo(() => <Icon name="heart" size={24} />);

const Action: React.FC = () => {
  const {post, navigation, favoritePost, isItFavorite} =
    useReadPostScreenContext();
  return (
    <S.Container>
      <S.Back onPress={() => navigation.navigate(Routes.HOME)}>
        <Typography variant="body" color="white800">
          <BackIcon />
        </Typography>
        <Typography variant="body" color="white800">
          &nbsp;&nbsp; Voltar para listagem
        </Typography>
      </S.Back>
      <S.PostActions>
        <S.PostActionsItem onPress={() => console.log(post)}>
          <Typography variant="body" color="white800">
            <DeleteIcon />
          </Typography>
        </S.PostActionsItem>
        <S.PostActionsItem onPress={() => favoritePost(post)}>
          <Typography
            variant="body"
            color={isItFavorite ? 'accentColor' : 'white800'}>
            {isItFavorite && <FavoriteIconSolid />}
            {!isItFavorite && <FavoriteIcon />}
          </Typography>
        </S.PostActionsItem>
      </S.PostActions>
    </S.Container>
  );
};

export default Action;
