import { StyleSheet } from "react-native";
import { height, width, mainColor } from "../../constants/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    height: 60,
    borderRadius: 15,
    margin: 20,
    shadowColor: "#a6a6a6",
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 24,
    width: 24,
    marginHorizontal: 18,
  },
});

export default styles;
