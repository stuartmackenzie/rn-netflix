import React, { FC } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageProps,
  TouchableOpacity
} from "react-native";
import Theme from "../constants/theme";
import Text from "./UI/Text";

const defaultAvatar = require("../assets/user/avatar_blue.png");

type ProfileItemProps = {
  id: number;
  name: string;
  image?: ImageProps | Readonly<ImageProps>;
  onPress?: (id: number) => void;
};

const ProfileItem: FC<ProfileItemProps> = ({ id, name, image, onPress }) => {
  image = image || defaultAvatar;

  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress(id)}
      delayPressIn={0}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  imageContainer: {},
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
