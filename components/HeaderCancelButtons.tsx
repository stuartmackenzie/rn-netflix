import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Theme from "../constants/theme";

type HeaderCancelButtonsProps = {
  onCancel: () => void;
};

const HeaderCancelButtons: FC<HeaderCancelButtonsProps> = ({ onCancel }) => {
  return (
    <HeaderButtons>
      <Item
        buttonStyle={styles.item}
        title="Cancel"
        onPress={() => onCancel()}
      />
    </HeaderButtons>
  );
};

const styles = StyleSheet.create({
  item: {
    fontFamily: Theme.fontFamily,
    color: "#E6E6E6",
    fontSize: 14
  }
});

export default HeaderCancelButtons;
