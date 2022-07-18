import styled, {css} from 'styled-components/native';

export const Container = styled.ScrollView``;
export const Wrapper = styled.View`
  ${({theme}) => css`
    margin-top: ${theme.spacing.large};
  `}
`;
