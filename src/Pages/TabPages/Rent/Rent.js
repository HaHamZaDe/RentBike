import { Text, View, FlatList, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";

import { ref, onValue } from "firebase/database";
import { db } from "../../../../config";
import ReservedCard from "../../../Components/Cards/ReservedCard";
import styles from "./RentStyle";
import { useSelector } from "react-redux";
import colors from "../../../styles/colors";
import Loading from "../../../Components/Loading";

const Rent = () => {
  const [data, setData] = useState([]);
  const filteredData = data?.filter((item) => item.isReserved == true);
  const reservedBikes = useSelector((state) => state.isReserved);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bikesRef = ref(db, "bikes/");
    onValue(bikesRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, [reservedBikes]);

  const renderInfoItem = ({ item }) => (
    <ReservedCard
      brand={item?.brand}
      type={item?.type}
      startDate={item?.startDate}
      endDate={item?.endDate}
      location={item?.location}
      id={item?.id}
    />
  );

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.orange}
        translucent={true}
      />

      <View style={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {filteredData?.length > 0 ? (
              <View>
                <FlatList
                  data={filteredData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderInfoItem}
                />
              </View>
            ) : (
              <Text style={styles.warn}>Henüz bir kiralama yapmadınız!</Text>
            )}
          </>
        )}
      </View>
    </>
  );
};

export default Rent;
