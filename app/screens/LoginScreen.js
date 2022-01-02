import React from "react";
import { StyleSheet, Image, ToastAndroid } from "react-native";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import { ErrorMessage } from "../components/forms";
import {auth , database} from '../../Firebase'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const handleSubmit =  ({ email, password }) => {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     ToastAndroid.show("Logged In", ToastAndroid.SHORT);
    //   })
    //   .catch((error) => {
    //     ToastAndroid.show(error.message, ToastAndroid.SHORT);
    //   });
    
     auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = database.collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            // const user = firestoreDocument.data();
            ToastAndroid.show("Logged In", ToastAndroid.SHORT);
          })
          .catch((error) => {
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
          });
      })
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      });
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo2.png")} />

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
          secureTextEntry
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
