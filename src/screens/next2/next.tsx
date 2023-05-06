import React from "react";
import { View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RoundedButton from "../../components/RoundedButton/roundButton";
import {
  backgroundColorRGBA,
  mainColor,
  secondaryColor,
} from "../../constants/constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { BeforeLoginStackParamList } from "../../navigation/navigation";
import styles from "./styles";

type Next2ScreenNavigationProp = StackNavigationProp<
  BeforeLoginStackParamList,
  "Next2"
>;

type Props = {
  navigation: Next2ScreenNavigationProp;
};

const Next2 = ({ navigation }: Props) => {
  return (
    <LinearGradient
      colors={[
        mainColor,
        secondaryColor,
        secondaryColor,
        secondaryColor,
        backgroundColorRGBA,
        backgroundColorRGBA,
      ]}
      style={styles.linear}
    >
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../images/phoneMap.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.mainText}>
            You'll also find the nearest cafes and restaurants
          </Text>
          <Text style={styles.text}>You will not need to search</Text>
          <Text style={styles.text}>further, we have collected all</Text>
          <Text style={styles.text}>
            the facilities for you in one application
          </Text>
          <Text style={styles.text}>application</Text>
        </View>
        <RoundedButton
          text="Get Start"
          icon={true}
          onPress={() => navigation.navigate("Next3")}
        />
      </View>
    </LinearGradient>
  );
};

export default Next2;
