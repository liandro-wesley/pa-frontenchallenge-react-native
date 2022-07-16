import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './stack';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
