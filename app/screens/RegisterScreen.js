import React from "react";
import { StyleSheet, View ,alert } from "react-native";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import * as Yup from "yup";
import { auth ,database } from "../../Firebase";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string().required().min(6).label("Confirm Password"),
});

function RegisterScreen({navigation}) {
  const handleSubmit = async ({ email, password, name,confirmPassword }) => {
    // e.preventDefault();
    console.log(email, password, name,confirmPassword);
    if (password === confirmPassword) {
      
  auth.createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid;
          const data = {
            id: uid,
            email,
            name,
          };
          const usersRef = database.collection("users");
          usersRef
            .doc(uid)
            .set(data)
            // .then(() => {
            //   // navigation.navigate("ShoppingAdda");
            // })
            .catch((error) => {
              alert(error);
            });
        });
    } else {
      alert("Password must be same");
    }
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          name="name"
          autoCorrect={false}
          placeholder="Name"
          icon="account"
          textContextType="name"
        />
        <AppFormField
          autoCapitalize="none"
          name="email"
          autoCorrect={false}
          placeholder="Email"
          icon="email"
          textContextType="email"
        />
        <AppFormField
          autoCapitalize="none"
          name="password"
          secureTextEntry
          icon="lock"
          placeholder="Password"
          textContextType="password"
        />
        <AppFormField
          autoCapitalize="none"
          name="confirmPassword"
          secureTextEntry
          icon="lock"
          placeholder="Password"
          textContextType="password"
        />
        <SubmitButton title="SignUp" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
