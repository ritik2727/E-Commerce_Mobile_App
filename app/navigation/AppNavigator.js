import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import AccountNavigator from "./AccountNavigator";
import CartScreen from "../screens/CartScreen";
import WishlistScreen from "../screens/WishlistScreen";
import AppText from "../components/AppText";


const Tab = createMaterialBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#378FE7"
      inactiveColor="#c9c9c9"
      barStyle={{ backgroundColor: "white" }}
      labeled={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: (
            <AppText
              style={{ fontWeight: "bold", fontSize: 10, textAlign: "center" }}
            >
              Home
            </AppText>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="fav"
        component={WishlistScreen}
        options={{
          tabBarLabel: (
            <AppText
              style={{ fontWeight: "bold", fontSize: 10, textAlign: "center" }}
            >
              Wishlist
            </AppText>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cards-heart"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: (
            <AppText
              style={{ fontWeight: "bold", fontSize: 10, textAlign: "center" }}
            >
              Bag
            </AppText>
          ),

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountNavigator}
        options={{
          tabBarLabel: (
            <AppText
              style={{ fontWeight: "bold", fontSize: 10, textAlign: "center" }}
            >
              Profile
            </AppText>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
