import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { width } from "../../constants/constants";
import Icon from "react-native-vector-icons/Feather";

interface InputProps extends TextInputProps {
  style?: ViewStyle;
  textStyle?: TextStyle | TextStyle[];
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
  // textStyle,
}) => {
  const [InputColor, setInputColor] = useState("#212121");
  const [BorderColor, setBorderColor] = useState(false);
  const onFocus = () => {
    setInputColor("#EF8224");
    setBorderColor(true);
  };

  const onBlur = () => {
    setInputColor("#212121");
    setBorderColor(false);
  };

  const PhoneIcon = (
    <Icon name="phone" size={30} color={InputColor} style={styles.icon} />
  );

  return (
    <View
      style={[styles.textInputSection, BorderColor && styles.textInputBorder]}
    >
      {PhoneIcon}
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
    overflow: "hidden",
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 20,
    elevation: 4,
    width: width * 0.8,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  icon: {
    paddingLeft: 36,
    paddingRight: 12,
  },
  input: {
    backgroundColor: "#ffffff",
    width: width * 0.6,
    color: "#212121",
    fontSize: 16,
  },
  // text: {
  //   color: "#212121",
  //   fontSize: 16,
  // },
});

export default Input;
