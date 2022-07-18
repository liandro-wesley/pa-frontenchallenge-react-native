import theme from '@presentation/theme';
import React, {type PropsWithChildren} from 'react';
import * as S from './style';

export type TypographyProps = {
  variant: 'title' | 'body' | 'overline';
  color: keyof typeof theme.colors;
};

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  variant,
  color,
  children,
}) => {
  return (
    <S.Wrapper color={color} variant={variant}>
      {children}
    </S.Wrapper>
  );
};

export default Typography;
