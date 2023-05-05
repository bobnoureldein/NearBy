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
    alignItems: "center",
    marginBottom: height * 0.05,
  },
  topTab: {
    flex: 1,
  },
  subContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  logo: {
    marginTop: height * 0.1,
  },
  text: {
    fontSize: 32,
    color: "#000",
    textAlign: "center",
    fontWeight: "900",
    marginTop: height * 0.1,
    marginBottom: height * 0.05,
    paddingHorizontal: width * 0.1,
  },
  subText: {
    width: width * 0.8,
    textAlign: "center",
    fontSize: 16,
    marginVertical: 5,
  },
  secondaryText: {
    fontSize: 24,
    color: mainColor,
    textAlign: "center",
    fontWeight: "700",
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.1,
  },
  container: {
    position: "relative",
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    overflow: "hidden",
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
    top: -10,
    right: -10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});

export default styles;
