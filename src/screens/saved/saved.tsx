import React from "react";
import { View, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PlaceCard from "../../components/PlaceCard/placeCard";

type SavedScreenNavigationProp = StackNavigationProp<
  BottomTabStackParamList,
  "Saved"
>;

type Props = {
  navigation: SavedScreenNavigationProp;
};

const data = [
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
  { id: 1, label: "Restaurants", image: require("../../images/google.png") },
  { id: 2, label: "Cafes", image: require("../../images/google.png") },
  { id: 3, label: "Pharmacy", image: require("../../images/google.png") },
];

const Saved = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={styles.containerStyle}
      style={[styles.container, { paddingTop: insets.top + 48 }]}
    >
      {data.map((item, index) => (
        <PlaceCard imageSource={item.image} />
      ))}
    </ScrollView>
  );
};

export default Saved;
