import React, { useContext  ,useState,useEffect} from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import AppText from "../components/AppText";
import { MaterialIcons } from "@expo/vector-icons";
import Color from "../config/Color";
import { Button } from "react-native-paper";
import CartCard from "../components/CartCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StateContext } from "../context/StateContext";
import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../../Firebase";
import CheckoutCard from "../components/CheckoutCard";
import moment from 'moment';
import {  setDoc,collection } from "firebase/firestore"; 
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { StripeProvider } from "@stripe/stripe-react-native";
import { useStripe } from "@stripe/stripe-react-native";

function CheckOutScreen({ navigation }) {
  const { cart, carttotal, userdata, oldPTotal, cartsave,addr } =
    useContext(StateContext);
    const [add] =addr;
  const [dataCart, setDataCart] = cart;
  const [cartSave, setCartSave] = cartsave;
  const [cartTotal, setCartTotal] = carttotal;
  const [oldPriceCartTotal, setOldPriceCartTotal] = oldPTotal;
  const [user, setUser] = userdata;
  const ide = user;

  const { confirmPayment, loading } = useConfirmPayment();
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [clientSecret, setClientSecret] = useState()

  
  useEffect(() => {
    initializePayment()
  })
  // const deleteHandler = async (id) => {
  //   const docRef = doc(database, "users", `${ide}`, "cart", id);
  //   await deleteDoc(docRef);
  //   then(() => {
  //     ToastAndroid.show("Item Removed From Cart", ToastAndroid.SHORT);
  //   });
  // };

  const addtoOrder =  () => {
    dataCart.map( async (item) => {
      const docRef = doc(collection(database,"users",`${ide}`,"order"))
     await setDoc(docRef,{
        price: item.price,
        productName: item.productName,
        oldPrice: item.oldPrice,
        image: item.image,
        size:item.size,
        nu:item.nu,
        date:moment().valueOf().toString()
      }).then(()=>{
        console.log('sud')
      }).catch((error)=>console.log("error"))
    });
  }

  const deleteCart = () => {
    dataCart.map(  async (item) => {
      const docRef = doc(database,"users",`${ide}`,"cart",item.key);
       await deleteDoc(docRef).then((res) => { console.log(res) })
    })
  }


  const initializePayment = async () => {
    try {
      const response = await fetch("https://desolate-tor-81663.herokuapp.com/payment", {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        }
        ,
        body: JSON.stringify({
          paymentMethod: "card",
          currency: "inr",
          amount: cartTotal * 100,
          
        })
      })
      const { client_secret } = await response.json();

      setClientSecret(client_secret)
      // console.log(clientSecret)
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Bewakoof',
      })
      if (error) {
        Alert.alert("ERROR CODE")
      }
    }
    catch (error) {
      console.log("something wriong")
      console.log(error.message)
    }
  }


  const openPaymentSheet = async () => {
    try {
      const { error } = await presentPaymentSheet({
       
        clientSecret: clientSecret
        
      })
      if (error) {
        Alert.alert(" x Payment Failed", "Your Payment Has been Failed", error.message)
      
      }
      else {
        // db.collection('users').doc(ide).collection('shipping').add(
        //   {
        //     pincode,
        //     address,
        //   }
        // )
        // setAddress();
        // setPincode();
        addtoOrder();
        deleteCart();
        navigation.navigate("OrderScreen");
        Alert.alert("Successfull !!!!", " ✔  Your Order Has been Successfully Placed");
        
     
      }
    }
    catch (error) {
      console.log(error)

    }
  }
  return (
    <StripeProvider 
    publishableKey="pk_test_51JOzfFSGs3WteDI290yrM0bhrCjRDXsZISCi8PVHG45isfw7CN09fsOooDB99yl042wgNGVE1G9p8a6sLo5MC1ZD00PovwK3x6">
    
    <View style={{ flex: 1 }}>
      {/* <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          marginBottom: 2,
        }}
      >
        <View style={[styles.centerElement, { width: 50, height: 50 }]}>
          <MaterialIcons name="shopping-bag" size={25} color="black" />
        </View>
        <View style={[styles.centerElement, { height: 50 }]}>
          <AppText style={{ fontSize: 18, fontWeight: "bold" }}>My Bag</AppText>
        </View>
      </View> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataCart}
        keyExtractor={(item, index) => `key-${index}`}
        ListFooterComponent={() => (
          <>
            {/* shpping */}
            <View style={{ paddingHorizontal: 15 }}>
              <AppText style={{fontWeight:'bold'}}>SHIPPING</AppText>
            </View>
            {add.map((d,index) =>
            <View key={index} style={styles.containerE}>
              <View style={styles.containerD}>
                <View style={{ width: "100%" }}>
                  <AppText>Name : {d.name}</AppText>
                </View>
              </View>
              <View style={styles.containerD}>
                <View style={{ width: "100%" }}>
                  <AppText>Email : {d.email}</AppText>
                </View>
              </View>
              <View style={styles.containerD}>
                <View style={{ width: "80%" }}>
                  <AppText>Phone no. : {d.phone}</AppText>
                </View>
              </View>
              <View style={styles.containerD}>
                <View style={{ width: "100%" }}>
                  <AppText >Address : {d.address}, {d.city}, {d.pinCode}, {d.state}</AppText>
                </View>
              </View>
            </View>
             ) }
             {/* price summary */}
            <View style={{ paddingHorizontal: 15 ,marginTop:10 }}>
              <AppText style={{fontWeight:'bold'}}>PRICE SUMMARY</AppText>
            </View>
            <View style={styles.containerE}>
              <View style={styles.containerD}>
                <View style={{ width: "80%" }}>
                  <AppText>Total MRP(incl of taxes)</AppText>
                </View>
                <View style={{ width: "20%" }}>
                  <AppText>₹{oldPriceCartTotal}</AppText>
                </View>
              </View>
              <View style={styles.containerD}>
                <View style={{ width: "80%" }}>
                  <AppText>Delivery Fee</AppText>
                </View>
                <View style={{ width: "20%" }}>
                  <AppText style={{ color: "green" }}>FREE</AppText>
                </View>
              </View>
              <View style={styles.containerD}>
                <View style={{ width: "80%" }}>
                  <AppText>Bag Discount</AppText>
                </View>
                <View style={{ width: "20%" }}>
                  <AppText>-₹{cartSave}</AppText>
                </View>
              </View>
              <View style={styles.containerD}>
                <View style={{ width: "80%" }}>
                  <AppText style={{ fontWeight: "bold" }}>Subtotal</AppText>
                </View>
                <View style={{ width: "20%" }}>
                  <AppText style={{ fontWeight: "bold" }}>₹{cartTotal}</AppText>
                </View>
              </View>
              <View style={styles.containerD}>
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "#DAF7A6",
                    opacity: 0.5,
                    borderRadius: 20,
                    padding: 2,
                  }}
                >
                  <AppText
                    style={{
                      color: "green",
                      fontSize: 14,
                      opacity: 1,
                      textAlign: "center",
                    }}
                  >
                    You are Saving ₹{cartSave} on this order
                  </AppText>
                </View>
              </View>
            </View>
          
          </>
        )}
        renderItem={({ item, index }) => (
          <CheckoutCard
            size={item.size}
            id={item.key}
            nu={item.nu}
            productName={item.productName}
            price={item.price}
            oldPrice={item.oldPrice}
            // save={item.save}
            onPress={()=> navigation.navigate('ListingDetails',item)}
            image={item.image}
          />
        )}
      />
      <View>
        <View style={styles.containerC}>
          <View style={{ width: "49%" }}>
            <AppText style={{ fontWeight: "bold" }}>₹{cartTotal}</AppText>
          </View>
          <View style={{ width: "49%" }}>
            <Button
              color={Color.secondary}
              labelStyle={{ color: "white", fontSize: 18 }}
              mode="contained"
              onPress={() => { openPaymentSheet(); }}
            >
              Pay
            </Button>
          </View>
        </View>
      </View>
    </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  containerC: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderTopWidth: 2,
    borderColor: "#f6f6f6",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  containerD: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 2,
  },
  containerE: {
    borderTopWidth: 2,
    backgroundColor: "#fff",
    borderColor: "#f6f6f6",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  centerElement: { justifyContent: "center", alignItems: "center" },
});

export default CheckOutScreen;
