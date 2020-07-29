import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

const HomeStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => null}}
        name="Dashboard"
        component={Dashboard}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
