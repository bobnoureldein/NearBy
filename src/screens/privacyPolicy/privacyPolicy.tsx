import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AfterLoginStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type PrivacyScreenNavigationProp = StackNavigationProp<
  AfterLoginStackParamList,
  "PrivacyPolicy"
>;

type Props = {
  navigation: PrivacyScreenNavigationProp;
};

const PrivacyPolicy = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 48 }]}></View>
  );
};

export default PrivacyPolicy;
