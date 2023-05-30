import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AfterLoginStackParamList } from "../../navigation/navigation";
import MainButton from "../../components/MainButton/mainButton";
import ImageButton from "../../components/ImageButton/imageButton";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

type NearMeScreenNavigationProp = StackNavigationProp<
  AfterLoginStackParamList,
  "NearMe"
>;

type Props = {
  navigation: NearMeScreenNavigationProp;
};

const Tab = createMaterialTopTabNavigator();

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

const People = ({ navigation }: Props) => {
  const rows = [];
  const buttonsPerRow = 3;

  for (let i = 0; i < data.length; i += buttonsPerRow) {
    const rowButtons = data.slice(i, i + buttonsPerRow);
    const row = (
      <View key={i} style={styles.listContainer}>
        {rowButtons.map((item, index) => (
          <ImageButton
            key={index}
            label={item.label}
            imageSource={item.image}
          />
        ))}
      </View>
    );
    rows.push(row);
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.rowContainer}
    >
      {rows}
    </ScrollView>
  );
};

const Places = ({ navigation }: Props) => {
  const rows = [];
  const buttonsPerRow = 3;

  for (let i = 0; i < data.length; i += buttonsPerRow) {
    const rowButtons = data.slice(i, i + buttonsPerRow);
    const row = (
      <View key={i} style={styles.listContainer}>
        {rowButtons.map((item, index) => (
          <ImageButton
            key={index}
            label={item.label}
            imageSource={item.image}
          />
        ))}
      </View>
    );
    rows.push(row);
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.rowContainer}
    >
      {rows}
    </ScrollView>
  );
};

const NearMe = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 48 }]}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.label, // Style for the tab label
          tabBarStyle: styles.tabBar, // Style for the tab bar
          tabBarIndicatorStyle: styles.indicator, // Style for the tab indicator
        }}
      >
        <Tab.Screen name="People" component={People} />
        <Tab.Screen name="Places" component={Places} />
      </Tab.Navigator>
      <View style={styles.buttonContainer}>
        <MainButton
          text="Search"
          onPress={() => navigation.navigate("UserStack")}
        />
      </View>
    </View>
  );
};

export default NearMe;
