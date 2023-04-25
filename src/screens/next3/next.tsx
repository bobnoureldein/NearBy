import React from "react";
import { View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RoundedButton from "../../components/RoundedButton/roundButton";
import { mainColor, secondaryColor } from "../../constants/constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/navigation";
import styles from "./styles";

type Next3ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Next3"
>;

type Props = {
  navigation: Next3ScreenNavigationProp;
};

const Next3 = ({ navigation }: Props) => {
  return (
    <LinearGradient
      colors={[
        mainColor,
        secondaryColor,
        secondaryColor,
        secondaryColor,
        "#fff",
        "#fff",
      ]}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../images/phoneProfile.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.mainText}>Satisfaction is our priority</Text>
          <Text style={styles.text}>Our goal is to save time</Text>
          <Text style={styles.text}>and effort spent searching for</Text>
          <Text style={styles.text}>nearby places</Text>
        </View>
        <RoundedButton
          text="Get Start"
          icon={true}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </LinearGradient>
  );
};

export default Next3;
