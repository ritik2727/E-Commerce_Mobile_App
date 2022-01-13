import React, { memo, useContext } from "react";
import { StyleSheet, View, Image, ToastAndroid } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import { MaterialIcons } from "@expo/vector-icons";
import Color from "../config/Color";
import { StateContext } from "../context/StateContext";
import { database } from "../../Firebase";

import { doc, deleteDoc } from "firebase/firestore";
import {  setDoc,collection } from "firebase/firestore"; 


function ListCard({ image, productName, price, oldPrice, onPress,nu }) {
  const { userdata, wish } = useContext(StateContext);
  const [user, setUser] = userdata;
  const [dataWishlist, setDataWishlist] = wish;
  const ide = user;
  var per = ((oldPrice - price) * 100) / oldPrice;
  per = per.toFixed(0);

  const addToWishlist = async () => {
    let q = dataWishlist.filter((a) => a.productName === productName);
    if (q.length === 0) {
      const docRef = doc(collection(database, "users", `${ide}`, "wish"));
      await setDoc(docRef, {
        price: price,
        oldPrice: oldPrice,
        percentageOff: per,
        productName: productName,
        image: image,
        nu:nu,
        size:'S'
      }).then(() => {
        ToastAndroid.show("Item Moved to WishList", ToastAndroid.SHORT);
      });
    } else {
      ToastAndroid.show("Already In WishList", ToastAndroid.SHORT);
    }
  };

//   const addToWishlist = () => {
//     let q = dataWishlist.filter((a) => a.productName === props.name);
//     if (q.length === 0) {
//       database.collection("users").doc(user).collection("wish").add({
//         price: price,
//         oldPrice: oldPrice,
//         percentageOff: per,
//         productName: productName,
//         image: images,
//       });
//     } else {
//       ToastAndroid.show("Already In WishList", ToastAndroid.SHORT);
//     }
//   };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.containerV}>
          <View style={styles.favIcon}>
            <MaterialIcons
              onPress={() => {
                addToWishlist();
              }}
              name="favorite-outline"
              size={24}
              color="black"
            />
          </View>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <AppText style={{ fontSize: 13, fontWeight: "bold" }}>
            BEWAkOOF
          </AppText>
          <AppText numberOfLines={1} style={{ fontSize: 13 }}>
            {productName}
          </AppText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <AppText
                style={{ marginRight: 6, fontSize: 14, fontWeight: "bold" }}
              >
                ₹{price}
              </AppText>
            </View>
            <View>
              <AppText
                style={{
                  marginRight: 7,
                  textDecorationLine: "line-through",
                  fontSize: 13,
                }}
              >
                {oldPrice}
              </AppText>
            </View>
            <View>
              <AppText
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: Color.danger,
                }}
              >
                {per}% OFF
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "49%",
    // flex:1,
    // alignItems:'center',
    // marginVertical:10,
    marginBottom: 17,
    justifyContent: "center",
    height: 300,

    marginRight: "2%",
    // marginLeft:5
  },
  containerV: {
    // width: '100%',
    alignItems: "center",
    marginVertical: 3,
    justifyContent: "center",
    height: 250,
    overflow: "hidden",
  },
  favIcon: {
    zIndex: 2,
    position: "absolute",
    top: 10,
    backgroundColor: "white",
    opacity: 0.5,
    borderRadius: 50,
    padding: 3,
    left: "77%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default memo(ListCard);
