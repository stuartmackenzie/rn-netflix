import React, { FC, ReactNode, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewStyle
} from "react-native";
import Dots from "./Dots";

type PagesProps = {
  renderItems: () => Array<ReactNode>;
  height?: number | string;
  guideStyle?: ViewStyle;
};

const Pages: FC<PagesProps> = ({
  renderItems,
  height = "100%",
  guideStyle
}) => {
  const [page, setPage] = useState(0);
  const els = renderItems();
  const pageCount = els.length;

  const pageHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const info = event.nativeEvent;
    const offsetX = info.contentOffset.x;
    const itemW = info.layoutMeasurement.width;
    const totalW = info.contentSize.width;
    const total = Math.floor(totalW / itemW);
    const current = Math.floor((offsetX / totalW) * total);
    setPage(current);
  };

  return (
    <View style={{ ...styles.view, height }}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scroller,
          width: Dimensions.get("window").width * pageCount
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={0}
        decelerationRate="fast"
        pagingEnabled={true}
        onMomentumScrollEnd={pageHandler}
      >
        {els}
      </ScrollView>
      <Dots count={pageCount} current={page} style={guideStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  scroller: {
    position: "relative",
    width: Dimensions.get("window").width,
    backgroundColor: "transparent",
    zIndex: 3
  }
});

export default Pages;
