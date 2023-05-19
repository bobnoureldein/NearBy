import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionSpecs, TransitionPresets } from "@react-navigation/stack";
import GetStart from "../screens/getStart/getStart";
import Next from "../screens/next/next";
import Next2 from "../screens/next2/next";
import Next3 from "../screens/next3/next";
import Login from "../screens/login/login";
import VerifyCode from "../screens/verifyCode/verifyCode";
import CompleteCode from "../screens/complete/complete";
import Camera from "../screens/camera/camera";
import Home from "../screens/home/home";
import NearMe from "../screens/nearMe/nearMe";

import ArrowLeft from "../images/arrow-left";

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
  Home: undefined;
  NearMe: undefined;
};

export type CustomHeaderStackParamList = {
  Home: undefined;
  Next: undefined;
};

const BeforeLoginStack = createStackNavigator<BeforeLoginStackParamList>();
const AfterLoginStack = createStackNavigator<AfterLoginStackParamList>();

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
      <BeforeLoginStack.Screen
        // options={{
        //   headerShown: true,
        //   headerTransparent: true,
        // }}
        name="Next"
        component={Next}
      />
      <BeforeLoginStack.Screen
        name="Next2"
        component={Next2}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerRight: (props) => <SkipButton {...props} />, // Hide default back button
          headerTitle: () => null,
          headerLeft: () => null,
          // headerStyle: { backgroundColor: "#F9FAFC" },
          // headerTitleStyle: { color: "#2D3F5F" },
          // headerTintColor: "#2D3F5F",
        }}
      />
      <BeforeLoginStack.Screen name="Next3" component={Next3} />
      <BeforeLoginStack.Screen name="Login" component={Login} />
      <BeforeLoginStack.Screen name="VerifyCode" component={VerifyCode} />
    </BeforeLoginStack.Navigator>
  );
};

function SkipButton({ ...props }) {
  return <Text {...props}>Skip</Text>;
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
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: (props) => <BackIcon {...props} />, // Hide default back button
          headerTitle: "Select Location",
          // headerStyle: { backgroundColor: "#F9FAFC" },
          // headerTitleStyle: { color: "#2D3F5F" },
          // headerTintColor: "#2D3F5F",
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
          // headerStyle: { backgroundColor: "#F9FAFC" },
          // headerTitleStyle: { color: "#2D3F5F" },
          // headerTintColor: "#2D3F5F",
        }}
      />
    </AfterLoginStack.Navigator>
  );
};

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
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
