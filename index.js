import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const themeOptions = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1DA069',
    accent: '#e6e6e6',
  },
};

const Index = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={themeOptions}>
        <App />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Index);
