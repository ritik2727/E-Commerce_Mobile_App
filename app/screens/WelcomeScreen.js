import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.imgBackground}>
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/logo45.png")} style={styles.logo} />
        {/* <Text style={styles.tagline}>Bewakoof</Text> */}
      </SafeAreaView>
      <View style={styles.ButtonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    backgroundColor: "#FFB319",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
  },
  ButtonContainer: {
    width: "100%",
    padding: 10,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 10,
  },
  container: {
    // flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    position: "absolute",
    top: 70,
    // justifyContent: 'center',
  },
});

export default WelcomeScreen;
