import React, { FC } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageProps,
  ImageBackground
} from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import Theme from "../constants/theme";
import Text from "./UI/Text";

type IntroItemProps = {
  title: string;
  text: string;
  image?: ImageProps | Readonly<ImageProps>;
  bgImage?: ImageProps | Readonly<ImageProps>;
};

const IntroItem: FC<IntroItemProps> = ({ title, text, image, bgImage }) => {
  let imageEl = null;
  if (image) {
    imageEl = <Image style={styles.image} source={image} />;
  }

  let bgEl = null;
  if (bgImage) {
    bgEl = (
      <ImageBackground
        source={bgImage}
        style={styles.bg}
        resizeMode="center"
      ></ImageBackground>
    );
  }

  const fgEl = <View style={styles.fg}></View>;

  return (
    <View style={styles.container}>
      {bgEl}
      {fgEl}
      <View style={{ ...styles.content, marginTop: useHeaderHeight() }}>
        <View style={styles.imageContainer}>{imageEl}</View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "transparent"
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "center",
    justifyContent: "center",
    zIndex: 1
  },
  fg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 2
  },
  content: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    zIndex: 50
  },
  imageContainer: {
    width: 414,
    height: 800 / 3
  },
  image: {
    width: "100%",
    height: "100%"
  },
  titleContainer: {
    marginTop: 50
  },
  title: {
    fontFamily: "Cabin-Bold",
    fontSize: 44,
    color: Theme.secondary,
    textAlign: "center"
  },
  textContainer: {
    marginTop: 24
  },
  text: {
    fontFamily: "Cabin-Regular",
    fontSize: 24,
    color: Theme.secondary,
    textAlign: "center",
    paddingHorizontal: 40
  }
});

export default IntroItem;
