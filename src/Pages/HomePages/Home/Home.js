import React, { useEffect, useState } from "react";
import { Text, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HomeStyle";

//Components
import InfoCard from "../../../Components/Cards/InfoCard";
import Loading from "../../../Components/Loading";
import fetchInfo from "../../../Hook/fetchInfo/fetchInfo";

const Home = ({ setRating }) => {
  const [infoCards, setInfoCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const selectedRating = useSelector((state) => state.rating);

  useEffect(() => {
    fetchInfo()
      .then((data) => {
        setInfoCards(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedRating]);

  const renderInfoItem = ({ item, index }) => (
    <InfoCard
      type={item?.type}
      brand={item?.brand}
      location={item?.location}
      onSelect={() => handleInfoCardSelect(item, index)}
      rating={item?.rating}
      setRatingValue={(newRating) => {
        setRating(newRating);
        dispatch({ type: "SET_RATING", payload: newRating });
      }}
    />
  );

  const handleInfoCardSelect = (item, index) => {
    navigation.navigate("Detail", { item, index });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Bi-Rent</Text>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={infoCards}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderInfoItem}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
