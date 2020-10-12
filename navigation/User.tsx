import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import isAndroid from '../utils/isAndroid';
import Theme from "../constants/theme";

import Home from './Home';
import ComingSoon from './ComingSoon';
import Laughs from './Laughs';
import Search from './Search';
import Downloads from './Downloads';

const Tab: any = isAndroid()
  ? createMaterialBottomTabNavigator()
  : createBottomTabNavigator();

type UserProps = {};

const User: FC<UserProps> = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={Theme.tabBarOptions}
      tabBarComponent={null}
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color, size }: any) => {
          let iconName;
          let T = Ionicons;
          switch (route.name.toLowerCase()) {
            case "home":
              iconName = isAndroid() ? "md-home" : "ios-home";
              break;
            case "soon":
              iconName = isAndroid() ? "md-play" : "ios-play";
              break;
            case "laughs":
              iconName = isAndroid() ? "md-happy" : "ios-happy";
              break;
            case "search":
              iconName = isAndroid() ? "md-search" : "ios-search";
              break;
            case "downloads":
              iconName = isAndroid() ? "md-download" : "ios-download";
              break;
            default:
              iconName = isAndroid() ? "md-home" : "ios-home";
              break;
          }
          if (isAndroid()) size = 18;
          return <T name={iconName} size={size} color={color} />;
        }
      })}
      activeColor={Theme.secondary}
      inactiveColor={Theme.inactive}
      shifting={true}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Soon" component={ComingSoon} />
      <Tab.Screen name="Laughs" component={Laughs} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Downloads" component={Downloads} />
    </Tab.Navigator>
  );
};

export default User;
