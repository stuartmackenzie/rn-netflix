import React, { FC } from "react";
import { ViewStyle } from "react-native";
import Svg, { Circle, G, Polyline, Line } from "react-native-svg";

interface ArrowRingProps {
  style?: ViewStyle;
}

const ArrowRing: FC<ArrowRingProps> = ({ style }) => {
  return (
    <Svg style={style} viewBox="0 0 35 35">
      <Circle cx="17.5" cy="17.5" fill-opacity="0.5" r="15.5" />
      <G>
        <Polyline
          fill="none"
          points="18.5,11.5 23.5,17.5 18.5,23.5"
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <Line
          fill="none"
          stroke="#FFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          x1="22.5"
          x2="11.5"
          y1="17.5"
          y2="17.5"
        />
      </G>
      <Circle
        cx="17.5"
        cy="17.5"
        fill="none"
        r="15.5"
        stroke="#FFF"
        stroke-miterlimit="10"
      />
    </Svg>
  );
};

export default ArrowRing;
