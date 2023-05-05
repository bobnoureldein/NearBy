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
  logo: {
    marginTop: height * 0.1,
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
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: width * 0.05,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: width,
  },
});

export default styles;
