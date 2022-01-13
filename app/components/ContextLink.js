import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import Color from "../config/Color";

function ContextLink(props) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View style={{ width: "93%", height: 1, backgroundColor: "#c9c9c9" }} />
      </View>
      <AppText style={{ fontSize: 13, marginTop: 20 }}>
        You could try one of these categories:
      </AppText>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            marginTop: 20,
          }}
        >
          <View style={{ width: "30%", textAlign: "center" }}>
            <AppText>Men</AppText>
          </View>
          <View style={{ width: "30%", Align: "center" }}>
            <AppText
              style={{
                color: Color.secondary,
                textDecorationLine: "underline",
              }}
              onPress={() => props.navigation.navigate("MenLists")}
            >
              Topwear
            </AppText>
          </View>
          <View style={{ width: "30%", textAlign: "center" }}>
            <AppText
              style={{
                color: Color.secondary,
                textDecorationLine: "underline",
              }}
              onPress={() => props.navigation.navigate("MenLists")}
            >
              Bestsellers
            </AppText>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <View style={{ width: "30%", textAlign: "center" }}>
            <AppText>Women</AppText>
          </View>
          <View style={{ width: "30%", Align: "center" }}>
            <AppText
              style={{
                color: Color.secondary,
                textDecorationLine: "underline",
              }}
              onPress={() => props.navigation.navigate("WomenLists")}
            >
              Topwear
            </AppText>
          </View>
          <View style={{ width: "30%", textAlign: "center" }}>
            <AppText
              style={{
                color: Color.secondary,
                textDecorationLine: "underline",
              }}
              onPress={() => props.navigation.navigate("WomenLists")}
            >
              Bestsellers
            </AppText>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <View style={{ width: "30%", textAlign: "center" }}>
            <AppText>Mobile Covers</AppText>
          </View>
          <View style={{ width: "30%", Align: "center" }}>
            <AppText
              style={{
                color: Color.secondary,
                textDecorationLine: "underline",
              }}
              onPress={() => props.navigation.navigate("AccessoriesLists")}
            >
              All Mobile Covers
            </AppText>
          </View>
          <View style={{ width: "30%", textAlign: "center" }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ContextLink;
