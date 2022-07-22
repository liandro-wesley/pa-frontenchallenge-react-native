import Input from '@presentation/components/Input';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    margin-top: ${theme.spacing.xlarge};
    flex: 1;
  `}
`;

export const CustomInput = styled(Input)`
  ${({theme}) => css`
    color: ${theme.colors.white800};
    margin-top: ${theme.spacing.xlarge};
    margin-bottom: ${theme.spacing.xlarge};
    max-height: 48px;
  `}
`;

export const CustomMultilineINput = styled(Input)`
  ${({theme}) => css`
    color: ${theme.colors.white800};
    margin-bottom: ${theme.spacing.xlarge};
    max-height: 120px;
  `}
`;

export const CustomButton = styled.TouchableOpacity`
  ${({theme}) => css`
    margin-top: ${theme.spacing.xlarge};
    background-color: ${theme.colors.accentColor};
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    max-height: 48px;
  `}
`;
