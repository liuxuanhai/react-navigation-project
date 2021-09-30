import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DNScreen1 from './screens/DNScreen1';
import DNScreen2 from './screens/DNScreen2';
import DNScreen3 from './screens/DNScreen3';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=> {
  return(
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name='DScreen 1' component={DNScreen1} />
      <Drawer.Screen name='DScreen 2' component={DNScreen2} />
      <Drawer.Screen name='DScreen 3' component={DNScreen3} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;