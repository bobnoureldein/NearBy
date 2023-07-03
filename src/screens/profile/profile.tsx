import React from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const backgroundImage = require("../../images/villa.png");

type ProfileScreenNavigationProp = StackNavigationProp<
  BottomTabStackParamList,
  "Profile"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Profile = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
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
            <View style={styles.count}>
              <Text>4.5k followers</Text>
            </View>
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
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Profile;
