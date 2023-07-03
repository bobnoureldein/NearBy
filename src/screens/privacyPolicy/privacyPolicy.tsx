import React, { useState, useCallback } from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AfterLoginStackParamList } from "../../navigation/navigation";
import styles from "./styles";

type PrivacyScreenNavigationProp = StackNavigationProp<
  AfterLoginStackParamList,
  "PrivacyPolicy"
>;

type Props = {
  navigation: PrivacyScreenNavigationProp;
};

const PrivacyPolicy = ({ navigation }: Props) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 3); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Who are we?</Text>
      <Text
        style={styles.subText}
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 3}
      >
        dummy text ever since the 1500s, when an unknown Dining chair, waiting
        chair or home brushes as a garden corner home view more dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      {lengthMore ? (
        <Text onPress={toggleNumberOfLines} style={styles.moreText}>
          {textShown ? "View less..." : "View more..."}
        </Text>
      ) : null}
    </View>
  );
};

export default PrivacyPolicy;
