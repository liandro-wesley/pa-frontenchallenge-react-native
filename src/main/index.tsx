import WrapperLayout from '@presentation/layouts/WrapperLayout';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import Navigation from './navigation/navigation';
import theme from '@presentation/theme';

const Main: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <WrapperLayout>
        <Navigation />
      </WrapperLayout>
    </ThemeProvider>
  );
};

export default Main;
