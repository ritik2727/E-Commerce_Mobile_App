import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "../navigation/AppNavigator";
import MenListsScreen from "../screens/MenListsScreen";
import ListingsDetailsScreen from "../screens/ListingsDetailsScreen";
import CartScreen from "../screens/CartScreen";
import AddressScreen from "../screens/AddressScreen";
import WomenListScreen from "../screens/WomenListScreen";
import AccessoriesListScreen from "../screens/AccessoriesListScreen";
import CheckOutScreen from "../screens/CheckOutScreen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import ChatBotScreen from "../screens/ChatBotScreen";

const Stack = createNativeStackNavigator();

const Chat = () => {
  return (
    <View>
      <Text>hi there</Text>
    </View>
  );
};

function HeaderNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="ShoppingAdda"
        component={AppNavigator}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Image
              style={{ width: 160, height: 22 }}
              source={require("./../assets/headerlogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#FFB319",
            fontWeight: "bold",
          },
          headerTintColor: "black",
          headerRight: () => (
            <FontAwesome5
              name="robot"
              size={24}
              color="black"
              onPress={() => navigation.navigate("ChatBot")}
              type="material"
              size={24}
              style={{ right: 10 }}
            />
          ),
          headerMode: "screen",
        })}
      />
      <Stack.Screen
        name="ChatBot"
        component={ChatBotScreen}
        options={{
          title: "Chat Bot",
          headerTitleStyle: {fontWeight:'bold' },
          headerStyle: {
            backgroundColor: "#FFB319",
          },
        }}
      />
      <Stack.Screen
        name="MenLists"
        component={MenListsScreen}
        options={{
          title: "BESTSELLER FOR MEN",
          headerTitleStyle: { fontSize: 15 },
        }}
      />
      <Stack.Screen
        name="WomenLists"
        component={WomenListScreen}
        options={{
          title: "BESTSELLER FOR WOMEN",
          headerTitleStyle: { fontSize: 15 },
        }}
      />
      <Stack.Screen
        name="AccessoriesLists"
        component={AccessoriesListScreen}
        options={{
          title: "BESTSELLER ACCESSORIES",
          headerTitleStyle: { fontSize: 15 },
        }}
      />
      <Stack.Screen name="Checkout" component={CheckOutScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingsDetailsScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="MensList"
        component={Chat}
        options={{
          title: "Chat Bot",
          headerStyle: {
            backgroundColor: "#273469",
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HeaderNavigator;
