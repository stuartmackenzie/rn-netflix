import React, { FC, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Image,
  FlatList
} from "react-native";

import data from "../data/home";
import Theme from "../constants/theme";

import Text from "../components/UI/Text";
import HeaderMenuButton from "../components/HeaderMenuButton";
import ProfileButton from "../components/ProfileButton";
import HeaderGradient from "../components/HeaderGradient";

import CategoryScroll from "../components/CategoryScroll";

const feature = data.feature;
const category = data.categories[0];

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const profileHandler = () => {
    navigation.navigate("More");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerLeft: () => <HeaderMenuButton navigation={navigation} />,
      headerRight: () => <ProfileButton onPress={profileHandler} />
    });
  }, [navigation]);

  const itemHandler = (id: number) => {
    console.log(`Video`);
  };

  const cats = data.categories.map((item) => (
    <CategoryScroll
      key={item.id.toString()}
      category={item}
      onPress={itemHandler}
    />
  ));

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <ImageBackground style={styles.bg} source={feature.bg}>
            <View style={styles.bgContainer}>
              <Image
                style={styles.titleImage}
                source={feature.titleImage}
                resizeMode="contain"
              />
              <Text style={styles.tags}>{feature.tags.join(" • ")}</Text>
            </View>
          </ImageBackground>
          {cats}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black"
  },
  content: {},
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  bg: {
    width: 414,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 200
  },
  bgContainer: {
    marginTop: 400,
    marginHorizontal: 50
  },
  titleImage: {
    width: 360
  },
  tags: {
    color: Theme.secondary,
    fontSize: 14,
    textAlign: "center"
  },
  text: {
    fontFamily: "Cabin-Regular",
    color: "#FFF"
  }
});

export default HomeScreen;
