import React from "react";
import { ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AfterLoginStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NotificationBar from "../../components/Notification/notification";
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
    >
      <NotificationBar />
      <NotificationBar />
      <NotificationBar />
    </ScrollView>
  );
};

export default Notifications;
