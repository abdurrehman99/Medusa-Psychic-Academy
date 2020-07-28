import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';

const Index = (props) => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default Index;
