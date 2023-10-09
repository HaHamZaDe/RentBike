import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AddData, GetData, UpdateData } from "../../index";

import colors from "../../styles/colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bi-Rent</Text>
      <GetData />
      <AddData />
      <UpdateData />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.yellow,
  },
});
