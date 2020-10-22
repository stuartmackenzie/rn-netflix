import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Theme from "../constants/theme";

import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/MoreScreen";
import MyListScreen from "../screens/MyListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HelpScreen from "../screens/HelpScreen";
import DataUsageScreen from "../screens/DataUsageScreen";
import VideoQualityScreen from "../screens/VideoQualityScreen";
import VideoDetailScreen from "../screens/VideoDetailScreen";

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
      <Stack.Screen name="MyList" component={MyListScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Data Usage" component={DataUsageScreen} />
      <Stack.Screen name="Video Quality" component={VideoQualityScreen} />
      <Stack.Screen name="Video Detail" component={VideoDetailScreen} />
    </Stack.Navigator>
  );
};

export default Home;
