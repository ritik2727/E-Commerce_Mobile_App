import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Animated, Image, SafeAreaView } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import HeaderNavigator from "./app/navigation/HeaderNavigator";
import { StateContext } from "./app/context/StateContext";
import { useState, useContext, useEffect } from "react";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning:..."]); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs

const Main = () => {
  const { userdata } = useContext(StateContext);
  const [user, setUser] = userdata;

  const [loading, setLoading] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    setLoading(true);
    Animated.timing(animation, {
      toValue: 0,
      duration: 1100,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 2,
        duration: 1100,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(animation, {
          toValue: 1,
          duration: 1100,
          useNativeDriver: false,
        }).start();
      });
    });

    // setRandomColor(color);
    setTimeout(() => {
      setLoading(false);
    }, 3300);
  }, []);

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["rgb(25,216,255)", "rgb(224,82,99)", "rgb(179,25,255)"],
  });
  const animatedStyle = {
    backgroundColor: boxInterpolation,
  };

  if (loading) {
    return (
      <Animated.View style={{ ...styles.imgBackground, ...animatedStyle }}>
        <SafeAreaView style={styles.container}>
          <Image
            source={require("./app/assets/loading.png")}
            style={styles.logo}
          />
        </SafeAreaView>
      </Animated.View>
    );
  }
  return (
    <>
      <NavigationContainer>
        {user ? <HeaderNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 250,
  },
  container: {
    // flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    position: "absolute",
    top: 80,
    // justifyContent: 'center',
  },
});

export default Main;
