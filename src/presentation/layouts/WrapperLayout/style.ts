import styled, {css} from 'styled-components/native';

export const WrapperLayout = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.black900};
    flex: 1;
  `}
`;
