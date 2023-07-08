import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";
import styles from "./styles";

interface CameraProps {
  onPictureTaken: (data: string) => void;
}

const Camera: React.FC<CameraProps> = ({ onPictureTaken }) => {
  const cameraRef = useRef<RNCamera>(null);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      onPictureTaken(data.base64!);
    }
  };

  const toggleFlash = () => {
    if (flashMode === RNCamera.Constants.FlashMode.off) {
      setFlashMode(RNCamera.Constants.FlashMode.torch);
    } else {
      setFlashMode(RNCamera.Constants.FlashMode.off);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        flashMode={flashMode}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
        captureAudio={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={toggleFlash}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <View style={styles.flashIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.captureButton}
        onPress={takePicture}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      />
    </View>
  );
};

export default Camera;
