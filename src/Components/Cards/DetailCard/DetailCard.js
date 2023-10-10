import { Text, View, TouchableOpacity, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ref, child, update } from "firebase/database";
import { db } from "../../../../config";
import Rating from "../../Rating/Rating";
import styles from "./DetailCardStyle";

const DetailCard = (props) => {
  const [theRating, setTheRating] = useState();
  const dispatch = useDispatch();

  const updateBike = useCallback(() => {
    const bikesRef = ref(db, "bikes/");
    const bikeIndexToUpdate = props?.index;
    const bikeToUpdateRef = child(bikesRef, bikeIndexToUpdate.toString());

    update(bikeToUpdateRef, { rating: theRating })
      .then(() => {
        console.log("Updated");
        dispatch({ type: "SET_RATING", payload: theRating });
      })
      .catch((error) => {
        console.error("Error:" + error.message);
      });
  }, [theRating, dispatch]);

  const setRating = (selectedRating) => {
    console.log({ selectedRating });
    setTheRating(selectedRating);
  };

  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.container}>
        <Text style={styles.brand}>{props.brand}</Text>
        <Text style={styles.type}>{props.type}</Text>
        <View style={styles.locations_container}>
          <Text style={styles.locations}>{props.location}</Text>
        </View>
        <Rating setSelectedRating={setRating} defaultRating={theRating} />
        <Pressable onPress={updateBike} style={{ paddingTop: 20 }}>
          <Text>Update rating</Text>
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

export default DetailCard;
