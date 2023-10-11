import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 7,
    backgroundColor: colors.openorange,
    borderWidth: 1,
    borderColor: colors.pinegreen,
    borderRadius: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  type: {
    color: "black",
    margin: 2,
  },
  locations_container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.pinegreen,
    backgroundColor: colors.orange,
    padding: 5,
    alignSelf: "flex-start",
  },
  locations: {
    color: colors.openorange,
    fontWeight: "bold",
  },
});
