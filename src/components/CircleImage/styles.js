import { StyleSheet } from "react-native";
import { height, width, mainColor } from "../../constants/constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 114,
    height: 114,
    borderRadius: 57,
    marginVertical: 12,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  button: {
    position: "absolute",
    top: 70,
    right: -10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: mainColor,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});

export default styles;
