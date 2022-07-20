import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    margin-bottom: ${theme.spacing.large};
    padding: ${theme.spacing.large};
  `}
`;

export const Back = styled.TouchableOpacity`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.black900};
  `}
`;

export const PostActions = styled.View`
  ${() => css`
    flex-direction: row;
  `}
`;

export const PostActionsItem = styled.TouchableOpacity`
  ${() => css`
    padding-horizontal: 10px;
  `}
`;
