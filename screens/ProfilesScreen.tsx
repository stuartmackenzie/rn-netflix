import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import data from "../data/profiles";
import { Profile, ProfileParams } from "../models/user";

import HeaderMenuButton from "../components/HeaderMenuButton";
import HeaderEditButtons from "../components/HeaderEditButtons";

import ProfileItem from "../components/ProfileItem";
import HeaderGradient from "../components/HeaderGradient";

type ProfilesScreenProps = {
  navigation: any;
};

const ProfilesScreen: FC<ProfilesScreenProps> = ({ navigation }) => {
  const items = data.items;
  const profiles: Array<Profile> = items.map(
    (item: ProfileParams) => new Profile(item)
  );

  const editHandler = () => {
    console.log("Edit");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Who's Watching?",
      headerLeft: () => <HeaderMenuButton navigation={navigation} />,
      headerRight: () => <HeaderEditButtons onEdit={editHandler} />
    });
  }, [navigation]);

  const itemHandler = (id: number) => {
    if (id === -1) {
      console.log(`Add Profile`);
    } else {
      console.log(`Open Profile: ${id.toString()}`);
    }
  };

  const renderItem = (itemData) => (
    <ProfileItem profile={itemData.item} width={100} onPress={itemHandler} />
  );

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <View style={{ ...styles.content }}>
        <FlatList
          keyExtractor={(item: Profile) => item.id.toString()}
          data={profiles}
          contentContainerStyle={{
            ...styles.list,
            marginTop: useHeaderHeight() + 80
          }}
          renderItem={renderItem}
          numColumns={3}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    overflow: "visible"
  },
  content: {
    flex: 1,
    flexDirection: "column"
  },
  list: {
    flex: 1,
    marginTop: 80,
    alignItems: "center"
  }
});

export default ProfilesScreen;
