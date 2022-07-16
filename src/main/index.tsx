import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import Navigation from './navigation/navigation';
const Main: React.FC = () => {
  return (
    <WrapperScreen>
      <StatusBar />
      <Navigation />
    </WrapperScreen>
  );
};

const WrapperScreen = styled.View`
  flex: 1;
`;

export default Main;
