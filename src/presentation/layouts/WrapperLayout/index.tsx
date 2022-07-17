import React, {type PropsWithChildren} from 'react';
import {StatusBar} from 'react-native';
import * as S from './style';
const WrapperLayout: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <S.WrapperLayout>
      <StatusBar backgroundColor="#000" />
      {children}
    </S.WrapperLayout>
  );
};

export default WrapperLayout;
