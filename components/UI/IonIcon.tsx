import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";

type IonIconProps = {
  name: string;
  size?: number;
  color?: string;
};

const IonIcon: FC<IonIconProps> = ({ name, size = 23, color = "black" }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default IonIcon;
