import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const Rating = ({ setSelectedRating, defaultRating }) => {
  const [rating, onRatingChange] = useState(defaultRating);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImageFilled =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";
  const starImageCorner =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png";

  useEffect(() => {
    onRatingChange(defaultRating);
  }, [defaultRating]);

  const setRating = (rating) => {
    onRatingChange(rating);
    setSelectedRating(rating);
  };

  return (
    <View style={styles.ratingBar}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={key}
            onPress={() => setRating(item)}
          >
            <Image
              style={styles.imageStar}
              source={
                item <= rating
                  ? { uri: starImageFilled }
                  : { uri: starImageCorner }
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingBar: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  imageStar: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});

export default Rating;
