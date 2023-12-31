import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
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
    marginVertical: 5,
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
  reservedText: {
    color: colors.orange,
    fontWeight: "bold",
  },
  reserveButton: {
    paddingTop: 20,
    alignItems: "center",
  },
  reserveButtonText: {
    color: colors.orange,
    fontWeight: "bold",
  },
  reservationDates: {
    color: colors.black,
    fontWeight: "bold",
    marginTop: 10,
  },
  mapContainer: {
    margin: 10,
    height: 300,
    borderWidth: 1,
    borderColor: colors.pinegreen,
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    flex: 1,
    alignSelf: "stretch",
  },
  mapImage: {
    width: 40,
    height: 40,
  },
});
