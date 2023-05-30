import React from "react";
import { View } from "react-native";
import Map from "../../components/Map/map";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HomeScreenNavigationProp = StackNavigationProp<
  BottomTabStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 48 }]}>
      <Map />
      <View style={styles.buttonContainer}>
        {/* <MainButton
          text="Use This Address"
          onPress={() => navigation.navigate("NearMe")}
        /> */}
      </View>
    </View>
  );
};

export default Home;
