import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import MultiSlider, {
  MultiSliderProps,
} from "@ptomasroos/react-native-multi-slider";
import { mainColor, width } from "../../constants/constants";

interface SliderComponentProps {
  onValuesChange: MultiSliderProps["onValuesChange"];
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  onValuesChange,
}) => {
  const [values, setValues] = useState([0, 1000]);

  const handleValuesChange = (newValues: number[]) => {
    setValues(newValues);
    onValuesChange(newValues);
  };

  return (
    <View style={styles.container}>
      <MultiSlider
        values={values}
        sliderLength={width * 0.88}
        onValuesChange={handleValuesChange}
        min={0}
        max={1000}
        step={1}
        markerStyle={styles.markerStyle}
        pressedMarkerStyle={styles.pressedMarkerStyle}
        selectedStyle={styles.selectedStyle}
        trackStyle={styles.trackStyle}
        touchDimensions={{
          height: 40,
          width: 40,
          borderRadius: 20,
          slipDisplacement: 40,
        }}
      />
      <View style={styles.textContainer}>
        <Text>00 L.E</Text>
        <Text>100 L.E</Text>
        <Text>500 L.E</Text>
        <Text>1000 L.E</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    alignSelf: "flex-start",
    fontWeight: "700",
    fontSize: 15,
  },
  markerStyle: {
    backgroundColor: mainColor,
    borderWidth: 6,
    borderColor: mainColor,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  pressedMarkerStyle: {
    backgroundColor: "#fff",
  },
  selectedStyle: {
    backgroundColor: mainColor,
  },
  trackStyle: {
    backgroundColor: "#e0e0e0",
    height: 4,
  },
  textContainer: {
    width: width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SliderComponent;
