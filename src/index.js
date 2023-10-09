//WORK SPACE

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../config";
import { child, onValue, ref, set, update } from "firebase/database";
import { Pressable } from "react-native";

const AddData = () => {
  const data = [
    {
      id: 1,
      brand: "Carraro",
      type: "Mountain",
      color: "Blue",
      startDate: "06.10.2023",
      endDate: "20.10.2023",
      location: "Maltepe",
    },
    {
      id: 2,
      brand: "Salcano",
      type: "Road",
      color: "Red",
      startDate: "07.10.2023",
      endDate: "25.10.2023",
      location: "Kadıköy",
    },
    {
      id: 3,
      brand: "Peugeot",
      type: "City",
      color: "Yellow",
      startDate: "01.10.2023",
      endDate: "01.10.2024",
      location: "Beşiktaş",
    },
    {
      id: 4,
      brand: "Bisan",
      type: "Mountain",
      color: "Purple",
      startDate: "15.10.2023",
      endDate: "30.10.2023",
      location: "Ataköy",
    },
    {
      id: 5,
      brand: "Bianchi",
      type: "City",
      color: "Orange",
      startDate: "25.10.2023",
      endDate: "20.12.2023",
      location: "Maltepe",
    },
  ];

  const dataAddOn = () => {
    set(ref(db, "bikes/"), data);
  };

  return (
    <Pressable onPress={dataAddOn}>
      <Text style={styles.buttonText}>Add Data</Text>
    </Pressable>
  );
};

const GetData = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const bikesRef = ref(db, "bikes/");
    onValue(bikesRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setBikes(data);
    });
  }, []);

  return (
    <View>
      {bikes &&
        bikes.map((item, index) => {
          return (
            <View key={index} style={styles.card}>
              <Text>{item?.brand}</Text>
              <Text>{item?.color}</Text>
              <Text>
                {item?.startDate} - {item?.endDate}
              </Text>
            </View>
          );
        })}
    </View>
  );
};

const UpdateData = () => {
  const bikesRef = ref(db, "bikes/");

  const updateBike = () => {
    console.log("clicked");
    const bikeIdToUpdate = 1; //index number is 1 in bikes data in firebase realtime database (dummy data)
    const bikeToUpdateRef = child(bikesRef, bikeIdToUpdate.toString());

    update(bikeToUpdateRef, { color: "Pink" })
      .then(() => {
        console.log("Updated");
      })
      .catch((error) => {
        console.error("Error:" + error.message);
      });
  };

  return (
    <Pressable onPress={updateBike}>
      <Text style={styles.buttonText}>Update Data</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonText: {
    backgroundColor: "#00FC91",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: "#7D1300",
  },
  card: {
    backgroundColor: "#00FC91",
    marginBottom: 20,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
  },
});

export { AddData, GetData, UpdateData };
