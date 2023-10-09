import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./DetailCardStyle";

const DetailCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.container}>
        <Text style={styles.brand}>{props.brand}</Text>
        <Text style={styles.type}>{props.type}</Text>
        <View style={styles.locations_container}>
          <Text style={styles.locations}>{props.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DetailCard;
