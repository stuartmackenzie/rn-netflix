import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Theme from "../constants/theme";
import Text from "./UI/Text";
import IonIcon from "./UI/IonIcon";
import Button from "./UI/Button";

type NoDownloadsProps = {
  onPress?: () => void;
};

const NoDownloads: FC<NoDownloadsProps> = ({ onPress }) => {
  return (
    <View style={styles.view}>
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <IonIcon name="ios-download" color="#4c4c4c" size={100} />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Never be without Netflix</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Downlaod shows and movies so you'll never be without something to
          watch -- even when you're offline.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonText}
          onPress={() => onPress()}
        >
          See What You Can Download
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40
  },
  iconCircle: {
    width: 146,
    height: 146,
    borderRadius: 73,
    backgroundColor: "#121212",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    marginBottom: 30
  },
  title: {
    fontFamily: Theme.fontFamilyBold,
    fontSize: 18,
    color: Theme.secondary,
    textAlign: "center"
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    marginBottom: 40
  },
  text: {
    fontFamily: Theme.fontFamily,
    fontSize: 16,
    color: Theme.secondary,
    textAlign: "center"
  },
  buttonContainer: {},
  button: {},
  buttonStyle: {
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonText: {
    color: "#000000",
    fontSize: 16
  }
});

export default NoDownloads;
