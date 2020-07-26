import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';

// const themeOptions = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#117A65',
//     accent: '#e6e6e6',
//   },
// };

const Index = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Index);
