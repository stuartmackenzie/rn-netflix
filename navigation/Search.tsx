import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Theme from "../constants/theme";

import SearchScreen from '../screens/LaughsScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: Theme.headerStyle,
  headerTintColor: Theme.headerTintColor,
  headerTitleStyle: Theme.headerTitleStyle,
  headerBackTitleStyle: Theme.headerBackTitleStyle,
  headerTransparent: true
};

type SearchProps = {};

const Search: FC<SearchProps>  = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Laugh" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default Search;