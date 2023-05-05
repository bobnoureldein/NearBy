import React from "react";
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

export type RootStackParamList = {
  GetStart: undefined;
  Next: undefined;
  Next2: undefined;
  Next3: undefined;
  Login: undefined;
  VerifyCode: undefined;
  CompleteCode: undefined;
  Camera: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalFadeTransition,
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
        }}
      >
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Next" component={Next} />
        <Stack.Screen name="Next2" component={Next2} />
        <Stack.Screen name="Next3" component={Next3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="CompleteCode" component={CompleteCode} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
