import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../../styles/colors";
import { StatusBar } from "expo-status-bar";

const Rent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.warn}>Henüz bir kiralama yapmadınız!</Text>
    </View>
  );
};

export default Rent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    marginTop: StatusBar.currentHeight,
  },
  warn: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.yellow,
    margin: 100,
  },
});
