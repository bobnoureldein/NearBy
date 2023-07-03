import { StyleSheet } from "react-native";
import { height, width, mainColor } from "../../constants/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: width,
    alignItems: "center",
    marginBottom: 54,
  },
  searchContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    position: "absolute",
  },
  containerStyle: {
    width: width - 110,
  },
  filterButton: {
    backgroundColor: mainColor,
    alignSelf: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 24,
    width: 24,
  },
  listContainer: {
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});

export default styles;
