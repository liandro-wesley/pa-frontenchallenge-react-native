import React, {memo, useEffect, useState} from 'react';
import * as S from './style';

import Typography from '@presentation/components/Typography';
import getColors from '@presentation/helpers/getColors';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Keyboard} from 'react-native';
import {useHomeScreenContext} from '../../contex';

const SearchIcon = memo(() => <Icon name="search" size={24} />);

const PostFind: React.FC = () => {
  const {triggerToFindAPost} = useHomeScreenContext();
  const [_keyboardState, setKeyboardState] = useState(false);
  const [title, setTitle] = useState('');

  const handleSubmit = async () => {
    if (title !== '' && title.length >= 3) {
      return await triggerToFindAPost(title);
    }
  };
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
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <S.SearchButton onPress={() => handleSubmit()}>
        <Typography variant="body" color="white800">
          <SearchIcon />
        </Typography>
      </S.SearchButton>
    </>
  );
};

export default PostFind;
