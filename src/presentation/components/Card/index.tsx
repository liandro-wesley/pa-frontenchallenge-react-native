import getColors from '@presentation/helpers/getColors';
import React from 'react';
import {Pressable, PressableProps} from 'react-native';
import * as S from './style';

type CardProps = {
  content: React.ReactNode;
  header: React.ReactNode;
} & PressableProps;

const Card: React.FC<CardProps> = ({content, header, ...props}) => {
  return (
    <S.CardWrapper>
      <Pressable
        {...props}
        android_ripple={{
          color: getColors('black800'),
          borderless: false,
        }}>
        <S.CardHeader>{header}</S.CardHeader>
        <S.CardBody>{content}</S.CardBody>
      </Pressable>
    </S.CardWrapper>
  );
};

export default Card;
