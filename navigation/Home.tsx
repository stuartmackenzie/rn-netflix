import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Theme from "../constants/theme";

import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/MoreScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: Theme.headerStyle,
  headerTintColor: Theme.headerTintColor,
  headerTitleStyle: Theme.headerTitleStyle,
  headerBackTitleStyle: Theme.headerBackTitleStyle,
  headerTransparent: true
};

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="More" component={MoreScreen} />
    </Stack.Navigator>
  );
};

export default Home;
