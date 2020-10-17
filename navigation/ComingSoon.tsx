import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Theme from "../constants/theme";

import ComingSoonScreen from "../screens/ComingSoonScreen";
import MoreScreen from "../screens/MoreScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: Theme.headerStyle,
  headerTintColor: Theme.headerTintColor,
  headerTitleStyle: Theme.headerTitleStyle,
  headerBackTitleStyle: Theme.headerBackTitleStyle
  // headerTransparent: true
};

type ComingSoonProps = {};

const ComingSoon: FC<ComingSoonProps> = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="ComingSoon" component={ComingSoonScreen} />
      <Stack.Screen name="More" component={MoreScreen} />
    </Stack.Navigator>
  );
};

export default ComingSoon;
