import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import NavigationContainer from "./src/navigation/navigation";
import SplashScreen from "react-native-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="transparent"
      />
      <NavigationContainer />
    </SafeAreaProvider>
  );
}

export default App;
