import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type MoreScreenNavigationProp = StackNavigationProp<
  BottomTabStackParamList,
  "More"
>;

type Props = {
  navigation: MoreScreenNavigationProp;
};

const More = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 48 }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PrivacyPolicy")}
      >
        <View style={styles.subContainer}>
          <Image
            source={require("../../images/note.png")}
            style={styles.icon}
          />
          <Text>Privacy Policy</Text>
        </View>
        <Image
          source={require("../../images/arrow-right.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default More;
