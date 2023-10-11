import { Text, SafeAreaView } from "react-native";
import React from "react";

// Components
import DetailCard from "../../../Components/Cards/DetailCard";
import { setRating } from "../../../redux/actions/ratingActions";
import styles from "./DetailStyle";

const Detail = ({ route, rating }) => {
  const { item, index } = route.params;
  const handleRatingUpdate = (newRating) => {
    setRating(newRating);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bike Details</Text>
      <DetailCard
        type={item?.type}
        brand={item?.brand}
        location={item?.location}
        rating={item?.rating}
        id={item?.id}
        index={index}
        setRatingValue={handleRatingUpdate}
        globalRating={rating}
      />
    </SafeAreaView>
  );
};

export default Detail;
