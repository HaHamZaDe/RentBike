import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./ButtonStyle";

const Button = ({ text, onPress, theme = "primary", loading = false }) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={loading ? null : onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles[theme].title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
