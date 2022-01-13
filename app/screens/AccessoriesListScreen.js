import React, { useContext, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListCard from "../components/ListCard";
import { StateContext } from ".././context/StateContext";

function AccessoriesListScreen({ navigation }) {
  const { mobile } = useContext(StateContext);
  const [dataMobile] = mobile;

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataMobile}
        numColumns={2}
        keyExtractor={(item, index) => `key-${index}`}
        renderItem={({ item, index }) => (
          <ListCard
            key={index}
            price={item.price}
            oldPrice={item.oldPrice}
            productName={item.productName}
            image={item.image}
            nu={item.nu}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 10,

    paddingTop: 0,
  },
});

export default AccessoriesListScreen;
