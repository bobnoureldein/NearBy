import React from "react";
import { TouchableOpacity, Image, StyleSheet, ViewStyle } from "react-native";

type Props = {
  onPress: () => void;
  imageSource: any; // pass your image source
  buttonStyle?: ViewStyle;
};

const SocialButton: React.FC<Props> = ({
  onPress,
  imageSource,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "grey",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: 28,
    height: 28,
  },
});

export default SocialButton;
