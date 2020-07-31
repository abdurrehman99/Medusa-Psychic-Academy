import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Advisor from '../screens/Advisor';
import AllAdvisors from '../screens/AllAdvisors';

const Stack = createStackNavigator();

const HomeStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => null}}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="Advisor"
        component={Advisor}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="AllAdvisors"
        component={AllAdvisors}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
