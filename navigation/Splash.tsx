import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Theme from "../constants/theme";

import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: Theme.headerStyle,
  headerTintColor: Theme.headerTintColor,
  headerTitleStyle: Theme.headerTitleStyle,
  headerBackTitleStyle: Theme.headerBackTitleStyle,
  headerTransparent: true
};

type SplashProps = {};

const Splash: FC<SplashProps> = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default Splash;