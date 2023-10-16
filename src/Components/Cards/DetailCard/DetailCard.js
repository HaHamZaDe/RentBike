import React, { useCallback, useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { ref, child, update } from "firebase/database";
import { db } from "../../../../config";
import Rating from "../../Rating/Rating";
import styles from "./DetailCardStyle";
import DateTimePicker from "@react-native-community/datetimepicker";
import MapView, { Marker } from "react-native-maps";

const DetailCard = (props) => {
  const [theRating, setTheRating] = useState(props.rating);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isReserved, setIsReserved] = useState(props.isReserved);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const dispatch = useDispatch();

  const [mapRegion, setMapRegion] = useState({
    latitude: props?.lat,
    longitude: props?.long,
    latitudeDelta: 0.0052,
    longitudeDelta: 0.0051,
  });

  useEffect(() => {
    if (theRating !== undefined) {
      updateBike();
    }
  }, [theRating]);

  const setRating = (selectedRating) => {
    setTheRating(selectedRating);
  };

  const updateBike = useCallback(() => {
    const bikesRef = ref(db, "bikes/");
    const bikeIndexToUpdate = props?.id;
    const bikeToUpdateRef = child(bikesRef, bikeIndexToUpdate?.toString());

    update(bikeToUpdateRef, { rating: theRating })
      .then(() => {
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
      }
    }
  };

  const confirmReservation = useCallback(() => {
    if (startDate && endDate) {
      const bikesRef = ref(db, "bikes/");
      const bikeIndexToUpdate = props?.id;
      const bikeToUpdateRef = child(bikesRef, bikeIndexToUpdate?.toString());

      const formattedStartDate = startDate.toLocaleDateString("tr-TR");
      const formattedEndDate = endDate.toLocaleDateString("tr-TR");

      update(bikeToUpdateRef, {
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        isReserved: true,
      })
        .then(() => {
          setIsReserved(true);
          dispatch({ type: "SET_RESERVE", payload: isReserved });
        })
        .catch((error) => {
          console.error("Error:" + error.message);
        });
    }
  }, [startDate, endDate, isReserved, dispatch, props]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
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
            <View>
              <Text style={styles.reservedText}>Reserved</Text>
              {startDate && endDate && (
                <Text style={styles.reservationDates}>
                  {startDate.toLocaleDateString("tr-TR")} -{" "}
                  {endDate.toLocaleDateString("tr-TR")}
                </Text>
              )}
            </View>
          ) : (
            <View>
              {!startDate && !endDate ? (
                <Pressable
                  onPress={() => {
                    setShowDatePicker(true);
                  }}
                  style={styles.reserveButton}
                >
                  <Text style={styles.reserveButtonText}>
                    Do you want to make a reservation?
                  </Text>
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
                <Pressable
                  onPress={confirmReservation}
                  style={styles.reserveButton}
                >
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
      <MapView style={styles.map} region={mapRegion}>
        <Marker
          coordinate={mapRegion}
          title={props.brand}
          description={`${props.type} Bcycle`}
        />
      </MapView>
    </>
  );
};

export default DetailCard;
