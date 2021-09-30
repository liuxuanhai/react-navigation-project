import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import StackNavigator from "../../StackNavigator/StackNavigator";

const BTNScreen2 = ({navigation}) => {
  return (
    <>
      <Text>Bottom Tab Screen 2</Text>
      <Button title='Go to stack screen 1' onPress={()=>navigation.navigate('StScreen 1')}/>
      <Button title='Go to stack screen 2' onPress={()=>navigation.navigate('StScreen 2')}/>
      <Button title='Go to stack screen 3' onPress={()=>navigation.navigate('StScreen 3')}/>
      <StackNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BTNScreen2;
