import Input from '@presentation/components/Input';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    margin-top: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.normal};
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
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
  `}
`;

export const InputSearch = styled(Input)`
  ${({theme}) => css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    border-color: ${theme.colors.accentColor};
    color: ${theme.colors.white800};
  `}
`;

export const SearchButton = styled.TouchableOpacity`
  ${({theme}) => css`
    background-color: ${theme.colors.accentColor};
    height: 48px;
    width: 40px;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    align-items: center;
    justify-content: center;
  `}
`;

export const PostActionsItem = styled.TouchableOpacity`
  ${() => css`
    padding-horizontal: 10px;
  `}
`;
