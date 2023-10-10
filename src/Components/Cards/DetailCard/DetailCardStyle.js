import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e60020",
    borderRadius: 10,
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
    borderColor: "#e60020",
    backgroundColor: "#e60020",
    padding: 5,
    alignSelf: "flex-start",
  },
  locations: {
    color: "white",
    fontWeight: "bold",
  },
  reservedText: {
    color: "red",
  },
  reserveButton: {
    paddingTop: 20,
    alignItems: "center",
  },
  reserveButtonText: {
    color: "#e60020",
    fontWeight: "bold",
  },
});
