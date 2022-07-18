import styled, {css} from 'styled-components/native';

export const WrapperLayout = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.black900};
    padding: ${theme.spacing.large};
    flex: 1;
  `}
`;
