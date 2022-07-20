import React, {memo} from 'react';
import Typography from '@presentation/components/Typography';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useReadPostScreenContext} from '../../contex';

const BackIcon = memo(() => <Icon name="chevron-left" size={24} />);
const DeleteIcon = memo(() => <Icon name="trash-o" size={24} />);
const FavoriteIcon = memo(() => <Icon name="heart-o" size={24} />);

const Action: React.FC = () => {
  const {post} = useReadPostScreenContext();
  return (
    <S.Container>
      <S.Back onPress={() => console.log('asdasdasd')}>
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
