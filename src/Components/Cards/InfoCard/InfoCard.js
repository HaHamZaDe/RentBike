import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./InfoCardStyle";

const InfoCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.container}>
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.brand}>{props.brand}</Text>
            <Text style={styles.type}>{props.type}</Text>
          </View>
          <View style={styles.locations_container}>
            <Text style={styles.locations}>{props.location}</Text>
          </View>
        </View>
        <Text>Rating: {props.rating} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default InfoCard;
