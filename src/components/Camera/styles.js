import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  flashIcon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: "black",
  },
  captureButton: {
    position: "absolute",
    bottom: 16,
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "black",
  },
});

export default styles;
