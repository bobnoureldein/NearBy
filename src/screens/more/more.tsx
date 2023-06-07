import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
      <TouchableOpacity>
        <Text>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default More;
