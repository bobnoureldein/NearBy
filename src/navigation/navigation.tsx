import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStart from "../screens/getStart/getStart";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStart" component={GetStart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
