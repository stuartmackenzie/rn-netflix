import React, { FC } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextStyle
} from "react-native";

import Theme from "../constants/theme";
import { Profile } from "../models/user";
import Text from "./UI/Text";

const defaultAvatar = require("../assets/user/avatar_blue.png");

type ProfileItemProps = {
  profile: Profile;
  selId?: number | undefined;
  width?: number;
  textStyle?: TextStyle;
  onPress?: (id: number) => void;
};

const ProfileItem: FC<ProfileItemProps> = ({
  profile,
  selId,
  width = 100,
  textStyle,
  onPress
}) => {
  let { id, name, image } = profile;
  image = image || defaultAvatar;

  const imageStyle =
    selId && selId === id
      ? { ...styles.imageContainer, ...styles.selImageContainer }
      : styles.imageContainer;

  const textFamily =
    selId && selId === id ? Theme.fontFamilyBold : Theme.fontFamily;

  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress(id)}
      delayPressIn={0}
    >
      <View style={imageStyle}>
        <Image
          style={{ ...styles.image, width: width, height: width }}
          source={image}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={{ ...styles.name, ...textStyle, fontFamily: textFamily }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "transparent"
  },
  selImageContainer: {
    borderColor: Theme.secondary
  },
  image: {
    width: 100,
    height: 100
  },
  nameContainer: {
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontFamily: "Cabin-Regular",
    fontSize: 20,
    color: Theme.secondary,
    textAlign: "center"
  }
});

export default ProfileItem;
