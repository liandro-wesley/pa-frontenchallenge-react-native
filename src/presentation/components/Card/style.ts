import styled, {css} from 'styled-components/native';

export const CardWrapper = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.black700};
    border-radius: ${theme.rounded.normal};

    margin-top: 10px;
    min-height: 100px;
  `}
`;

export const CardHeader = styled.View`
  ${({theme}) => css`
    padding: ${theme.spacing.normal};
  `}
`;

export const CardBody = styled.View`
  ${({theme}) => css`
    padding: ${theme.spacing.normal};

    flex-direction: column;
    flex: 1;
  `}
`;
