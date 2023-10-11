import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../../styles/colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Rent = () => {
  const navigation = useNavigation();
  const logOut = async () => {
    await AsyncStorage.removeItem("userSession");
    navigation.navigate("AuthScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.warn}>Henüz bir kiralama yapmadınız!</Text>
      <TouchableOpacity style={styles.btnLogOut} onPress={logOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
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
  btnLogOut: {
    position: "absolute",
    bottom: 50,
    width: 100,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.yellow,
  },
});
