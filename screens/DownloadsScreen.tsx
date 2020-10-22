import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import data from "../data/downloads";
import { Profile } from "../models/user";
import { MediaDownloadItem } from "../models/media";

import HeaderMenuButton from "../components/HeaderMenuButton";
import ProfileButton from "../components/ProfileButton";
import HeaderGradient from "../components/HeaderGradient";
import SmartDownloadsStrap from "../components/SmartDownloadsStrap";
import NoDownloads from "../components/NoDownloads";

import ProfileHeader from "../components/ProfileHeader";
import DownloadItem from "../components/DownloadItem";

type ItemType = Profile | MediaDownloadItem;

type DownloadsScreenProps = {
  navigation: any;
};

const DownloadsScreen: FC<DownloadsScreenProps> = ({ navigation }) => {
  const profiles = data.profiles;
  // const profiles = [];
  const hasItems = profiles.length > 0;
  const items = [];
  const headerIndicies = [];
  let i = 0;

  if (hasItems) {
    const profileModels = profiles.map((item) => new Profile(item));
    for (const profile of profileModels) {
      items.push(profile);
      headerIndicies.push(i);
      i = i + 1;
      for (const item of profile.items) {
        const mediaItem = new MediaDownloadItem(item);
        items.push(mediaItem);
        i = i + 1;
      }
    }
  }

  const profileHandler = () => {
    navigation.navigate("More");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "My Downloads",
      headerLeft: () => <HeaderMenuButton navigation={navigation} />,
      headerRight: () => <ProfileButton onPress={profileHandler} />
    });
  }, [navigation]);

  const smartHandler = () => {
    console.log("Smart");
  };

  const noDownloadsHandler = () => {
    console.log("No downloads");
  };

  const itemHandler = (id: string) => {
    console.log(`Item: ${id}`);
  };

  const renderItem = (itemData: { item: ItemType; index: number }) => {
    if (headerIndicies.includes(itemData.index)) {
      return <ProfileHeader item={itemData.item as Profile} />;
    } else {
      return (
        <DownloadItem
          item={itemData.item as MediaDownloadItem}
          onPress={itemHandler}
        />
      );
    }
  };

  let content = <NoDownloads onPress={noDownloadsHandler} />;
  if (hasItems) {
    content = (
      <FlatList
        keyExtractor={(item: ItemType) => item.id.toString()}
        data={items}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={headerIndicies}
      ></FlatList>
    );
  }

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <View style={{ ...styles.container, marginTop: useHeaderHeight() }}>
        <SmartDownloadsStrap onPress={smartHandler} />
        {content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black"
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  text: {
    fontFamily: "Cabin-Regular",
    color: "#FFF"
  },
  list: {
    flexDirection: "column"
  }
});

export default DownloadsScreen;
