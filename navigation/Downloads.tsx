import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Theme from "../constants/theme";

import DownloadsScreen from "../screens/DownloadsScreen";
import MoreScreen from "../screens/MoreScreen";
import MyListScreen from "../screens/MyListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HelpScreen from "../screens/HelpScreen";
import DataUsageScreen from "../screens/DataUsageScreen";
import VideoQualityScreen from "../screens/VideoQualityScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: Theme.headerStyle,
  headerTintColor: Theme.headerTintColor,
  headerTitleStyle: Theme.headerTitleStyle,
  headerBackTitleStyle: Theme.headerBackTitleStyle,
  headerTransparent: true
};

type DownloadsProps = {};

const Downloads: FC<DownloadsProps> = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Downloads" component={DownloadsScreen} />
      <Stack.Screen name="More" component={MoreScreen} />
      <Stack.Screen name="MyList" component={MyListScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Data Usage" component={DataUsageScreen} />
      <Stack.Screen name="Video Quality" component={VideoQualityScreen} />
    </Stack.Navigator>
  );
};

export default Downloads;
