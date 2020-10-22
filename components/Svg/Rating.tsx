import React, { FC } from "react";
import { View, ViewStyle } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

interface RatingProps {
  style?: ViewStyle;
}

const Rating: FC<RatingProps> = ({ style }) => {
  return (
    <Svg style={style} viewBox="0 0 330 330">
      <Path
        d="M141.73,0A141.73,141.73,0,1,0,283.46,141.73,141.74,141.74,0,0,0,141.73,0Zm0,278.49A136.76,136.76,0,1,1,278.49,141.73,136.76,136.76,0,0,1,141.73,278.49Z"
        transform="translate(0 0)"
      />
      <Path
        fill="#fff"
        d="M141.73,5A136.76,136.76,0,1,0,278.49,141.73,136.76,136.76,0,0,0,141.73,5Zm0,261.09A124.33,124.33,0,1,1,266.06,141.73,124.32,124.32,0,0,1,141.73,266.06Z"
        transform="translate(0 0)"
      />
      <Circle
        fill="#ff7d13"
        cx="141.73"
        cy="141.73"
        r="124.33"
        transform="translate(-58.71 141.73) rotate(-45)"
      />
      <Path
        fill="#fff"
        d="M114,90.43v99.48H95.92V133c0-9.43,0-12.23-8.11-12.23H71.6V109.44h1.91c9.29-.14,21.82-.29,25.8-19Z"
        transform="translate(0 0)"
      />
      <Path
        fill="#fff"
        d="M198,174.59v15.32H130.38V175.62c12.67-8.7,25.2-20.64,31.09-26.68,5.46-5.6,14.59-15.18,14.59-28.3,0-7.66-3.82-14.88-13.11-14.88-14.59,0-14.15,15.92-14,23l-18.57-1.62c0-14,4.57-23,8.4-27.56,5.45-6.34,14.88-10.76,25.64-10.76,18.87,0,32,12.23,32,31.1,0,16.06-9.87,27.56-20.77,37.43-2.22,1.92-15.48,13.12-21.08,17.25Z"
        transform="translate(0 0)"
      />
    </Svg>
  );
};

export default Rating;
