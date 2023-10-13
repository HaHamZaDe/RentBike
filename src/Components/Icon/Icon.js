import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../styles/colors";

const Icon = ({ name, focused, color }) => {
  return (
    <View>
      <MaterialIcons
        name={name}
        size={30}
        color={color ?? focused ? colors.black : colors.yellow}
      />
    </View>
  );
};

export default Icon;
