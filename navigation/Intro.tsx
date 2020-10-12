import React, { FC } from "react";
import { Image } from "react-native"; 
import { createStackNavigator } from "@react-navigation/stack";

import headerImage from "../assets/shared/header_gradient.png";
import Theme from "../constants/theme"; 
import IntroScreen from "../screens/IntroScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: Theme.headerStyle,
  headerTintColor: Theme.headerTintColor,
  headerTitleStyle: Theme.headerTitleStyle,
  headerBackTitleStyle: Theme.headerBackTitleStyle,
  headerTransparent: true
};

type IntroProps = {};

const Intro: FC<IntroProps> = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Intro">
      <Stack.Screen name="Intro" component={IntroScreen} />
    </Stack.Navigator>
  );
};

export default Intro;