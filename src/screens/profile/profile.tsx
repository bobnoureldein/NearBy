import React from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainButton from "../../components/MainButton/mainButton";

const backgroundImage = require("../../images/villa.png");

const data = [
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
];

type ProfileScreenNavigationProp = StackNavigationProp<
  BottomTabStackParamList,
  "Profile"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Profile = ({ navigation }: Props) => {
  const rows = [];
  const buttonsPerRow = 3;

  for (let i = 0; i < data.length; i += buttonsPerRow) {
    const rowButtons = data.slice(i, i + buttonsPerRow);
    const row = (
      <View key={i} style={styles.listContainer}>
        {rowButtons.map((item, index) => (
          <View key={index} style={styles.userImagesContainer}>
            <Image source={item.image} style={styles.userImages} />
          </View>
        ))}
      </View>
    );
    rows.push(row);
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.upperContainer}>
          <View style={styles.subUpperContainer}>
            <View style={styles.profileImage}>
              <Image
                source={require("../../images/userImage.png")}
                style={styles.userImage}
              />
            </View>
            <TouchableOpacity
              style={styles.count}
              onPress={() => navigation.navigate("Followers")}
            >
              <Text>4.5k followers</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <Text style={styles.description}>
            dummy text ever since the 1500s, when an unknown Dining chair,
            waiting chair or home brushes as a garden corner home view more
            dummy text ever since the dummy text ever since the 1500s, when an
            unknown Dining chair, waiting chair or home brushes as a garden
            corner home view more dummy text ever since the 1500s,
          </Text>
          <View>
            <View style={styles.subGallery}>
              <Image
                source={require("../../images/loc.png")}
                style={styles.addImage}
              />
              <Text style={[styles.description, styles.marginHorizontal]}>
                Mansoura,Tourel,Tira St
              </Text>
            </View>
            <View style={styles.subGallery}>
              <View style={styles.addImage} />
              <Text style={[styles.description, styles.marginHorizontal]}>
                Mansoura,Tourel,Tira St
              </Text>
            </View>
            <MainButton text="Confirm" />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.galleryHeader}>
        <View style={styles.subGallery}>
          <Image
            source={require("../../images/add.png")}
            style={styles.addImage}
          />
          <Text style={styles.galleryText}>Gallery</Text>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity
          style={styles.add}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Image
            source={require("../../images/add.png")}
            style={styles.addImage}
          />
        </TouchableOpacity>
      </View>
      {rows}
      <View style={{ height: 112 }} />
    </ScrollView>
  );
};

export default Profile;
