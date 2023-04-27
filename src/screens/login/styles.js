import { StyleSheet } from "react-native";
import { height, width, mainColor } from "../../constants/constants";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  linear: {
    width: width,
    height: height,
  },
  main: {
    flex: 1,
    alignItems: "center",
    marginBottom: height * 0.05,
  },
  subContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  logo: {
    marginTop: "30%",
  },

  text: {
    fontSize: 32,
    color: "#000",
    textAlign: "center",
    fontWeight: "900",
    marginBottom: height * 0.05,
    paddingHorizontal: width * 0.1,
  },
  secondaryText: {
    fontSize: 24,
    color: mainColor,
    textAlign: "center",
    fontWeight: "700",
    marginTop: height * 0.05,
    paddingHorizontal: width * 0.1,
  },
});

export default styles;
