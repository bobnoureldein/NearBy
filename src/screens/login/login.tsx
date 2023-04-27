import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import MainButton from "../../components/MainButton/mainButton";
import Logo from "../../images/logo.jsx";
import styles from "./styles";
import { RootStackParamList } from "../../navigation/navigation";
import {
  backgroundColorRGBA,
  backgroundColorRGBAOpacity,
} from "../../constants/constants";
import TextInput from "../../components/TextInput/textInput";

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
          backgroundColorRGBA,
          "transparent",
          backgroundColorRGBAOpacity,
          backgroundColorRGBA,
          backgroundColorRGBA,
        ]}
        style={styles.linear}
      >
        <View style={styles.main}>
          <Logo style={styles.logo} />
          <Text style={styles.text}>Login to your account</Text>
          <TextInput />
          <View style={styles.subContainer}>
            <MainButton
              text="Log In"
              onPress={() => navigation.navigate("GetStart")}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.secondaryText}>Log In As A Visitor</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Login;
