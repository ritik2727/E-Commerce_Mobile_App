import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from './HomeNavigator';
import AccountNavigator from './AccountNavigator';
import CartScreen from '../screens/CartScreen';
import WishlistScreen from '../screens/WishlistScreen';
const home = () =>{
    return(
        <View>
            <Text>hi there</Text>
        </View>
    )
}
const profile = () =>{
    return(
        <View>
            <Text>profile</Text>
        </View>
    )
}
const fav = () =>{
    return(
        <View>
            <Text>whistlist</Text>
        </View>
    )
}


const Tab = createMaterialBottomTabNavigator();

function AppNavigator(props) {
  return (
   <Tab.Navigator
    initialRouteName="Shop" 
    activeColor="black" 
    inactiveColor="#8A8A8A"
    barStyle={{ backgroundColor: 'white' }} 
    labeled={true}
   >
       <Tab.Screen name='Home' component={HomeNavigator}
            options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            }}
       />
       <Tab.Screen name='fav' component={WishlistScreen} 
            options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cards-heart" color={color} size={26} />
            ),
            }}
       />
       <Tab.Screen name='Cart' component={CartScreen} 
            options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
            ),
            }}
       />
       <Tab.Screen name='Profile' component={AccountNavigator}
            options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='account' color={color} size={26} />
            ),
            }}
       />
    </Tab.Navigator>
   );
}

const styles = StyleSheet.create({
  container:{}
});

export default AppNavigator;