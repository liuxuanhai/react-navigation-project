import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StScreen1 from './screens/StScreen1';
import StScreen2 from './screens/StScreen2';
import StScreen3 from './screens/StScreen3';

const Stack = createStackNavigator();
const StackNavigator = ()=> {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='StScreen 1' component={StScreen1} />
      <Stack.Screen name='StScreen 2' component={StScreen2} />
      <Stack.Screen name='StScreen 3' component={StScreen3} />
    </Stack.Navigator>
  );
}

export default StackNavigator;