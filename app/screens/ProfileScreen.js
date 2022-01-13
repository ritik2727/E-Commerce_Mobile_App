import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AppText from '../components/AppText'
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
    const em = user.email
    setName(displayName);
    setEmail(em);
  }, [setEmail,setName]);

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
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAApVBMVEX///8EZDzb89sAVigAWSwAYjni+eHf9t672b/l/OQAYDYAXjQAXDHY8dkAWS0AVSYAUx0AVyXB3sUAVSIca0bL5s6rzLK11Lugw6mRt5zm7Olvl4LE08v2+PdLhWQudFCVsaLT3tihuayxxbpnmHrk6+dyoIJbi3KMqpqixat8p4rX4dxCfF5ckHF+oY7v8/EzdFSIsJVoknxKgGS+z8Y/flyswbU0NwCDAAANpUlEQVR4nO1dC3eiOhBeCiElIAKKj9b6qGyttrb1bt3//9MuaFvNJANRcQm23zn37Nm7vvIxmcwrM79+/eAHP/jBJ24m0/HL7LnNXJcxRozR2+z28e/gd9W/SzPcTe5v31qt0PJcRoixBSGEuZ5lhS1jNh68Vv0btcDd+8tbEFruJ0cSEOZZLeN2elP1b60WT+PnwPJyeNpjzLVa7cdJ1b+4Kjw9Gi01or4I80Lv5RvydXffPpCpD7ihMf5eCmzyX2Adw9SHfAWz7yNe728t91imtmDh6L3qVfwTTI3waKHaE6/QmFa9krNjahy//wBdlnHZ0jUZlSFVX3SFo8vVXa+zVolUbegKZhd6Mo4DVi5VGdzWfdXrOgN+jywFSWGpO+h5for0jz1HMQfW28W5QeOgYN3M802zPUwW/d68k2LeWy2SYds0fa9AIFlwWcL1+pYrVswzjeWqE1PHtm36hfQvDo07q6Vh5hMWPt9VvcLy8B7iayWuSZJe7GQkXUmQcebEvYSYOYEJZl3MsfgSoKt0zfbiOpUmGU0cZbYTrdombvgH46pXWQ7+YFuQWGwROcVM7fhaEB8Tr3BW9TpLwGsbEQdmrucKMsXzZXfWTWRLe6PaK64nxLthzWXkHMTUB19OlCB0Mbfm4fqB3GJgzSQ+TKj2xStG6CLhU9XrPQXvUtVOzOXRVG1gx0tT+hCCQdUrPh5TKVfu6NqhJ8K5HklVYX3ZkssVW0bR9cmIoqV0K9aVrQFiXjHfKgE+cigGtTRPn3BT9KwIaqjlb8JquEpN3dqFuO5UoitnYsuoevGH4u0MgT45xC9yn6te/WG4Ff3BM0mam4i5Wuul6vUfgmlLpGp9FrZI24lE57pVozTZb+EgJCSOmucgy5pTGov6MaiPm9iGPz7lijrDM6gxMnJSbzEW9jhpV82BKm49CVdX9ByiZXUyH1MiW95t1SyoQbDciRtnS3LkDsop2AjWhi0h5tyqh98jnE5WRLcrKl20zM5H8IJGPuTRq5oHFQibsNm1PyIrScmi9SlY2Wd34ZOow0acwE1o9uzPFZUtWmZ3FxWzeyb41xq41PAk9B6c3YIeTqzL4kHWu49OVeIDEGn9T8R7YLqztb23oAZ8+idhX7CyR7EGu9zSPFN9B2MNXmN/QfaiRNHiBSt7FFBbhnrne17A7/06rj7XAw+tE2Begzg+7QDB9bT2EW+AdncT8PDtRWByOOh8ZPvvbA7BZ6dqKwGCG+gc2rrlfywx4HKueGGwG4dYEyxp2PtZC+HDr66A3+NqbD5AwYKbUJCEXlE5EWDL6wnSBDYiME4CfWu3gGCxZe7S6NXw4MPRHF7l8g9dKn1F6xUKVpy3LjuSBDkLwUhk531qDPgPdD0QH/mj0FvkLcvpNY+KBpJm7la0V+BHPFbNCgJgY7G8DeMsjnZ9mos8tih4BFbVrMgx5Y13r58jWE6iUI6LwYIGCSdafV60LD0jzG/cMyXGubgqYos3H5iWqZ7ffJIiT7CchxMNef8BZ4sC0dIyHA/Uu4trLHuVYzJkF6O9rAzeZTkHgLnCHwXlDRgtVTwfBnfxo9CGluMOzDfby0V/3un0+oul0cRt1mYH/3zeW9cxQT3hz0LcxqIxoq+I7yadhvNZCZ9VdM8TH6u4tWJUdEGMMdQvCMjvQiZ6uV8PfiRdPpHV41KbztfyIj8yQkULmPEa7kM+QuqjXqG9gFGnraCsr+X1uNTprqWiiNu8tMOdH/rtQ3AWuuhCrmUKi7E5XrpMnTmT6a4mjGftHgj/8pZu5yEfTnYfMLKkm9AfNnLdY3q1lAgXvhFBrF+78PKMe5hWF1m83ZdYWM1VfuAlhdOXCKSPmXK0y30L0+3yBX8WorvwShKDN3ErYI/lrsQ2c9FX818TVs0OjyeOLJYgy4cxgQ1XXQWu0rdei2x5mGkK0rmaXSb4y+kUr4fsQipy1VTjSpZzTr8I+54590XW36r54cDHSDGLFLptBpevLmSrJ7Dl9RG2GtxLNYuXclYWaSMK2xEKt7y8+IHwdphzVv0mzXLTXEAZU1m0Cw0A0j7oCo8tkI0du0BpaRVc5vU7tjnEKhrcrpSzLdTDoc+lxwmhVhr+nRMZH6GAQhuLHbIJMzgC3T7yVdfcd2kVLh1zz9FE5KIDyTIbh3ElqSxBnVDuhd64aob2wB2GmNYVCo5wpwiF8mfwGt79r2qG9vBnf3ewpcrvT9HMzSvKAevh0CfDhWmIToF4LkeAPWyY/8yJeeEQCsQRmw6ES1nVDO2BsxyQw1BQWaidnwdwzKFKC9i/QdUM7XDHBbO8ufTn2yugbpoHq/cMUMW7cv8QODwtfWqP+LuFvtxQtEHNhlC4pwYH3AFCNCSI0oT6VNPwNulH2btAFgj75eR/8gArLZEQII04008jq5TP7GAqF6os+W4tAthfqSCrHCcaZXgGPFlyXQSVDSKAhWRFwMFU+rpQn8spA0vh10PL4XDzXcYCHg/iXmbpQ9a7AlmCRCDbpxBwO2MSWmuyrgFZ5KjDMD0OYQEW4rbrSpbKNhTIMo4lC3yMElk66SwFBS+Qxc4rWQ1dT0MV00E8xc6rs7Q1HZSM0n97GkKjVJ8MvpK7I9hZh4WUdywAyUJ2vbbujpIj7QDL+6igg8SC96S6DzrSGmUsVEI00Ddkh8dJNx+j6BtqG6LhSyQRD1mIOmA5v3w4kHN51IHnVKsSrWei8PNhnUP+bRUM8JxA6h34R6NVfbdKwkKMlGK59zwIFQBIpBQkLHTK3yulwhow1zA6JgYPi+GweKu+qbCpSpJVWKdwb7cYFBYeIYzrnGRVSt8Lt8kL7iNKCYctWpDTROf0/Z1KYYhYF9I8NP4nFjsglSE6F4aolRzZsEby4JwFzFagBZlalxwpFbPZD7Csw1IvZdt8QE8oLVFK6Gp1GMLKbsSTEbQz7JFRABoLpc7IGQFUlma13WoFuMJ5CLqvFECsocesD70LcNVKu6mwjQ6pk3SWQkWqjzjjepd2K14asMUGnFbujed9rhYC09htWXDuandpQO06ikS0DFONLWch1sGjgsWfJJqpLOGiE8Oq+YUS2nTJiUInfdmtatLGvkXzi058iRZavSg0IsrgrRsFap421pKLd1j3Fu2v0MHLmUj1n1iMtnm138sd/uF0ZHfo0GI48B0aXs4E137REsiG9KaltcZnpWQTK6TvwTIe+l/7Vb1QLjYy3IAgo2WoEz/Im2yhF1nghXJSNTMSqLYqcJbyVnbMHPUb3HwnSm3amTXlL3fRkAWtQTca0H0aj4NSyYm4lQGvuV50YjubRWc7TqPbX/oW0qwAv8gC+6to2QRDub2KxMXbvcvNphyuh8P1yM2dbOijnQpA5x6tqrp3AI17fFy0JPcsufVtkPsSPMhak8Y9v2DlB2oN5PQMUUNOvxAKm5VWzQoC2GwM7xdzIlu5vVVqoN4zCG3s8NIPuyvvA6ICknerujZt7NQaJH50momOnTVDSGSjrTfr0yBRbL0pidQ0omgzKyzqHseVYXQ3b08hOgmC66lx602xqatAlp00s0Ff6X/SljQq8LIPSD/BlIRJgbhqLFii1hLaBZc6bcCCUYd6tQsWGlE3wXpKnWMBI/A1a0Qta3HOLafcCSkWFymldWtxXtA8v+QBKXyo1IbzybQLJwvIG8tQ+uid/SC8k9RuLEPuwI/Shzrteet2v4YDP2SjZOiZBGuvG2o9R8lIhhT5H8Uy55gW9uGtS4YUuVXzoIQBnNdHvE3wqSgycxS23jqNhSdUl7G/8sFqknqhUtjacCV0y63HJswgHdlHZY3oSiBrYUuG0NXgJPwEdKg3bIklNOXAbIhypbUDDSEZM0ok7f5KAVuKwZ46jRlNfUQxlVrqmDCOLeH/1GuA7a9fz2fjphh1G40MC0X+JTQsBCnCq1URWzUc5y6bj7xdi2+WBKRTvJ4Z6CIILvWGq3XcKETmwBS/KpYauXVwn2UQxv5uJaufW4ulCOr0pZJVFy9HhJQtwx91T6WLOt2RtGCivlwhO9Eg5jBWKCPFqbLjoTxHW9c9uMVTKF0UayZH05VSlTSlsR6i2+WAQ3EjnaiQ0SWv9CukyomWcqoMxmrkEMpxN0J8QmauO8I4lCKhsjtrbDKpN9I8l6OEGUyPfW0bnywiR5UvajvRgmFjeIxQt2sUR2IcoMa8a7ZXKnxlTK3aJu5wBuOqV1kWJlhlaCZerkmSXuzY8rKYrOjGduJeQkwX95+YVetjkMfdH2wrbtfqmcZy1YlpVnq7m+ableHSuLNaGmb+oNvwzyWoqx3ug4LMDvOy0tthslj1e/POfN7rrxbJsG3mluFu3xlon3k+FDdvucK1BdkM7NuO7NsM7VOIXFhvtbcYJLhvnSEg6LYuTqy2uJu1So5xkWBWw+CVIiZvcvfnSKrC0QUdghK8G2VFUIllvFe9mrNjapQhXSQ0apXuOhrvo/DEChEWjr4HVRkms0Co5FAXKi+YXbaugngdG+FRloQbGuPLPQFRTF688DD5IukbXr6XUO1h8thuWTkO8j5RrtVqP35bpra4md4aLcvLG0dOmGe1jNvpJbo1h+N1MJ4ZQWhZG3fwgzaycRQtKwza/40H31BN5eL34O/j7ex5RKwwhUVGz7OX8d9BLRPMP/jBD86E/wFA+CSNaKoxmwAAAABJRU5ErkJggg==",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", top: 10 }}>
          Hello! {d}
        </Text>
      <AppText style={{ fontSize: 15, fontWeight: 'bold', top: 10 }}>Email: {email}</AppText>
              
        <Button
          title="logout"
          color={Color.danger}
          mode="contained"
          style={{ width: "70%", top: 30 }}
          onPress={() => {
            Signout();
          }}
        >
          <AppText style={{color:Color.white}}>SignOut</AppText>
        </Button>
      </View>
    </View>
  );
}
