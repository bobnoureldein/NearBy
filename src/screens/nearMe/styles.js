import { StyleSheet } from "react-native";
import { mainColor, secondaryColor, width } from "../../constants/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: width,
    alignItems: "center",
    marginBottom: 54,
    marginTop: 16,
  },
  topTab: {
    flex: 1,
  },
  label: {},
  tabBar: {
    width: width * 0.8, // Customize the width of each tab
    backgroundColor: secondaryColor,
    borderRadius: 24,
    alignSelf: "center",
  },
  indicator: {},
});

export default styles;
