import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainButton from "../../components/MainButton/mainButton";
import styles from "./styles";
import { AfterLoginStackParamList } from "../../navigation/navigation";
import {
  backgroundColorRGBA,
  backgroundColorRGBAOpacity,
} from "../../constants/constants";
import TextInput from "../../components/TextInput/textInput";
import PhoneIcon from "../../images/phone";
import UserIcon from "../../images/curvedUser";
import EmailIcon from "../../images/curvedMail";
import DocumentIcon from "../../images/document";
import CircleImage from "../../components/CircleImage/CircleImage";

const backgroundImage = require("../../images/villa.png");

type CompleteCodeScreenNavigationProp = StackNavigationProp<
  AfterLoginStackParamList,
  "CompleteCode"
>;

type Props = {
  navigation: CompleteCodeScreenNavigationProp;
};

const Tab = createMaterialTopTabNavigator();

function CompleteCode({ navigation }: Props) {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <LinearGradient
        colors={[
          backgroundColorRGBAOpacity,
          "transparent",
          backgroundColorRGBAOpacity,
          backgroundColorRGBA,
          backgroundColorRGBA,
          backgroundColorRGBA,
          backgroundColorRGBA,
          backgroundColorRGBA,
          backgroundColorRGBA,
        ]}
        style={styles.linear}
      >
        <View style={styles.main}>
          <Text style={styles.text}>Complete Your Account</Text>
        </View>
        <View style={styles.topTab}>
          <Tab.Navigator>
            <Tab.Screen name="Normal Account" component={NormalAccount} />
            <Tab.Screen name="Business Account" component={BusinessAccount} />
          </Tab.Navigator>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const NormalAccount = ({ navigation }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <View style={styles.subContainer}>
      <CircleImage onPress={() => navigation.navigate("Camera")} />
      <TextInput
        icon={<UserIcon />}
        value={name}
        onChangeText={(value: string) => setName(value)}
        placeholder="Full Name"
        autoFocus={true}
        inputMode="text"
        maxLength={77}
      />
      <TextInput
        icon={<PhoneIcon />}
        value={phone}
        onChangeText={(value: string) => setPhone(value)}
        placeholder="Your Phone"
        autoFocus={true}
        inputMode="tel"
        maxLength={14}
      />
      <TextInput
        icon={<EmailIcon />}
        value={email}
        onChangeText={(value: string) => setEmail(value)}
        placeholder="Your Email"
        autoFocus={true}
        inputMode="email"
        maxLength={77}
      />
      <MainButton text="Confirm" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const BusinessAccount = ({ navigation }: Props) => {
  const [name, setBusinessName] = useState("");
  const [phone, setBusinessPhone] = useState("");
  const [email, setBusinessEmail] = useState("");
  const [regNumber, setRegNumber] = useState("");

  return (
    <View style={styles.subContainer}>
      <CircleImage onPress={() => navigation.navigate("Camera")} />
      <TextInput
        icon={<UserIcon />}
        value={name}
        onChangeText={(value: string) => setBusinessName(value)}
        placeholder="Full Name"
        autoFocus={true}
        inputMode="text"
        maxLength={77}
      />
      <TextInput
        icon={<PhoneIcon />}
        value={phone}
        onChangeText={(value: string) => setBusinessPhone(value)}
        placeholder="Your Phone"
        autoFocus={true}
        inputMode="tel"
        maxLength={14}
      />
      <TextInput
        icon={<EmailIcon />}
        value={email}
        onChangeText={(value: string) => setBusinessEmail(value)}
        placeholder="Your Email"
        autoFocus={true}
        inputMode="email"
        maxLength={77}
      />
      <TextInput
        icon={<DocumentIcon />}
        value={regNumber}
        onChangeText={(value: string) => setRegNumber(value)}
        placeholder="Commercial Registration No"
        autoFocus={true}
        inputMode="numeric"
        maxLength={77}
      />
      <MainButton text="Confirm" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default CompleteCode;
