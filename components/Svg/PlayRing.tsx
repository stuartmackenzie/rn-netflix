import React, { FC } from "react";
import { ViewStyle } from "react-native";
import Svg, { Circle, G, Polygon } from "react-native-svg";

interface PlayRingProps {
  style?: ViewStyle;
}

const PlayRing: FC<PlayRingProps> = ({ style }) => {
  return (
    <Svg style={style} viewBox="0 0 28 28">
      <G fill="none" fill-rule="evenodd" opacity="0.5">
        <Circle
          cx="14"
          cy="14"
          fill="#000"
          fill-opacity="0.8"
          r="13"
          stroke="#FFF"
          stroke-width="1"
        />
        <Polygon fill="#FFF" points="10 20 10 8 20 14" opacity="0.8" />
      </G>
    </Svg>
  );
};

export default PlayRing;
