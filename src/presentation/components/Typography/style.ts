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

export const Text = styled.Text<TypographyProps>`
  ${({theme, variant, color}) => css`
    color: ${theme.colors[color]};
    align-items: center;

    ${variant === 'title' && modifiers.title()}
    ${variant === 'body' && modifiers.body()}
  `}
`;
