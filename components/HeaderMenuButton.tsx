import React, { FC } from "react";
import { DrawerActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import isAndroid from '../utils/isAndroid';
import IonHeaderButton from './UI/IonHeaderButton';

type HeaderMenuButtonProps = {
  navigation: any;
};

const HeaderMenuButton: FC<HeaderMenuButtonProps> = ({ navigation }) => {
  return (
    <HeaderButtons HeaderButtonComponent={IonHeaderButton}>
      <Item
        title="Menu"
        iconName={isAndroid() ? "md-menu" : "ios-menu"}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </HeaderButtons>
  );
};

export default HeaderMenuButton;