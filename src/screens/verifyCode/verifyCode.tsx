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
import CodeFieldComponent from "../../components/CodeField/codeField";

const backgroundImage = require("../../images/villa.png");

type VerifyCodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "VerifyCode"
>;

type Props = {
  navigation: VerifyCodeScreenNavigationProp;
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
          <Text style={styles.text}>Verify Code</Text>
          <Text style={styles.subText}>we have sent code to phone number</Text>
          <Text style={styles.subText}>011----------320</Text>
          <View style={styles.subContainer}>
            <CodeFieldComponent />
            <MainButton
              text="Verify"
              onPress={() => navigation.navigate("GetStart")}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.secondaryText}>Send Again</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Login;
