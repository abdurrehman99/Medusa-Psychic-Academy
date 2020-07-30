import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import DrawerContent from '../screens/DrawerContent';
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
    </Drawer.Navigator>
  );
};

export default sideDrawer;
