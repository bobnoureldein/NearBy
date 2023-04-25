import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { secondaryColor, height, width } from "../../constants/constants";

const RoundedBottomRight = () => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Path
          d={`M 0 0 L ${width - height / 2} 0 A ${height / 2} ${
            height / 2
          } 0 0 1 ${width} ${height / 2} L ${width} ${height} L 0 ${height} Z`}
          fill={secondaryColor}
        />
      </Svg>
    </View>
  );
};

export default RoundedBottomRight;
