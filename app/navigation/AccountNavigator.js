import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Color from "../config/Color";
import { StateContext } from "../context/StateContext";

import ProfileScreen from "../screens/ProfileScreen";
import OrderScreen from "../screens/OrderScreen";

const Tab = createMaterialTopTabNavigator();

const Order = () => {
  return (
    <View>
      <Text>woAccounts</Text>
    </View>
  );
};

function AccountNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 17, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "white" },
        tabBarIndicatorStyle: {
          elevation: 10,
          backgroundColor: "#FDD835",
          height: 5,
        },
      }}
    >
      <Tab.Screen name="Account" component={ProfileScreen} />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          title: "My Order",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
  indicatorStyle: {
    backgroundColor: "#de1d3e",
  },
});

export default AccountNavigator;
