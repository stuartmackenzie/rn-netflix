import React from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import reducers from "./store/reducers";

import Main from "./navigation/Main";

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

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
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
