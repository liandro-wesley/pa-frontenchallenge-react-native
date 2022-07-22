import React, {memo} from 'react';
import * as S from './styles';

import Typography from '@presentation/components/Typography';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useCreateScreenContext} from '../../context';

const BackIcon = memo(() => <Icon name="chevron-left" size={24} />);

const Action: React.FC = () => {
  const {navigation} = useCreateScreenContext();
  return (
    <S.Container>
      <S.Back onPress={() => navigation.goBack()}>
        <Typography variant="body" color="white800">
          <BackIcon />
        </Typography>
        <Typography variant="body" color="white800">
          &nbsp;&nbsp; Voltar para listagem
        </Typography>
      </S.Back>
    </S.Container>
  );
};

export default Action;
