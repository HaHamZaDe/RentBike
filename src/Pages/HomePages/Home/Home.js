import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  TextInput,
  View,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./HomeStyle";
import { Picker } from "@react-native-picker/picker";

// Components
import InfoCard from "../../../Components/Cards/InfoCard";
import Loading from "../../../Components/Loading";
import fetchInfo from "../../../Hook/fetchInfo/fetchInfo";
import colors from "../../../styles/colors";

const Home = () => {
  const [infoCardsData, setInfoCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("type");
  const navigation = useNavigation();
  const selectedRating = useSelector((state) => state.rating);
  const isReserved = useSelector((state) => state.isReserved);

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
        setInfoCardsData(data);
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
      isReserved={isReserved}
    />
  );

  const handleInfoCardSelect = (item, index) => {
    navigation.navigate("Detail", { item, index });
  };

  const filteredInfoCards = infoCardsData.filter((item) => {
    const filterValue = item[filterOption]?.toString().toLowerCase();
    return filterValue?.includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.orange}
        translucent={true}
      />
      <SafeAreaView style={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
              />
              <Picker
                selectedValue={filterOption}
                onValueChange={(itemValue, itemIndex) =>
                  setFilterOption(itemValue)
                }
                style={styles.filterPicker}
              >
                <Picker.Item label="Type" value="type" />
                <Picker.Item label="Brand" value="brand" />
                <Picker.Item label="Location" value="location" />
                <Picker.Item label="Rating" value="rating" />
              </Picker>
            </View>
            <FlatList
              data={filteredInfoCards}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderInfoItem}
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default Home;
