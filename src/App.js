import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import MainNavigation from './navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#110732" />
      <MainNavigation />
    </>
  );
};

export default App;
