import React from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator
        screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#FFF000' },
            headerBlurEffect: "dark",
            animation: "flip",
            presentation: "fullScreenModal"
        }}
    >
        <Stack.Screen name='Welcome' component={WelcomeScreen} 
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
   );
}

const styles = StyleSheet.create({
  container:{}
});

export default AuthNavigator;