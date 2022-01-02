import React , {useContext,useEffect,useState} from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Color from '../config/Color';
import { StateContext } from '../context/StateContext';
import { auth } from '../../Firebase';

const Tab = createMaterialTopTabNavigator();

const Account = () =>{
    const [user, setUser] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) setUser(user)
      else setUser(null)
    }
    )
  }, [])
    return(
        <View>
            <Text>{user.email}</Text>
        </View>
    )
}
const Order= () =>{
    return(
        <View>
            <Text>woAccounts</Text>
        </View>
    )
}


function AccountNavigator(props) {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'black',
            tabBarLabelStyle: { fontSize: 17 },
            tabBarStyle: { backgroundColor:'white' },
            tabBarIndicatorStyle:{
                elevation: 10,
                backgroundColor: '#FDD835',
            }
        }}
    >
      <Tab.Screen name="Account" component={Account}  />
      <Tab.Screen name="My Order" component={Order} />
    </Tab.Navigator>
   );
}

const styles = StyleSheet.create({
  container:{},
  indicatorStyle:{
    backgroundColor:'#de1d3e'
  },
});

export default AccountNavigator;