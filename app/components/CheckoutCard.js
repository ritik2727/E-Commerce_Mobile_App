import React, { useContext } from "react";
import { StyleSheet, View, Image ,ToastAndroid, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import { Button } from "react-native-paper";
import { StateContext } from "../context/StateContext";
import { database } from "../../Firebase";
import { doc, deleteDoc } from "firebase/firestore";
import {  setDoc,collection } from "firebase/firestore"; 
import moment from 'moment';

function CheckoutCard({ productName, image, price, size, id ,oldPrice ,onPress,nu}) {
  const { cart, carttotal, userdata, oldPTotal, cartsave ,wish,addr} =
    useContext(StateContext);
  const [dataCart, setDataCart] = cart;
 
  const [dataWishlist,setDataWishList] = wish;
  const [cartSave, setCartSave] = cartsave;
  const [cartTotal, setCartTotal] = carttotal;
  const [oldPriceCartTotal, setOldPriceCartTotal] = oldPTotal;
  const [user, setUser] = userdata;
  const ide = user;

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={styles.container}>
        <View style={styles.containerA}>
          <View style={{ width: "70%" }}>
            <AppText numberOfLines={1} style={{ fontSize: 15 }}>
              {productName}
            </AppText>
            {/* <AppText style={{ fontWeight: "bold" }}>
              ₹{price}
              <AppText >{oldPrice}</AppText>
            </AppText> */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <AppText
                  style={{
                    marginRight: 6,
                    // fontSize: 14,
                    fontWeight: "bold",
                  }}
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
            </View>
            <AppText style={{ color: "green" }}>you saved ₹{oldPrice - price}!</AppText>
            {nu === 'yes' && size && <AppText>Size : {size} </AppText>}
          </View>
          <View style={{ width: "25%" }}>
            <TouchableWithoutFeedback onPress={onPress} >
            <Image style={{ width: 100, height: 100 }} source={{ uri: image }} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 2,
    height: 120,
  },
  containerA: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    borderRadius: 20,
    justifyContent: "space-between",
  },
});

export default CheckoutCard;
