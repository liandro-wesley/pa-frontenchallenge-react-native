import React, {memo, useEffect, useState} from 'react';
import * as S from './style';

import Typography from '@presentation/components/Typography';
import getColors from '@presentation/helpers/getColors';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Keyboard} from 'react-native';

const SearchIcon = memo(() => <Icon name="search" size={24} />);

const PostFind: React.FC = () => {
  const [_keyboardState, setKeyboardState] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      return setKeyboardState(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      return setKeyboardState(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
      _keyboardState;
    };
  }, [_keyboardState]);
  return (
    <>
      <S.InputSearch
        placeholderTextColor={getColors('gray900')}
        keyboardAppearance="dark"
        placeholder="Busque por palavras-chave..."
      />
      <S.SearchButton>
        <Typography variant="body" color="white800">
          <SearchIcon />
        </Typography>
      </S.SearchButton>
    </>
  );
};

export default PostFind;
