import theme from '@presentation/theme';
import React, {type PropsWithChildren} from 'react';
import {TextProps} from 'react-native';
import * as S from './style';

export type TypographyProps = {
  variant: 'title' | 'body' | 'overline';
  color: keyof typeof theme.colors;
} & TextProps;

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  variant,
  color,
  children,
  style,
}) => {
  return (
    <S.Text style={style} color={color} variant={variant}>
      {children}
    </S.Text>
  );
};

export default Typography;
