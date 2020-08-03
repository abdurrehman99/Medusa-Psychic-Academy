import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import DrawerContent from '../screens/DrawerContent';
import Dashboard from '../screens/Dashboard';
const Drawer = createDrawerNavigator();

const sideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerStyle={{
        width: 320,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={HomeStack} />
      <Drawer.Screen name="Home" component={Dashboard} />
    </Drawer.Navigator>
  );
};

export default sideDrawer;
