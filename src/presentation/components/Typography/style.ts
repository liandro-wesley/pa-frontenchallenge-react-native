import styled, {css} from 'styled-components/native';
import {TypographyProps} from '.';

const modifiers = {
  title: () => css`
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
  `,
  body: () => css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  `,
};

export const Wrapper = styled.Text<TypographyProps>`
  ${({theme, variant, color}) => css`
    color: ${theme.colors[color]};
    align-items: center;
    margin-bottom: ${theme.spacing.large};

    ${variant === 'title' && modifiers.title()}
    ${variant === 'body' && modifiers.body()}
  `}
`;
