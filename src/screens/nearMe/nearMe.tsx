import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AfterLoginStackParamList } from "../../navigation/navigation";
import MainButton from "../../components/MainButton/mainButton";
import styles from "./styles";
import { useSafeArea } from "react-native-safe-area-view";

type NearMeScreenNavigationProp = StackNavigationProp<
  AfterLoginStackParamList,
  "NearMe"
>;

type Props = {
  navigation: NearMeScreenNavigationProp;
};

const Tab = createMaterialTopTabNavigator();

const People = ({ navigation }: Props) => {
  return <View></View>;
};

const Places = ({ navigation }: Props) => {
  return <View></View>;
};

const NearMe = ({ navigation }: Props) => {
  const safeArea = useSafeArea();

  return (
    <View style={styles.container}>
      <View style={[styles.topTab, { paddingTop: safeArea.top + 48 }]}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "blue", // Color of the active tab
            tabBarInactiveTintColor: "gray", // Color of the inactive tabs
            tabBarLabelStyle: styles.label, // Style for the tab label
            tabBarStyle: styles.tabBar, // Style for the tab bar
            tabBarIndicatorStyle: styles.indicator, // Style for the tab indicator
          }}
        >
          <Tab.Screen name="People" component={People} />
          <Tab.Screen name="Places" component={Places} />
        </Tab.Navigator>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          text="Use This Address"
          onPress={() => navigation.navigate("NearMe")}
        />
      </View>
    </View>
  );
};

export default NearMe;
