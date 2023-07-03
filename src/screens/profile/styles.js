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
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  description: {
    fontSize: 15,
  },
  marginHorizontal: {
    marginHorizontal: 12,
  },
  galleryHeader: {
    width: width * 0.9,
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  subGallery: {
    flexDirection: "row",
    alignItems: "center",
  },
  galleryText: {
    fontSize: 15,
    fontWeight: "700",
    marginHorizontal: 12,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 3,
    width: 100,
  },
  add: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  addImage: {
    width: 24,
    height: 24,
  },
  listContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 7,
  },
  userImagesContainer: {
    flex: 1,
    height: 82,
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "grey",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "#fff",
    marginBottom: 7,
  },
  userImages: {
    overflow: "hidden",
    height: 82,
    borderRadius: 15,
  },
});

export default styles;
