import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';

import Main from "./navigation/Main";

export default () => {
  let [fontsLoaded] = useFonts({
    "Cabin-Bold": require("./assets/fonts/Cabin-Bold.ttf"),
    "Cabin-Medium": require("./assets/fonts/Cabin-Medium.ttf"),
    "Cabin-Regular": require("./assets/fonts/Cabin-Regular.ttf"),
    "Cabin-SemiBold": require("./assets/fonts/Cabin-SemiBold.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="auto" />
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
});
