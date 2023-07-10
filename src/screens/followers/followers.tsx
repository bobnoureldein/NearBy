import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AfterLoginStackParamList } from "../../navigation/navigation";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather";

type FollowersNavigationProp = StackNavigationProp<
  AfterLoginStackParamList,
  "Followers"
>;

type Props = {
  navigation: FollowersNavigationProp;
};

type FollowerProps = {
  userName: string;
};

const followersData = [
  { id: 1, userName: "Hager Ali" },
  { id: 2, userName: "Hager Aly" },
  { id: 3, userName: "Hager Haidar " },
  { id: 4, userName: "Hager Alia" },
];

const Follower: React.FC<FollowerProps> = ({ userName }) => {
  const dropDownRef = useRef(null);

  const [showButtonList, setShowButtonList] = useState(false);

  const toggleButtonList = (index) => {
    setShowButtonList((prevShowButtonList) => !prevShowButtonList);
  };

  //   const toggleButtonList = (event) => {
  //     console.log("dropDownRef.current", dropDownRef.current);
  //     // console.log("event", event);
  //     event.stopPropagation();
  //     if (event.target !== dropDownRef.current) setShowButtonList(false);
  //     else setShowButtonList((prevShowButtonList) => !prevShowButtonList);
  //   };

  const openButtonList = () => {
    setShowButtonList(true);
  };

  const closeButtonList = () => {
    setShowButtonList(false);
  };

  return (
    <View style={styles.contentContainer}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.followerContainer}
        onPress={closeButtonList}
      >
        <Image
          source={require("../../images/userImage.png")}
          style={styles.image}
        />
        <Text style={{ fontWeight: "700" }}>{userName}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onFocus={closeButtonList}
        onBlur={closeButtonList}
        onPress={toggleButtonList}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Icon name="more-vertical" size={20} />
      </TouchableOpacity>
      {showButtonList && (
        <View style={styles.buttonList}>
          <TouchableOpacity style={styles.button} onPress={closeButtonList}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={closeButtonList}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const Followers: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {followersData.map((item) => {
        return <Follower key={item.id} userName={item.userName} />;
      })}
    </ScrollView>
  );
};

export default Followers;
