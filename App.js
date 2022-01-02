import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import HeaderNavigator from "./app/navigation/HeaderNavigator";
import AddressScreen from "./app/screens/AddressScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { StateContext, StateProvider } from "./app/context/StateContext";

import { useState, useEffect } from "react";
import { auth, database } from "./Firebase";

export default function App() {
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // if (loading) {
  //   return (
  //     <>
  //     </>
  //   );
  // }

  // useEffect(() => {
  //   const usersRef = database.collection("users");
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data();
  //           setLoading(false);
  //           setUser(userData);
  //         })
  //         .catch((error) => {
  //           setLoading(false);
  //         });
  //     } else {
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  //   const [loggedIn, setLoggedIn] = useState(false);

  //   useEffect(() => {
  //     return auth.onAuthStateChanged(setLoggedIn);
  //   }, []);

  //   if (loggedIn) {
  //     return (
  //       <StateProvider>
  //       <NavigationContainer>
  //      <HeaderNavigator />
  //       </NavigationContainer>
  //     </StateProvider>
  //     )
  //   } else {

  //   return (
  //     <StateProvider>
  //       <NavigationContainer>
  //     <AuthNavigator />
  //       </NavigationContainer>
  //     </StateProvider>
  //   );
  //   }
  // }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    });
  }, []);

  if (!loaded) {
    return <Text>not loaded</Text>;
  } else if (!loggedIn) {
    return (
      <StateProvider>
        <NavigationContainer>
       
          <AuthNavigator />
        </NavigationContainer>
      </StateProvider>
    );
  } else {
    return (
      <StateProvider>
        <NavigationContainer>
        <HeaderNavigator />
        </NavigationContainer>
      </StateProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
