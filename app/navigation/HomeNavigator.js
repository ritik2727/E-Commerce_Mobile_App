import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Color from '../config/Color';
import MenScreen from '../screens/MenScreen'
import WomenScreen from '../screens/WomenScreen';
import AccessoriesScreen from '../screens/AccessoriesScreen';

const Tab = createMaterialTopTabNavigator();

const Men = () =>{
    return(
        <View>
            <Text>hi mens</Text>
        </View>
    )
}
const Women= () =>{
    return(
        <View>
            <Text>womens</Text>
        </View>
    )
}
const Cover = () =>{
    return(
        <View>
            <Text>Cover</Text>
        </View>
    )
}

function HomeNavigator(props) {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'black',
            tabBarLabelStyle: { fontSize: 17,fontWeight:'bold' },
            tabBarStyle: { backgroundColor:'white' },
            tabBarIndicatorStyle:{
                elevation: 10,
                backgroundColor: '#FDD835',
                height:5
            }
        }}
    >
      <Tab.Screen name="Men" component={MenScreen}  />
      <Tab.Screen name="Women" component={WomenScreen} />
      <Tab.Screen name="Cover" component={AccessoriesScreen} />
    </Tab.Navigator>
   );
}

const styles = StyleSheet.create({
  container:{},
  indicatorStyle:{
    backgroundColor:'#de1d3e'
  },
});

export default HomeNavigator;