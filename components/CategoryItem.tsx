import React, { FC } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageProps,
  TouchableOpacity
} from "react-native";

type CategoryItemProps = {
  id: number;
  title?: string;
  image: ImageProps | Readonly<ImageProps>;
  onPress?: (videoId: number, videoTitle: string) => void;
};

const CategoryItem: FC<CategoryItemProps> = ({ id, image, title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress(id, title)}
      delayPressIn={20}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    marginRight: 10
  },
  imageContainer: {},
  image: {
    width: 180,
    height: 120
  }
});

export default CategoryItem;
