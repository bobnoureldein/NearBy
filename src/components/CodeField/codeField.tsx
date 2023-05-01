import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { mainColor, width } from "../../constants/constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  codeFieldRoot: {
    marginBottom: 20,
    width: width * 0.8,
  },
  cell: {
    width: 68,
    height: 68,
    lineHeight: 60,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "transparent",
    textAlign: "center",
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "grey",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    color: mainColor,
  },
  focusCell: {
    borderColor: mainColor,
  },
});

const CELL_COUNT = 4;

const CodeFieldComponent = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </>
  );
};

export default CodeFieldComponent;
