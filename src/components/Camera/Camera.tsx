import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera/compat";

const CameraComponent = () => {
  const cameraRef = useRef();
  const { cameraDevices, getCameraPermission } = useCameraDevices();

  useEffect(() => {
    getCameraPermission();
  }, []);

  if (!cameraDevices.length) {
    return <View style={styles.container} />;
  }

  const handleCameraReady = () => {
    console.log("Camera is ready!");
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={cameraDevices[0]}
        onCameraReady={handleCameraReady}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
});

export default CameraComponent;
