import { StyleSheet, StatusBar } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
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
