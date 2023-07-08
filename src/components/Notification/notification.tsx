import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  PanResponder,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { width } from "../../constants/constants";

const CustomComponent: React.FC = () => {
  const swipeAnimation = useRef(new Animated.Value(0)).current;
  const [showHiddenComponent, setShowHiddenComponent] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dx < 0, // Detects left swipe
      onPanResponderMove: (_, gestureState) => {
        // Limit the swipe movement to a maximum of 40 pixels
        if (gestureState.dx < -80) {
          swipeAnimation.setValue(-80);
        } else {
          console.log("gestureState.dx", gestureState.dx);
          swipeAnimation.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -80) {
          setShowHiddenComponent(true);

          // Check if the component has been swiped enough (-40 is the threshold)
          // Show the hidden component
        } else {
          // Reset the swipe animation if the component has not been swiped enough
          Animated.timing(swipeAnimation, {
            toValue: 0,
            duration: 200, // Adjust the duration as desired
            useNativeDriver: true,
          }).start();
          setShowHiddenComponent(false);
        }
      },
    })
  ).current;

  const handlePress = () => {
    // Reset the swipe animation when pressed
    Animated.timing(swipeAnimation, {
      toValue: 0,
      duration: 200, // Adjust the duration as desired
      useNativeDriver: true,
    }).start();
    setShowHiddenComponent(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{ width: showHiddenComponent && width - 80 }}>
        <Animated.View
          style={{
            transform: [{ translateX: swipeAnimation }],
          }}
          {...panResponder.panHandlers}
        >
          <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={styles.topRightContainer}>
              <View style={styles.redCircle} />
            </View>
            <View style={styles.contentContainer}>
              <Image
                source={require("../../images/userImage.png")}
                style={styles.image}
              />
              <Text style={styles.text}>
                <Text style={{ fontWeight: "700" }}>Hager Ali</Text> sent you a
                message
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>10:30 AM</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
      {showHiddenComponent && (
        <TouchableOpacity
          onPress={handlePress}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Image
            source={require("../../images/trash.png")}
            style={{ height: 45, width: 45, alignSelf: "flex-start" }}
          />
        </TouchableOpacity>
      )}

      {/* Hidden component */}
      {/* Render the hidden component conditionally based on the swipe gesture */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    width: width * 0.9,
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: width * 0.05,
    elevation: 2,
  },
  topRightContainer: {
    alignSelf: "flex-end",
  },
  redCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  timeContainer: {
    alignSelf: "flex-end",
  },
  timeText: {
    fontSize: 12,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
    overflow: "hidden",
  },
  text: {
    fontSize: 16,
  },
  deleteButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 8,
  },
});

export default CustomComponent;
