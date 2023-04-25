import React from "react";
import { View, Text, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import MainButton from "../../components/MainButton/mainButton";
import Logo from "../../images/logo.jsx";
import styles from "./styles";
import { RootStackParamList } from "../../navigation/navigation";

const backgroundImage = require("../../images/villa.png");

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login = ({ navigation }: Props) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <LinearGradient
        colors={[
          "rgba(245, 245, 245, 1)",
          "transparent",
          "rgba(245, 245, 245, .8)",
          "rgba(245, 245, 245, 1)",
          "rgba(245, 245, 245, 1)",
        ]}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.main}>
          <Logo style={styles.logo} />
          <Text style={styles.text}>Login to your account</Text>
          <View style={styles.subContainer}>
            <MainButton
              text="Log In"
              onPress={() => navigation.navigate("GetStart")}
            />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Login;
