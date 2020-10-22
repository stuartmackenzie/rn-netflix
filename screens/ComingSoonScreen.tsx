import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import data from "../data/soon";

import Text from "../components/UI/Text";
import HeaderMenuButton from "../components/HeaderMenuButton";
import ProfileButton from "../components/ProfileButton";

import Content from "../components/Content";
import NotificationsItem from "../components/NotificationsItem";
import NewArrivalItem from "../components/NewArrivalItem";
import MediaItem from "../components/MediaItem";

const features = data.features;
const items = data.items;

type ComingSoonScreenProps = {
  navigation: any;
};

const ComingSoonScreen: FC<ComingSoonScreenProps> = ({ navigation }) => {
  const profileHandler = () => {
    navigation.navigate("More");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Coming Soon",
      headerLeft: () => <HeaderMenuButton navigation={navigation} />,
      headerRight: () => <ProfileButton onPress={profileHandler} />
    });
  }, [navigation]);

  const notificationHandler = () => {
    console.log(`Notifications`);
  };

  const featureHandler = (id: number) => {
    console.log(`Feature: ${id}`);
  };

  const featureEls = features.map((item) => (
    <NewArrivalItem
      key={item.id.toString()}
      {...item}
      onPress={featureHandler}
    />
  ));

  const itemEls = items.map((item) => (
    <MediaItem key={item.id.toString()} style={styles.item} media={item} />
  ));

  return (
    <Content style={styles.content} showGradient={false}>
      <NotificationsItem onPress={notificationHandler} />
      <View style={styles.features}>{featureEls}</View>
      <View style={styles.list}>{itemEls}</View>
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: -3
  },
  features: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  list: {
    flex: 1
  },
  item: {}
});

export default ComingSoonScreen;
