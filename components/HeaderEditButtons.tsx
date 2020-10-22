import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Theme from "../constants/theme";

type HeaderEditButtonsProps = {
  onEdit: Function;
};

const HeaderEditButtons: FC<HeaderEditButtonsProps> = ({ onEdit }) => {
  return (
    <HeaderButtons>
      <Item buttonStyle={styles.item} title="Edit" onPress={() => onEdit()} />
    </HeaderButtons>
  );
};

const styles = StyleSheet.create({
  item: {
    fontFamily: "Cabin-Bold",
    color: Theme.secondary
  }
});

export default HeaderEditButtons;