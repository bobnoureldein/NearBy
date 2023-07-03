import React, { useState } from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import Map from "../../components/Map/map";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Input from "../../components/TextInput/textInput";
import Icon from "react-native-vector-icons/Feather";
import ImageButton from "../../components/ImageButton/imageButton";

type HomeScreenNavigationProp = StackNavigationProp<
  BottomTabStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
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

const Home = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.searchContainer}>
        <Input
          icon={<Icon name="search" size={20} />}
          value={search}
          onChangeText={(value: string) => setSearch(value)}
          placeholder="Search ..."
          autoFocus={true}
          inputMode="text"
          maxLength={77}
          containerStyle={styles.containerStyle}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require("../../images/filter.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.listContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <ImageButton
            key={index}
            label={item.label}
            imageSource={item.image}
            containerStyle={{ marginRight: 20 }}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}></View>
    </View>
  );
};

export default Home;
