import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import { StatusBar } from "expo-status-bar";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  image_container: {
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 350,
    height: 350,
  },
  header: {
    fontSize: 100,
    fontWeight: "bold",
    color: colors.yellow,
    textAlign: "center",
    margin: 5,
  },
  inputContainer: {
    flex: 1,
    margin: 10,
  },
});
