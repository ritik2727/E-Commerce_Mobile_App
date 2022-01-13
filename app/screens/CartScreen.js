import React, { useContext } from "react";
import { StyleSheet, View, Image, FlatList, SafeAreaView } from "react-native";
import AppText from "../components/AppText";
import { MaterialIcons } from "@expo/vector-icons";
import Color from "../config/Color";
import { Button } from "react-native-paper";
import CartCard from "../components/CartCard";
import { StateContext } from "../context/StateContext";
import ContextLink from "../components/ContextLink";

function CartScreen({ navigation }) {
  const { cart, carttotal, userdata, oldPTotal, cartsave, addr } =
    useContext(StateContext);
  const [dataCart] = cart;
  const [cartSave] = cartsave;
  const [cartTotal] = carttotal;
  const [oldPriceCartTotal] = oldPTotal;
  const [user] = userdata;
  const [add] = addr;
  const ide = user;

  if (dataCart.length === 0) {
    return (
      <View style={styles.imgBackground}>
        <SafeAreaView style={styles.container}>
          <Image
            source={require("./../assets/NottingInBag.png")}
            style={styles.logo}
          />
          <AppText>Nothing in the bag</AppText>
          <Button
            color={Color.secondary}
            mode="outlined"
            style={{
              borderWidth: 1,
              borderColor: Color.secondary,
              marginTop: 10,
            }}
            onPress={() => navigation.navigate("Home")}
            backgroundColor={Color.black}
          >
            <AppText style={{ color: Color.secondary, fontSize: 16 }}>
              Continue Shopping
            </AppText>
          </Button>
          <ContextLink navigation={navigation} />
        </SafeAreaView>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View
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
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataCart}
        keyExtractor={(item, index) => `key-${index}`}
        ListFooterComponent={() => (
          <>
            <View style={{ paddingHorizontal: 15 }}>
              <AppText>Price Summary</AppText>
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
          <CartCard
            size={item.size}
            id={item.key}
            productName={item.productName}
            price={item.price}
            oldPrice={item.oldPrice}
            // save={item.save}
            nu={item.nu}
            onPress={() => navigation.navigate("ListingDetails", item)}
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
              onPress={() => {
                add.length === 0
                  ? navigation.navigate("Address")
                  : navigation.navigate("Checkout");
              }}
            >
              Checkout
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    backgroundColor: Color.white,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 180,
  },
  container: {
    // flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    position: "absolute",
    top: 40,
    justifyContent: "center",
  },
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

export default CartScreen;
