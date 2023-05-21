import React from "react";
import { View } from "react-native";
import Map from "../../components/Map/map";
import { StackNavigationProp } from "@react-navigation/stack";
import { AfterLoginStackParamList } from "../../navigation/navigation";
import MainButton from "../../components/MainButton/mainButton";
import styles from "./styles";

type HomeScreenNavigationProp = StackNavigationProp<
  AfterLoginStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.buttonContainer}>
        <MainButton
          text="Use This Address"
          onPress={() => navigation.navigate("NearMe")}
        />
      </View>
    </View>
  );
};

export default Home;
