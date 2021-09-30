import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DrawerNavigator from '../../DrawerNavigator/DrawerNavigator';

const BTNScreen1 = ()=> {
  return (
    <>
    <Text>Bottom Tab Screen 1</Text>
    <DrawerNavigator/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BTNScreen1;