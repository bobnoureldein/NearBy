import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RoundedButton from "../../components/RoundedButton/roundButton";
import Logo from "../../images/logo.jsx";
const backgroundImage = require("../../images/unsplash.png");

const GetStart = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <LinearGradient
        colors={[
          "transparent",
          "transparent",
          "transparent",
          "rgba(255, 255, 255, .7)",
          "rgba(255, 255, 255, 1)",
        ]}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.main}>
          <Logo style={styles.logo} />
          <View style={styles.subContainer}>
            <Text style={styles.text}>
              NearBy helps you find the nearest facilities
            </Text>
            <RoundedButton text="Get Start" icon={true} />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 46,
  },
  subContainer: {
    alignItems: "center",
  },
  logo: {
    marginTop: "30%",
  },

  text: {
    fontSize: 32,
    color: "#000",
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 42,
    paddingHorizontal: "10%",
  },
});

export default GetStart;
