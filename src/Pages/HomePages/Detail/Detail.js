import { Text, View } from "react-native";
import React from "react";

//Components
import DetailCard from "../../../Components/Cards/DetailCard";
import { setRating } from "../../../redux/actions/ratingActions";

const Detail = ({ route, rating }) => {
  const { item, index } = route.params;
  const handleRatingUpdate = (newRating) => {
    setRating(newRating);
  };

  return (
    <View>
      <Text>Detail</Text>
      <DetailCard
        type={item?.type}
        brand={item?.brand}
        location={item?.location}
        rating={item?.rating}
        index={index}
        setRatingValue={handleRatingUpdate}
        globalRating={rating}
      />
    </View>
  );
};

export default Detail;
