import getColors from '@presentation/helpers/getColors';
import React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
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
        }}
        style={styles.pressable}>
        <S.CardHeader>{header}</S.CardHeader>
        <S.CardBody>{content}</S.CardBody>
      </Pressable>
    </S.CardWrapper>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
});

export default Card;
