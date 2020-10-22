import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Theme from "../constants/theme";

type HeaderHelpPrivacyButtonsProps = {
  onHelp: Function;
  onPrivacy: Function;
};

const HeaderHelpPrivacyButtons: FC<HeaderHelpPrivacyButtonsProps> = ({ onHelp, onPrivacy }) => {
  return (
    <HeaderButtons>
      <Item buttonStyle={styles.item} title="Help" onPress={() => onHelp()} />
      <Item buttonStyle={styles.item} title="Privacy" onPress={() => onPrivacy()} />
    </HeaderButtons>
  );
};

const styles = StyleSheet.create({
  item: {
    fontFamily: "Cabin-Bold",
    color: Theme.secondary
  }
});

export default HeaderHelpPrivacyButtons;