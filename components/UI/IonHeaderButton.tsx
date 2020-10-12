import React, { FC } from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

type IonHeaderButtonProps = {
  title: string;
};

const IonHeaderButton: FC<IonHeaderButtonProps> = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={26}
      color="white"
    />
  );
};

export default IonHeaderButton;