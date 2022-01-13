import React, { useState } from "react";
import { StyleSheet, Alert, ScrollView,ToastAndroid } from "react-native";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import { authentication, database } from "../../Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Color from "../config/Color";
import { TextInput } from "react-native-paper";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string().required().min(6).label("Confirm Password"),
});

function RegisterScreen({ navigation }) {
  const [icon, setIcon] = useState("eye-off");
  const [iconConf, setConfIcon] = useState("eye-off");
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfPassword, setConfHidePassword] = useState(true);

  const changeIcon = () => {
    icon !== "eye"
      ? (setIcon("eye"), setHidePassword(false))
      : (setIcon("eye-off"), setHidePassword(true));
  };

  const changeConfIcon = () => {
    iconConf !== "eye"
      ? (setConfIcon("eye"), setConfHidePassword(false))
      : (setConfIcon("eye-off"), setConfHidePassword(true));
  };
  const handleSubmit = ({ email, password, name, confirmPassword }) => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then(async (result) => {
          console.log("fs", result);
          // Signed in
          await setDoc(doc(database, "users", authentication.currentUser.uid), {
            displayName: name,
            email,
          });
          await updateProfile(result.user, {
            displayName: name,
          });
          // result.user.updateProfile({ displayName: name });
          ToastAndroid.show("Logged In", ToastAndroid.SHORT);
          // ...
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    } else {
      Alert.alert("Password And Confirm must be same");
    }
  };
  return (
    <Screen style={styles.container}>
      <ScrollView
        style={{ paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
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
            secureTextEntry={hideConfPassword}
            right={
              <TextInput.Icon
                color={Color.medium}
                name={iconConf}
                onPress={() => changeConfIcon()}
              />
            }
            icon="lock"
            placeholder="Password"
            textContextType="password"
          />
          <AppFormField
            autoCapitalize="none"
            name="confirmPassword"
            secureTextEntry={hidePassword}
            right={
              <TextInput.Icon
                color={Color.medium}
                name={icon}
                onPress={() => changeIcon()}
              />
            }
            icon="lock"
            placeholder="Confirm Password"
            textContextType="password"
          />
          <SubmitButton title="SignUp" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
    // paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Color.white,
  },
});

export default RegisterScreen;
