import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "../navigation/AppNavigator";
import MenListsScreen from "../screens/MenListsScreen";
import ListingsDetailsScreen from "../screens/ListingsDetailsScreen";
import CartScreen from "../screens/CartScreen";
import AddressScreen from "../screens/AddressScreen";
import WomenListScreen from "../screens/WomenListScreen";
import AccessoriesListScreen from "../screens/AccessoriesListScreen";

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
          title: "Bewakoof",
          headerStyle: {
            backgroundColor: "#FFB319",
            fontWeight: "bold",
          },
          headerTintColor: "black",
          // headerRight: () => (

          //   <Entypo
          //     onPress={() => navigation.navigate('Chat')}
          //     name="chat"
          //     type="material"
          //     size={24}
          //     style={{ right: 10 }}
          //   />
          // ),
          headerMode: "screen",
        })}
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
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingsDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MensList"
        component={Chat}
        options={{
          title: "Chat Bot",
          headerStyle: {
            backgroundColor: "#273469",
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HeaderNavigator;
