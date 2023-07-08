import React from "react";
import { View, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AfterLoginStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type NotificationsScreenNavigationProp = StackNavigationProp<
  AfterLoginStackParamList,
  "Notifications"
>;

type Props = {
  navigation: NotificationsScreenNavigationProp;
};

const Notifications = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={styles.containerStyle}
      style={styles.container}
    ></ScrollView>
  );
};

export default Notifications;
