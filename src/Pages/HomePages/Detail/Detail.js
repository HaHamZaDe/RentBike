import { Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";

// Components
import DetailCard from "../../../Components/Cards/DetailCard";
import { setRating } from "../../../redux/actions/ratingActions";
import styles from "./DetailStyle";
import colors from "../../../styles/colors";

const Detail = ({ route, rating }) => {
  const { item } = route.params;
  const handleRatingUpdate = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.orange}
        translucent={true}
      />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Bike Details</Text>
        <DetailCard
          type={item?.type}
          brand={item?.brand}
          location={item?.location}
          rating={item?.rating}
          id={item?.id}
          setRatingValue={handleRatingUpdate}
          globalRating={rating}
          isReserved={item?.isReserved}
          lat={item?.lat}
          long={item?.long}
        />
      </SafeAreaView>
    </>
  );
};

export default Detail;
