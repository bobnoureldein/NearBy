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
import SocialButton from "../../components/SocialButton/socialButton";
import PhoneIcon from "../../images/phone";

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
          <TextInput icon={<PhoneIcon />} />
          <MainButton
            text="Log In"
            onPress={() => navigation.navigate("VerifyCode")}
          />
          <TouchableOpacity>
            <Text style={styles.secondaryText}>Log In As A Visitor</Text>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <View>
              <Text style={{ width: 120, textAlign: "center", fontSize: 14 }}>
                or continue with
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>
          <View style={styles.socialContainer}>
            <SocialButton
              imageSource={require("../../images/apple.png")}
              onPress={() => console.log("first")}
            />
            <SocialButton
              imageSource={require("../../images/google.png")}
              onPress={() => console.log("first")}
            />
            <SocialButton
              imageSource={require("../../images/facebook.png")}
              onPress={() => console.log("first")}
            />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Login;
