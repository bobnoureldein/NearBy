import { StyleSheet } from "react-native";
import { height, width } from "../../constants/constants";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: height * 0.05,
  },
  subContainer: {
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    height: height * 0.4,
    marginTop: height * 0.05,
    borderBottomLeftRadius: height * 0.3,
    borderBottomRightRadius: height * 0.2,
  },
  logo: {
    resizeMode: "contain",
    height: height * 0.6,
  },
  mainText: {
    fontSize: 28,
    color: "#000",
    textAlign: "center",
    fontWeight: "900",
    marginBottom: height * 0.06,
    paddingHorizontal: width * 0.1,
  },
  text: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    paddingHorizontal: width * 0.1,
  },
  mask: {
    flex: 1,
    justifyContent: "flex-start",
    bottom: height * 0.1,
  },
});

export default styles;
