import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";
import ContextLink from "../components/ContextLink";
import Color from "../config/Color";
import { Button } from "react-native-paper";

import { StateContext } from "../context/StateContext";
import AppText from "../components/AppText";

const OrderScreen = ({ navigation }) => {
  const { oder, addr } = useContext(StateContext);
  const [dataOrder] = oder;
  const [add] = addr;

  const sortedUsers = dataOrder.sort((a, b) => b.date - a.date);
  if (dataOrder.length === 0)
    return (
      <View style={styles.imgBackground}>
        <SafeAreaView style={styles.containerE}>
          <AppText style={{ fontSize: 15, marginBottom: 10, color: "#adadad" }}>
            Sadly, you haven't placed any orders till now.
          </AppText>
          <Image
            source={require("./../assets/noorders.png")}
            style={styles.logo}
          />

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
  return (
    <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <ScrollView>
        {dataOrder &&
          sortedUsers.map((item, i) => (
            <View key={item.key} style={{ marginBottom: 10 }}>
              <View style={styles.container}>
                <View style={styles.containerA}>
                  <View style={{ width: "25%" }}>
                    <TouchableWithoutFeedback
                      onPress={() =>
                        navigation.navigate("ListingDetails", item)
                      }
                    >
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: item.image }}
                      />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{ width: "70%" }}>
                    <AppText numberOfLines={1} style={{ fontSize: 15 }}>
                      {item.productName}
                    </AppText>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View>
                        <AppText
                          style={{
                            marginRight: 6,
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          ₹{item.price}
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
                          {item.oldPrice}
                        </AppText>
                      </View>
                    </View>
                    {/* {item.size && <AppText>Size : {item.size} </AppText>} */}
                    <AppText numberOfLines={1} style={{ fontSize: 15 }}>
                      #Order ID : {item.key}
                    </AppText>
                    <AppText numberOfLines={1} style={{ fontSize: 15 }}>
                      Date:{moment(Number(item.date)).format("MMM Do YY")}
                    </AppText>
                  </View>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

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
  containerE: {
    // flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    position: "absolute",
    top: 40,
    justifyContent: "center",
  },
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

export default OrderScreen;
