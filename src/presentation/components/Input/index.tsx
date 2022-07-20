import React from 'react';
import {TextInputProps} from 'react-native';
import * as S from './style';

const Input: React.FC<TextInputProps> = ({
  value,
  onChange,
  onChangeText,
  keyboardType,
  keyboardAppearance,
  placeholder,
  placeholderTextColor,
  style,
}) => {
  return (
    <S.Input
      value={value}
      onChange={onChange}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      keyboardAppearance={keyboardAppearance}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      style={style}
    />
  );
};

export default Input;
