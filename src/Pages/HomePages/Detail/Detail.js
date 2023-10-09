import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DetailCard from "../../../Components/Cards/DetailCard";

const Detail = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View>
      <Text>Detail</Text>
      <DetailCard
        type={item.type}
        brand={item.brand}
        location={item.location}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
