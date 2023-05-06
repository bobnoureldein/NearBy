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

type NextScreenNavigationProp = StackNavigationProp<
  BeforeLoginStackParamList,
  "Next"
>;

type Props = {
  navigation: NextScreenNavigationProp;
};

const Next = ({ navigation }: Props) => {
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
            source={require("../../images/phone.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.mainText}>search for NearBy facilities</Text>
          <Text style={styles.text}>From now , you will find the</Text>
          <Text style={styles.text}>closest facilities to you by your</Text>
          <Text style={styles.text}>smart phone</Text>
        </View>
        <RoundedButton
          text="Get Start"
          icon={true}
          onPress={() => navigation.navigate("Next2")}
        />
      </View>
    </LinearGradient>
  );
};

export default Next;
