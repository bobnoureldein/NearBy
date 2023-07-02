import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageSourcePropType,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface PlaceCardProps {
  imageSource: ImageSourcePropType;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ imageSource }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Revo Cafe</Text>
          <TouchableOpacity style={styles.iconTouch}>
            <Image
              source={require("../../images/receipt.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.subIcon}>
            <Image
              source={require("../../images/loc.png")}
              style={styles.icon}
            />
          </View>
          <Text>Mansoura,Tourel,Tira St</Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.subIcon} />
          <Text>2.5 Km away</Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.subIcon}>
            <Image
              source={require("../../images/star.png")}
              style={styles.icon}
            />
          </View>
          <Text>4.5</Text>
        </View>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;
const componentWidth = screenWidth * 0.9;

const styles = StyleSheet.create({
  container: {
    width: componentWidth,
    height: 114,
    padding: 10,
    backgroundColor: "#FDFDFD",
    flexDirection: "row", // Align items horizontally
    marginVertical: 7,
    borderRadius: 15,
    shadowColor: "grey",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  imageContainer: {
    width: 120,
    height: 94,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: "lightgray",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  titleStyle: {
    fontWeight: "700",
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  iconTouch: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
  },
  subIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
});

export default PlaceCard;
