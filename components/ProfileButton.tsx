import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  Image
} from "react-native";

const profileImage = require("../assets/user/avatar_small.png");

type ProfileButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const ProfileButton: FC<ProfileButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={onPress}
      delayPressIn={0}
    >
      <Image style={styles.image} source={profileImage} resizeMode="cover" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "green",
    marginRight: 10
  },
  image: {
    height: 23,
    width: 23
  }
});

export default ProfileButton;
