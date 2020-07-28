import React from 'react';
import {StatusBar} from 'react-native';
import MainNavigation from './navigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#110732" />
      <MainNavigation />
    </>
  );
};

export default App;
