import React, { FC } from "react";
import { StyleSheet, View, Image } from "react-native";

import Theme from "../constants/theme";
import { Profile } from "../models/user";
import Text from "./UI/Text";

type ProfileHeaderProps = {
  item: Profile;
};

const ProfileHeader: FC<ProfileHeaderProps> = ({ item }) => {
  const { id, name, image } = item;
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={image} resizeMode="cover" />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  image: {
    height: 23,
    width: 23
  },
  name: {
    marginHorizontal: 10,
    color: Theme.secondary,
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold
  }
});

export default ProfileHeader;
