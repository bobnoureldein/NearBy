import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SavedScreenNavigationProp = StackNavigationProp<
  BottomTabStackParamList,
  "Saved"
>;

type Props = {
  navigation: SavedScreenNavigationProp;
};

const Saved = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 48 }]}></View>
  );
};

export default Saved;
