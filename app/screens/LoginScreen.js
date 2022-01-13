import React, { useState } from "react";
import { StyleSheet, ToastAndroid, Alert } from "react-native";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import { authentication } from "../../Firebase";
import { TextInput } from "react-native-paper";

import { signInWithEmailAndPassword } from "firebase/auth";
import Color from "../config/Color";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const [icon, setIcon] = useState("eye-off");
  const [hidePassword, setHidePassword] = useState(true);

  const changeIcon = () => {
    icon !== "eye"
      ? (setIcon("eye"), setHidePassword(false))
      : (setIcon("eye-off"), setHidePassword(true));
  };

  const handleSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        ToastAndroid.show("Logged In", ToastAndroid.SHORT);
        // ...
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <Screen style={styles.container}>
      {/* <Image style={styles.logo} source={require("../assets/logo2.png")} /> */}

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContextType="email Address"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          secureTextEntry={hidePassword}
          right={
            <TextInput.Icon
              color={Color.medium}
              name={icon}
              onPress={() => changeIcon()}
            />
          }
          placeholder="Password"
          textContextType="password"
        />
        <SubmitButton title="Login" color="secondary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Color.white,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
