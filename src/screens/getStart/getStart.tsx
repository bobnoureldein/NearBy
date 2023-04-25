import React from "react";
import { View, Text, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import RoundedButton from "../../components/RoundedButton/roundButton";
import Logo from "../../images/logo.jsx";
import styles from "./styles";
import { RootStackParamList } from "../../navigation/navigation";

const backgroundImage = require("../../images/unsplash.png");

type GetStartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "GetStart"
>;

type Props = {
  navigation: GetStartScreenNavigationProp;
};

const GetStart = ({ navigation }: Props) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <LinearGradient
        colors={[
          "transparent",
          "transparent",
          "transparent",
          "rgba(255, 255, 255, .7)",
          "rgba(255, 255, 255, 1)",
        ]}
        style={styles.linear}
      >
        <View style={styles.main}>
          <Logo style={styles.logo} />
          <View style={styles.subContainer}>
            <Text style={styles.text}>
              NearBy helps you find the nearest facilities
            </Text>
            <RoundedButton
              text="Get Start"
              icon={true}
              onPress={() => navigation.navigate("Next")}
            />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default GetStart;
