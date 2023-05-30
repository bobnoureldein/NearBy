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
  label: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "#080705",
    borderRadius: 24,
  },
  tabBar: {
    width: width * 0.8, // Customize the width of each tab
    backgroundColor: "#fff",
    borderRadius: 24,
    alignSelf: "center",
    borderColor: secondaryColor,
    borderWidth: 1,
    height: 50, // Same as indicator 48 + border width top and bottom each is 1 px
  },
  indicator: {
    backgroundColor: secondaryColor,
    height: 48, // Same as TabBar height minus the border widths
    borderRadius: 24,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default styles;
