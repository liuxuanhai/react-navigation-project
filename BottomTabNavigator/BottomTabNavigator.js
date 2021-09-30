import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BTNScreen1 from "./screens/BTNScreen1";
import BTNScreen2 from "./screens/BTNScreen2";
import BTNScreen3 from "./screens/BTNScreen3";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen 1" component={BTNScreen1} />
      <Tab.Screen name="Screen 2" component={BTNScreen2} />
      <Tab.Screen name="Screen 3" component={BTNScreen3} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
