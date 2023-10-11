import { StyleSheet, StatusBar } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.yellow,
  },
});
