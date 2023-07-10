import { StyleSheet } from "react-native";
import { width } from "../../constants/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomColor: "#000",
    borderBottomWidth: 0.3,
  },
  followerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    overflow: "hidden",
  },
  text: {
    fontSize: 16,
  },

  buttonList: {
    position: "absolute",

    left: width * 0.5,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  button: {
    minWidth: 120,
    width: width * 0.3,
    padding: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});

export default styles;
