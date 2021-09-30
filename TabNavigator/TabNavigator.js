import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabScreen1 from "./screens/TabScreen1";
import TabScreen2 from "./screens/TabScreen2";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Tab 1' component={TabScreen1}/>
      <Tab.Screen name='Tab 2' component={TabScreen2}/>
    </Tab.Navigator>
  )
}

export default TabNavigator;