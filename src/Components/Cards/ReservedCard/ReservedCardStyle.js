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
    marginVertical: 2,
  },
  locationContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.pinegreen,
    backgroundColor: colors.orange,
    padding: 5,
    flexDirection: "column",
  },
  locations: {
    color: colors.openorange,
    fontWeight: "bold",
  },
  btnCancel: {
    width: 60,
    alignSelf: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    backgroundColor: colors.yellow,
    marginTop: 2,
  },
});
