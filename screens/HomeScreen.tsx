import React, { FC, useLayoutEffect, useCallback } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";

import data from "../data/home";
import Theme from "../constants/theme";

import Text from "../components/UI/Text";
import Button from "../components/UI/Button";
import IconTextButton from "../components/UI/IconTextButton";

import HeaderMenuButton from "../components/HeaderMenuButton";
import ProfileButton from "../components/ProfileButton";
import Content from "../components/Content";

import Links from "../components/Links";
import CategoryScroll from "../components/CategoryScroll";

const feature = data.feature;
const linkItems = ["TV Shows", "Movies", "My List"];

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const profileHandler = useCallback(() => {
    navigation.navigate("More");
  }, [navigation]);

  const headerLinkHandler = useCallback((val: string) => {
    console.log(`Link: ${val}`);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Links
          items={linkItems}
          style={styles.headerLinks}
          linkStyle={styles.headerLink}
          onPress={headerLinkHandler}
        />
      ),
      headerLeft: () => <HeaderMenuButton navigation={navigation} />,
      headerRight: () => <ProfileButton onPress={profileHandler} />
    });
  }, [navigation, profileHandler, headerLinkHandler]);

  const itemHandler = (id: number) => {
    console.log(`Video`);
  };

  const actionHandler = (id: string) => {
    console.log(`Action: ${id}`);
  };

  const playhandler = () => {
    console.log(`Play`);
  };

  const cats = data.categories.map((item) => (
    <CategoryScroll
      key={item.id.toString()}
      category={item}
      onPress={itemHandler}
    />
  ));

  return (
    <Content>
      <ImageBackground style={styles.bg} source={feature.bg}>
        <View style={styles.bgContainer}>
          <Image
            style={styles.titleImage}
            source={feature.titleImage}
            resizeMode="contain"
          />
          <Text style={styles.tags}>{feature.tags.join(" • ")}</Text>
          <View style={styles.actions}>
            <IconTextButton
              id="add"
              style={styles.action}
              textStyle={styles.actionText}
              icon="ios-add"
              onPress={actionHandler}
            >
              My List
            </IconTextButton>
            <Button
              style={{ ...styles.action, ...styles.playButton }}
              buttonStyle={styles.playButtonStyle}
              textStyle={styles.playButtonText}
              icon="ios-play"
              color="black"
              onPress={playhandler}
            >
              Play
            </Button>
            <IconTextButton
              id="info"
              style={styles.action}
              textStyle={styles.actionText}
              icon="ios-information-circle-outline"
              onPress={actionHandler}
            >
              Info
            </IconTextButton>
          </View>
        </View>
      </ImageBackground>
      {cats}
    </Content>
  );
};

const styles = StyleSheet.create({
  headerLinks: {
    alignItems: "center",
    justifyContent: "center"
  },
  headerLink: {
    marginHorizontal: 30
  },
  bg: {
    width: 414,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 160
  },
  bgContainer: {
    marginTop: 400,
    marginHorizontal: 50
  },
  titleImage: {
    width: 360,
    height: 180
  },
  tags: {
    color: Theme.secondary,
    fontSize: 14,
    textAlign: "center"
  },
  actions: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  action: {},
  actionText: {
    fontFamily: "Cabin-Bold"
  },
  playButton: {
    marginHorizontal: 40
  },
  playButtonStyle: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingVertical: 3,
    paddingHorizontal: 50
  },
  playButtonText: {
    color: "#000",
    fontSize: 16,
    marginLeft: 6
  },
  text: {
    fontFamily: "Cabin-Regular",
    color: "#FFF"
  }
});

export default HomeScreen;
