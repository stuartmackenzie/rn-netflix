import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Theme from "../constants/theme";

import DownloadsScreen from '../screens/DownloadsScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: Theme.headerStyle,
  headerTintColor: Theme.headerTintColor,
  headerTitleStyle: Theme.headerTitleStyle,
  headerBackTitleStyle: Theme.headerBackTitleStyle,
  headerTransparent: true
};

type DownloadsProps = {};

const Downloads: FC<DownloadsProps>  = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Downloads" component={DownloadsScreen} />
    </Stack.Navigator>
  );
};

export default Downloads;