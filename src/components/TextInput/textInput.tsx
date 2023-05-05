import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { width } from "../../constants/constants";

interface InputProps extends TextInputProps {
  style?: ViewStyle;
  textStyle?: TextStyle | TextStyle[];
  icon: JSX.Element;
  svgIcon?: JSX.Element;
  onFocusColor?: string;
  onBlurColor?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  style,
  icon,
  svgIcon,
}) => {
  const [IconColor, setIconColor] = useState("#676f72");
  const [InputColor, setInputColor] = useState("#212121");
  const [BorderColor, setBorderColor] = useState(false);

  const inputRef = useRef<TextInput | null>(null);

  const handlePress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onFocus = () => {
    setInputColor("#EF8224");
    setBorderColor(true);
    setIconColor("#080705");
  };

  const onBlur = () => {
    setInputColor("#212121");
    setBorderColor(false);
    setIconColor("#676f72");
  };

  const Icon = icon
    ? icon
    : svgIcon
    ? React.cloneElement(svgIcon, { fill: IconColor })
    : null;

  return (
    <View
      style={[
        styles.textInputSection,
        BorderColor && styles.textInputBorder,
        { borderColor: InputColor },
      ]}
      onTouchStart={handlePress}
    >
      {Icon}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        style={[styles.input, style]}
        placeholderTextColor="#999"
        underlineColorAndroid="transparent"
        allowFontScaling={false}
        selectionColor="#212121"
        textAlignVertical="center"
        maxLength={15}
        ref={inputRef}
        // textStyle={[styles.text, textStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputBorder: {
    borderWidth: 1,
    borderColor: "#EF8224",
  },
  textInputSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    overflow: "hidden",
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 16,
    elevation: 4,
    width: width * 0.8,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
  },
  icon: {
    paddingLeft: 36,
    paddingRight: 12,
  },
  svgContainer: {
    paddingHorizontal: 8,
  },
  input: {
    backgroundColor: "#ffffff",
    width: width * 0.65,
    color: "#212121",
    fontSize: 16,
  },
  // text: {
  //   color: "#212121",
  //   fontSize: 16,
  // },
});

export default Input;
