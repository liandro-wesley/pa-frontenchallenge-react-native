import Input from '@presentation/components/Input';
import styled, {css} from 'styled-components/native';

export const InputSearch = styled(Input)`
  ${({theme}) => css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-width: 2px;
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
