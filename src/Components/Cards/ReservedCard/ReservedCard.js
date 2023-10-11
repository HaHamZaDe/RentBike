import { Text, View, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import styles from "./ReservedCardStyle";
import { useDispatch, useSelector } from "react-redux";
import { child, ref, update } from "firebase/database";
import { db } from "../../../../config";

const ReservedCard = (props) => {
  const isReserved = useSelector((state) => state.isReserved);
  const dispatch = useDispatch();

  const cancelReservation = useCallback(() => {
    const bikesRef = ref(db, "bikes/");
    const bikeIndexToUpdate = props?.id;
    const bikeToUpdateRef = child(bikesRef, bikeIndexToUpdate?.toString());

    update(bikeToUpdateRef, {
      startDate: "",
      endDate: "",
      isReserved: false,
    })
      .then(() => {
        dispatch({ type: "SET_RESERVE", payload: false });
      })
      .catch((error) => {
        console.error("Error:" + error.message);
      });
  }, [isReserved, dispatch, props]);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.brand}>{props.brand}</Text>
            <Text style={styles.type}>{props.type}</Text>
            <Text style={styles.dates}>
              Reservation Dates: {props.startDate} - {props.endDate}
            </Text>
          </View>
          <View>
            <View style={styles.locationContainer}>
              <Text style={styles.locations}>{props.location}</Text>
            </View>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={cancelReservation}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReservedCard;
