import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import SideDrawer from './SideDrawer';

const Stack = createStackNavigator();

const AppNavigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => null}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="SideDrawer"
        component={SideDrawer}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
