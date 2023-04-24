import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import NavigationContainer from "./src/navigation/navigation";
import SplashScreen from "react-native-splash-screen";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="transparent"
      />
      <NavigationContainer />
    </>
  );
}

export default App;
