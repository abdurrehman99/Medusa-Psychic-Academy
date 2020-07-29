import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const sideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerStyle={{
        width: 300,
      }}
      //   drawerContent={(props) => <MyCart {...props} />
      // }
    >
      <Drawer.Screen name="Dashboard" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default sideDrawer;
