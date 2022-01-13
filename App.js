import React from "react";
import { StyleSheet, View } from "react-native";
import { StateProvider } from "./app/context/StateContext";
import Main from "./Main";

function App(props) {
  return (
    <StateProvider>
      <Main />
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
