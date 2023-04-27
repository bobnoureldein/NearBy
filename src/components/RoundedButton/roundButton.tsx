import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ReactNode } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { width } from "../../constants/constants";

interface RoundedButtonProps {
  text: string;
  icon?: ReactNode;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  text,
  icon,
  onPress,
  buttonStyle,
}) => {
  const [buttonColor, setButtonColor] = useState("#EF8224");

  const ArrowRight = <Icon name="arrowright" size={30} color={buttonColor} />;

  const handleButtonPressIn = () => {
    setButtonColor("#FDC90D");
  };

  const handleButtonPressOut = () => {
    setButtonColor("#EF8224");
  };

  return (
    <View style={styles.shadow}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handleButtonPressIn}
        onPressOut={handleButtonPressOut}
        activeOpacity={1}
      >
        <View
          style={[styles.button, { backgroundColor: buttonColor }, buttonStyle]}
        >
          {icon && (
            <View style={[styles.icon, styles.shadow]}>{ArrowRight}</View>
          )}
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "grey",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  button: {
    borderRadius: 26,
    height: 52,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 8,
    minWidth: 160,
    width: width * 0.4,
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 20,

    textAlign: "center",
    flex: 1,
  },
  icon: {
    height: 36,
    width: 36,
    marginRight: 8,
    backgroundColor: "#fff",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundedButton;
