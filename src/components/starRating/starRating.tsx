import { StyleSheet, ScrollView, View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

const starRating = () => {
  const starRatingData = [
    { id: 10, star: 5 },
    { id: 9, star: 4.5 },
    { id: 8, star: 4 },
    { id: 7, star: 3.5 },
    { id: 6, star: 3 },
    { id: 5, star: 2.5 },
    { id: 4, star: 2 },
    { id: 3, star: 1.5 },
    { id: 2, star: 1 },
    { id: 1, star: 0.5 },
  ];

  const Star = ({ data }) => {
    return (
      <TouchableOpacity style={styles.starContainer}>
        <Icon name="star" size={18} color="gold" />
        <Text>{data == 5 ? "all" : data}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {starRatingData.map((item, index) => {
        return <Star key={item.id} data={item.star} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  starContainer: {
    width: 68,
    height: 30,
    borderRadius: 34,
    borderColor: "#000",
    borderWidth: 1,
    marginRight: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default starRating;
