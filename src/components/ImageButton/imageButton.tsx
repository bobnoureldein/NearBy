import React, { FC } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";
import { width } from "../../constants/constants";

interface ButtonProps {
  label: string;
  imageSource: ImageSourcePropType;
  containerStyle?: ViewStyle;
}

const Button: FC<ButtonProps> = ({ label, imageSource, containerStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.33 - 23,
    height: 74,
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: "grey",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "#fff",
  },
  image: {
    width: 28,
    height: 28,
    marginTop: 10,
  },
  label: {
    marginTop: 8,
    marginBottom: 10,
  },
});

export default Button;
