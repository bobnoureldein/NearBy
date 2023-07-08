import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import styles from "./styles";
import CameraIcon from "../../images/cameraIcon";
import UnPhoto from "../../images/unPhoto";

interface CircleImageProps {
  onPress: () => void;
}

const CircleImage: React.FC<CircleImageProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <CameraIcon />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <UnPhoto />
      </View>
    </View>
  );
};

export default CircleImage;
