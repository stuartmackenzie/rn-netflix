import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Theme from "../constants/theme";

import ProfilesScreen from "../screens/ProfilesScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: Theme.headerStyle,
  headerTintColor: Theme.headerTintColor,
  headerTitleStyle: Theme.headerTitleStyle,
  headerBackTitleStyle: Theme.headerBackTitleStyle,
  headerTransparent: true
};

type ProfilesProps = {};

const Profiles: FC<ProfilesProps> = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Profiles" component={ProfilesScreen} />
    </Stack.Navigator>
  );
};

export default Profiles;
