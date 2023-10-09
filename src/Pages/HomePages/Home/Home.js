import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import InfoCard from "../../../Components/Cards/İnfoCard";
import fetchInfo from "../../../Hook/fetchInfo/fetchInfo";
import styles from "./HomeStyle";
import Loading from "../../../Components/Loading";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [infoCards, setInfoCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchInfo()
      .then((data) => {
        setInfoCards(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderInfoItem = ({ item }) => (
    <InfoCard
      type={item.type}
      brand={item.brand}
      location={item.location}
      onSelect={() => handleInfoCardSelect(item)}
    />
  );

  const handleInfoCardSelect = (item) => {
    navigation.navigate("Detail", { item });
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
