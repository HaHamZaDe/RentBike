import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    padding: 16,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.yellow,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderColor: colors.pinegreen,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: colors.openorange,
  },
  searchInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: colors.orange,
    fontWeight: "bold",
    flex: 1,
  },
  filterPicker: {
    color: colors.orange,
    width: 150,
    height: 40,
  },
});
