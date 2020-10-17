import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Theme from "../constants/theme";

import LaughsScreen from "../screens/LaughsScreen";

const Stack = createStackNavigator();

const screenOptions: any = {
  headerStyle: Theme.headerStyle,
  headerTintColor: Theme.headerTintColor,
  headerTitleStyle: Theme.headerTitleStyle,
  headerBackTitleStyle: Theme.headerBackTitleStyle,
  headerTransparent: true
};

type LaughsProps = {};

const Laughs: FC<LaughsProps> = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Laughs" component={LaughsScreen} />
    </Stack.Navigator>
  );
};

export default Laughs;
