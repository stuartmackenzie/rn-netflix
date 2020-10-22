import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Theme from "../constants/theme";

import Splash from "./Splash";
import Intro from "./Intro";
import Auth from "./Auth";
import Profiles from "./Profiles";
import User from "./User";

const Drawer = createDrawerNavigator();

type MainProps = {};

const Main: FC<MainProps> = ({}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="User"
        drawerContentOptions={{
          activeTintColor: Theme.primary,
          labelStyle: { fontFamily: Theme.fontFamily }
        }}
      >
        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="Intro" component={Intro} />
        <Drawer.Screen name="Auth" component={Auth} />
        <Drawer.Screen name="Profiles" component={Profiles} />
        <Drawer.Screen name="User" component={User} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
