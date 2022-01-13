import React, { memo, useContext } from "react";
import { StyleSheet, View, Image , ToastAndroid } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import Color from "../config/Color";
import { StateContext } from "../context/StateContext";
import { database } from "../../Firebase";
import { doc, deleteDoc } from "firebase/firestore";
import {  setDoc,collection } from "firebase/firestore"; 

function WishListCard({id, image, productName, price, oldPrice, onPress ,nu,size}) {
  const { cart, carttotal, userdata, oldPTotal, cartsave, wish } =
    useContext(StateContext);
  const [dataCart, setDataCart] = cart;
  const [dataWishlist, setDataWishList] = wish;
  const [cartSave, setCartSave] = cartsave;
  const [cartTotal, setCartTotal] = carttotal;
  const [oldPriceCartTotal, setOldPriceCartTotal] = oldPTotal;
  const [user, setUser] = userdata;
  const ide = user;

  const deleteHandler = async (id) => {
    const docRef = doc(database, "users", `${ide}`, "wish", id);
    await deleteDoc(docRef).then(() => {
        ToastAndroid.show("Item Removed From Wishlist", ToastAndroid.SHORT) 
    });
  };
  const addToCart = async (id, image, productName, price, oldPrice,nu) => {
    console.log("hfjf", productName, price, image);
    let q = dataCart.filter((a) => a.productName === productName);
    if (ide) {
      if (q.length === 0) {
        const docRef = doc(collection(database, "users", `${ide}`, "cart"));
        await setDoc(docRef, {
          productName: productName,
          image: image,
          price: price,
          oldPrice: oldPrice,
          nu:nu,
          size:size
        }).then(() => {
          deleteHandler(id);
          ToastAndroid.show("Item Moved to WishList", ToastAndroid.SHORT);
        });
      } else {
        console.log("product moved to wishlist");
      }
    } else {
      console.log("Please Login First");
    }
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.containerV}>
          <View style={styles.favIcon} >
            <Entypo name="cross" size={24} color="black" onPress={()=>deleteHandler(id)}/>
          </View>
          <TouchableWithoutFeedback onPress={onPress}>
          <Image style={styles.image} source={{ uri: image }} />
          </TouchableWithoutFeedback>
        </View>
        <View style={{ paddingHorizontal: 10, marginBottom: 3 }}>
          <AppText style={{ fontSize: 13, fontWeight: "bold" }}>
            BEWAkOOF
          </AppText>
          <AppText numberOfLines={1} style={{ fontSize: 13 }}>
            {productName}
          </AppText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <AppText
                  style={{
                    marginRight: 6,
                    fontSize: 14,
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
        </View>
        <View
          style={{
            flex: 1,
            borderTopWidth: 1,
            justifyContent: "center",
            borderColor: "#d3d3d3",
          }}
        >
          <View style={{}}>
            <Button
              style
              color={Color.secondary}
              mode="text"
              onPress={() => addToCart(id,image,productName,price,oldPrice,nu,size)}
            >
              MOVE TO BAG
            </Button>
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

    borderWidth: 1,
    borderColor: "#d3d3d3",
    // flex:1,
    // alignItems:'center',
    marginBottom: 12,
    // justifyContent:'center',
    height: 356,
    marginRight: "2%",
    // marginLeft:5
    borderRadius: 7,
    overflow: "hidden",
  },
  containerV: {
    alignItems: "center",
    marginBottom: 3,
    // justifyContent:'center',
    height: 250,
    overflow: "hidden",
  },
  favIcon: {
    zIndex: 2,
    position: "absolute",
    top: 10,
    backgroundColor: "white",
    opacity: 0.4,
    borderRadius: 50,
    padding: 2,
    left: "77%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default memo(WishListCard);
