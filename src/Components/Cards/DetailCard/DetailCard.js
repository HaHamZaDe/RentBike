import { Text, View, Pressable, Platform } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ref, child, update } from "firebase/database";
import { db } from "../../../../config";
import Rating from "../../Rating/Rating";
import styles from "./DetailCardStyle";
import DateTimePicker from "@react-native-community/datetimepicker";

const DetailCard = (props) => {
  const [theRating, setTheRating] = useState(props.rating);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isReserved, setIsReserved] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theRating !== undefined) {
      updateBike();
    }
  }, [theRating]);

  const setRating = (selectedRating) => {
    console.log({ selectedRating });
    setTheRating(selectedRating);
  };

  const updateBike = useCallback(() => {
    const bikesRef = ref(db, "bikes/");
    const bikeIndexToUpdate = props?.id;
    const bikeToUpdateRef = child(bikesRef, bikeIndexToUpdate.toString());

    update(bikeToUpdateRef, { rating: theRating })
      .then(() => {
        console.log("Updated");
        dispatch({ type: "SET_RATING", payload: theRating });
      })
      .catch((error) => {
        console.error("Error:" + error.message);
      });
  }, [theRating, dispatch, props]);

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      if (!startDate) {
        setStartDate(selectedDate);
      } else if (!endDate) {
        setEndDate(selectedDate);
        setShowDatePicker(Platform.OS === "ios");

        const bikesRef = ref(db, "bikes/");
        const bikeIndexToUpdate = props?.id;
        const bikeToUpdateRef = child(bikesRef, bikeIndexToUpdate.toString());

        const formattedStartDate = startDate.toLocaleDateString("tr-TR");
        const formattedEndDate = selectedDate.toLocaleDateString("tr-TR");

        update(bikeToUpdateRef, {
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        })
          .then(() => {
            console.log("Reservation updated");
            setIsReserved(true);
          })
          .catch((error) => {
            console.error("Error:" + error.message);
          });
      }
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.brand}>{props.brand}</Text>
            <Text style={styles.type}>{props.type}</Text>
          </View>
          <View style={styles.locations_container}>
            <Text style={styles.locations}>{props.location}</Text>
          </View>
        </View>
        <Rating setSelectedRating={setRating} defaultRating={theRating} />
        {isReserved ? (
          <Text style={styles.reservedText}>Reserved</Text>
        ) : (
          <View>
            {!startDate && !endDate ? (
              <Pressable
                onPress={() => {
                  setShowDatePicker(true);
                }}
                style={styles.reserveButton}
              >
                <Text style={styles.reserveButtonText}>Select Start Date</Text>
              </Pressable>
            ) : startDate && !endDate ? (
              <Pressable
                onPress={() => {
                  setShowDatePicker(true);
                }}
                style={styles.reserveButton}
              >
                <Text style={styles.reserveButtonText}>Select End Date</Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => {}} style={styles.reserveButton}>
                <Text style={styles.reserveButtonText}>
                  Confirm Reservation
                </Text>
              </Pressable>
            )}
          </View>
        )}
        {showDatePicker && (
          <DateTimePicker
            value={startDate || selectedDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
            minimumDate={new Date()}
          />
        )}
      </View>
    </View>
  );
};

export default DetailCard;
