import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import getRandomInt from "../utils/getRandomInt";

type DotsProps = {
  style?: ViewStyle;
  count?: number;
  current?: number;
  color?: string;
  selectedColor?: string;
}

const Dots: FC<DotsProps> = ({ style, count=3, current=0, color="#737373", selectedColor="#D22F27" }) => {
  const arr = new Array(count).fill('');
  return (
    <View style={{...styles.view, ...style }}>
      {arr.map((_, i) => {
        let key = getRandomInt().toString();
        let backgroundColor = i === current ? selectedColor : color;
        return <View key={key} style={{ ...styles.item, backgroundColor }} />;
      })}
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 30,
    zIndex: 100,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    height: 7,
    width: 7,
    marginHorizontal: 4,
    borderRadius: 7
  }
});

export default Dots;