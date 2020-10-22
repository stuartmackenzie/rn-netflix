import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Theme from "../constants/theme";

type HeaderHelpButtonsProps = {
  onHelp: Function;
};

const HeaderHelpButtons: FC<HeaderHelpButtonsProps> = ({ onHelp }) => {
  return (
    <HeaderButtons>
      <Item buttonStyle={styles.item} title="Help" onPress={() => onHelp()} />
    </HeaderButtons>
  );
};

const styles = StyleSheet.create({
  item: {
    fontFamily: "Cabin-Bold",
    color: Theme.secondary
  }
});

export default HeaderHelpButtons;
