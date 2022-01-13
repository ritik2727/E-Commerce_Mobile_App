import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AppText from "../components/AppText";
import { authentication, database } from "../../Firebase";
import { Button, Avatar } from "react-native-paper";
import { NavigationContainer, useLinkTo } from "@react-navigation/native";
import Color from "../config/Color";

export default function ProfileScreen({ navigation }) {
  const [d, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = authentication.currentUser;
    const displayName = user.displayName;
    const em = user.email;
    setName(displayName);
    setEmail(em);
    console.log(user);
  }, []);

  const Signout = () => {
    authentication.signOut();
    navigation.navigate("Welcome");
  };

  return (
    <View
      style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          elevation: 10,
          width: "80%",
          height: "93%",
          backgroundColor: "white",
          alignItems: "center",
          padding: 50,
        }}
      >
        <Avatar.Image
          size={200}
          source={{
            uri: "data:image/png;base64,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",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", top: 10 }}>
          Hello! {d}
        </Text>
        <AppText style={{ fontSize: 15, fontWeight: "bold", top: 10 }}>
          Email: {email}
        </AppText>

        <Button
          title="logout"
          color={Color.danger}
          mode="contained"
          style={{ width: "70%", top: 30 }}
          onPress={() => {
            Signout();
          }}
        >
          <AppText style={{ color: Color.white }}>SignOut</AppText>
        </Button>
      </View>
    </View>
  );
}
