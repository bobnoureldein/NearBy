import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import SliderComponent from "../MultiSlider/multiSlider";
import StarRating from "../starRating/starRating";
import Icon from "react-native-vector-icons/AntDesign";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose }) => {
  const handleSliderValuesChange = (newValues: number[]) => {
    // Handle the slider values change
    console.log("New slider values:", newValues);
    // ... perform any other necessary actions
  };

  return (
    <Modal visible={isOpen} animationType="slide" transparent>
      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetContent}>
          <View style={styles.bottomSheetHeader}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Icon name="close" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.bottomSheetTitle}>Filter</Text>
            <View style={styles.closeButton} />
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.text}>Price</Text>
            <SliderComponent onValuesChange={handleSliderValuesChange} />
            <Text style={styles.text}>City</Text>
            <Text style={styles.text}>Rating</Text>
            <StarRating />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheetContent: {
    backgroundColor: "#f1f1f1",
    height: 400,
    padding: 20,
  },
  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    width: 40,
  },
  bodyContainer: {
    flexDirection: "column",
  },
  textArea: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  text: {
    alignSelf: "flex-start",
    fontWeight: "700",
    fontSize: 15,
    marginTop: 12,
  },
});

export default BottomSheet;
