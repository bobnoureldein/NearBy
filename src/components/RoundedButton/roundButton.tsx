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
import { mainColor, width } from "../../constants/constants";

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
  const [buttonColor, setButtonColor] = useState(mainColor);

  const handleButtonPressIn = () => {
    setButtonColor("#FDC90D");
  };

  const handleButtonPressOut = () => {
    setButtonColor(mainColor);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handleButtonPressIn}
      onPressOut={handleButtonPressOut}
      activeOpacity={0.8}
    >
      <View
        style={[styles.button, { backgroundColor: buttonColor }, buttonStyle]}
      >
        {icon && (
          <View style={styles.icon}>
            <Icon name="arrowright" size={30} color={buttonColor} />
          </View>
        )}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 26,
    height: 52,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 8,
    minWidth: 160,
    width: width * 0.4,
    flexDirection: "row",
    shadowColor: "grey",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
    shadowColor: "grey",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default RoundedButton;
