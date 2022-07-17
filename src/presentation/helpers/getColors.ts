import theme from '@presentation/theme';

const getColors = <K extends keyof typeof theme.colors>(
  key: K,
): typeof theme.colors[K] => theme.colors[key];

export default getColors;
