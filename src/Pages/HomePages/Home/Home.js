import React, { useEffect, useState } from "react";
import { Text, FlatList, SafeAreaView, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./HomeStyle";
import { Picker } from "@react-native-picker/picker";

// Components
import InfoCard from "../../../Components/Cards/InfoCard";
import Loading from "../../../Components/Loading";
import fetchInfo from "../../../Hook/fetchInfo/fetchInfo";

const Home = ({ setRating }) => {
  const [infoCards, setInfoCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("type");
  const navigation = useNavigation();
  const selectedRating = useSelector((state) => state.rating);

  useEffect(() => {
    setUserSession();
  }, []);

  const setUserSession = async () => {
    await AsyncStorage.setItem("userSession", "true");
    //firebase auth().onAuthStateChanged fonksiyonunun login state'i true dönmesi gerekirken null dönüyor.Bu yüzden burada AsyncStorage ile set etmek zorunda kaldım.
  };

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

  const filteredInfoCards = infoCards.filter((item) => {
    const filterValue = item[filterOption]?.toString().toLowerCase();
    return filterValue?.includes(searchTerm.toLowerCase());
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Bi-Rent</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Picker
          selectedValue={filterOption}
          onValueChange={(itemValue, itemIndex) => setFilterOption(itemValue)}
          style={styles.filterPicker}
        >
          <Picker.Item label="Type" value="type" />
          <Picker.Item label="Brand" value="brand" />
          <Picker.Item label="Location" value="location" />
          <Picker.Item label="Rating" value="rating" />
        </Picker>
      </View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={filteredInfoCards}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderInfoItem}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
