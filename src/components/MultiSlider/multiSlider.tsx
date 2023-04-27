import React, { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

function App() {
  // Set initial minimum and maximum values
  const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState(400);

  return (
    <MultiSlider
      values={[minValue, maxValue]}
      min={100}
      max={400}
      step={1}
      onValuesChange={(values) => {
        setMinValue(values[0]);
        setMaxValue(values[1]);
      }}
    />
  );
}

export default App;
