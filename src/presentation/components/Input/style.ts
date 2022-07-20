import styled, {css} from 'styled-components/native';

export const Input = styled.TextInput`
  ${({theme}) => css`
    flex-grow: 1;
    height: 48px;

    border-radius: 4px;
    border: 1px solid ${theme.colors.white800};

    elevation: 1;

    font-size: 16px;
    padding-horizontal: ${theme.spacing.large};
  `}
`;
