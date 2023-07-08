import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionSpecs,
  TransitionPresets,
  createStackNavigator,
  StackHeaderRightButtonProps,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import GetStart from "../screens/getStart/getStart";
import Next from "../screens/next/next";
import Next2 from "../screens/next2/next";
import Next3 from "../screens/next3/next";
import Login from "../screens/login/login";
import VerifyCode from "../screens/verifyCode/verifyCode";
import CompleteCode from "../screens/complete/complete";
import Camera from "../screens/camera/camera";
import MapScreen from "../screens/map/map";
import NearMe from "../screens/nearMe/nearMe";
import Home from "../screens/home/home";
import Profile from "../screens/profile/profile";
import Saved from "../screens/saved/saved";
import More from "../screens/more/more";
import PrivacyPolicy from "../screens/privacyPolicy/privacyPolicy";
import Notifications from "../screens/notifications/notifications";
import ArrowLeft from "../images/arrow-left";
import Icon from "react-native-vector-icons/Feather";
import { mainColor, width } from "../constants/constants";

export type BeforeLoginStackParamList = {
  GetStart: undefined;
  Next: undefined;
  Next2: undefined;
  Next3: undefined;
  Login: undefined;
  VerifyCode: undefined;
};

export type AfterLoginStackParamList = {
  CompleteCode: undefined;
  Camera: undefined;
  NearMe: undefined;
  MapScreen: undefined;
  UserStack: undefined;
  Home: undefined;
  PrivacyPolicy: undefined;
  Notifications: undefined;
};

export type BottomTabStackParamList = {
  Home: UserStackParams;
  Profile: UserStackParams;
  Saved: UserStackParams;
  More: UserStackParams;
};

export type UserStackParams = {
  screen: string;
};

const BeforeLoginStack = createStackNavigator<BeforeLoginStackParamList>();
const AfterLoginStack = createStackNavigator<AfterLoginStackParamList>();

const BottomTabStack = createBottomTabNavigator<BottomTabStackParamList>();

const BeforeLoginNavigator = () => {
  return (
    <BeforeLoginStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}
    >
      <BeforeLoginStack.Screen name="GetStart" component={GetStart} />
      <BeforeLoginStack.Screen name="Next" component={Next} />
      <BeforeLoginStack.Screen
        name="Next2"
        component={Next2}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerRight: (props) => <SkipButton {...props} />, // Hide default back button
          headerTitle: () => null,
          headerLeft: () => null,
        }}
      />
      <BeforeLoginStack.Screen name="Next3" component={Next3} />
      <BeforeLoginStack.Screen name="Login" component={Login} />
      <BeforeLoginStack.Screen name="VerifyCode" component={VerifyCode} />
    </BeforeLoginStack.Navigator>
  );
};

function SkipButton({ ...props }) {
  return (
    <Text {...props} style={{ marginRight: 20 }}>
      Skip
    </Text>
  );
}

function BackIcon({ ...props }) {
  return (
    <ArrowLeft
      {...props}
      style={styles.backStyle}
      hitSlop={{ top: 12, bottom: 12, left: 20, right: 20 }}
    />
  );
}

const AfterLoginNavigator = () => {
  return (
    <AfterLoginStack.Navigator screenOptions={{ headerShown: false }}>
      <AfterLoginStack.Screen
        options={{
          headerShown: false,
        }}
        name="CompleteCode"
        component={CompleteCode}
      />
      <AfterLoginStack.Screen
        options={{
          headerShown: false,
        }}
        name="Camera"
        component={Camera}
      />
      <AfterLoginStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: (props) => <BackIcon {...props} />, // Hide default back button
          headerTitle: "Select Location",
        }}
      />
      <AfterLoginStack.Screen
        name="NearMe"
        component={NearMe}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: (props) => <BackIcon {...props} />, // Hide default back button
          headerTitle: "Near me",
        }}
      />
      <AfterLoginStack.Screen
        name="UserStack"
        component={UserStack}
        options={{
          headerShown: false,
        }}
      />
      <AfterLoginStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          headerShown: true,
          headerLeft: (props) => <BackIcon {...props} />, // Hide default back button
        }}
      />
      <AfterLoginStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20, flexDirection: "row" }}
              onPress={() => console.log("first")}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={{ color: mainColor }}>Clear all</Text>
            </TouchableOpacity>
          ), // Hide default back button
          headerLeft: (props) => <BackIcon {...props} />, // Hide default back button
        }}
      />
    </AfterLoginStack.Navigator>
  );
};

const UserStack = () => {
  return (
    <BottomTabStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTransparent: false,
        headerTitle: () => null,
        headerLeft: () => (
          <View style={{ marginLeft: 20, flexDirection: "row" }}>
            <Text>Hello, user</Text>
            <Image
              source={require("../images/wave.png")}
              style={{ height: 18, width: 18, marginLeft: 6 }}
            />
          </View>
        ),
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <BottomTabStack.Screen
        name="Home"
        component={Home}
        options={({ navigation }: StackHeaderRightButtonProps) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20, flexDirection: "row" }}
              onPress={() => navigation.navigate("Notifications")}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image
                source={require("../images/notification.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
          ), // Hide default back button
        })}
      />
      <BottomTabStack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }: StackHeaderRightButtonProps) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20, flexDirection: "row" }}
              onPress={() => navigation.navigate("Notifications")}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image
                source={require("../images/notification.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
          ), // Hide default back button
        })}
      />
      <BottomTabStack.Screen
        name="Saved"
        component={Saved}
        options={({ navigation }: StackHeaderRightButtonProps) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20, flexDirection: "row" }}
              onPress={() => navigation.navigate("Notifications")}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image
                source={require("../images/notification.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
          ), // Hide default back button
        })}
      />
      <BottomTabStack.Screen
        name="More"
        component={More}
        options={({ navigation }: StackHeaderRightButtonProps) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20, flexDirection: "row" }}
              onPress={() => navigation.navigate("Notifications")}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image
                source={require("../images/notification.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
          ), // Hide default back button
        })}
      />
    </BottomTabStack.Navigator>
  );
};

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: mainColor,
          position: "absolute",
          bottom: 102,
          alignSelf: "center",
          height: 40,
          width: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Image
          source={require("../images/Chat-icon.png")}
          style={{ height: 24, width: 24 }}
        />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,

          marginHorizontal: 26,
          marginBottom: 34,
          borderRadius: 12,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                padding: 20,
                flex: isFocused ? 4 : 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Icon
                name="home"
                size={20}
                style={{ backgroundColor: isFocused ? "red" : "transparent" }}
              />
              {isFocused && (
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

function App() {
  const [isUserLoggedIn, setUser] = useState(true);
  return (
    <NavigationContainer>
      {isUserLoggedIn ? <AfterLoginNavigator /> : <BeforeLoginNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
});

export default App;
