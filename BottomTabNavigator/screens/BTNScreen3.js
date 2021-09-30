import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabNavigator from "../../TabNavigator/TabNavigator";
// import Swiper from "react-native-swiper";

// const Tab = createMaterialTopTabNavigator();

const BTNScreen3 = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   "https://images.unsplash.com/photo-1566207462754-97c86c31db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   "https://images.unsplash.com/photo-1572028412480-0a75271c6bb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
  // ];

  return (
    <>
      <Text>Bottom Tab Screen 3</Text>
      {/* <Swiper>
        {images.map((image) => {
          return <Image source={{uri: image}} style={styles.container}/>;
        })}
      </Swiper> */}
      <TabNavigator />
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

export default BTNScreen3;
