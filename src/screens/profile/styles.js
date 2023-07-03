import { StyleSheet } from "react-native";
import { height, width, mainColor } from "../../constants/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: 598,
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  upperContainer: {
    flex: 2,
    margin: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  subUpperContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  profileImage: {
    width: width * 0.21,
    height: width * 0.18,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: mainColor,
    marginLeft: 5,
  },
  userImage: {
    width: width * 0.21 - 4,
    height: width * 0.18 - 4,
    borderRadius: 20,
    overflow: "hidden",
    resizeMode: "cover",
  },
  count: {
    backgroundColor: "#fff",
    opacity: 0.8,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  lowerContainer: {
    flex: 3,
    margin: 5,
    borderRadius: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  description: {
    fontSize: 15,
  },
});

export default styles;
