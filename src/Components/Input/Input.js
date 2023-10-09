import React from "react";
import { View, TextInput } from "react-native";

import styles from "./InputStyle";
import colors from "../../styles/colors";

const Input = ({ placeholder, onType, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onType}
        placeholder={placeholder}
        placeholderTextColor={colors.darkgreen}
        style={styles.txtinput}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
