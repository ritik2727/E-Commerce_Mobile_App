import React from 'react';
import { ImageBackground,View, StyleSheet, Image,Text ,SafeAreaView,Platform,StatusBar} from 'react-native';
import AppButton from '../components/AppButton';

const image = { uri: "https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" };

function WelcomeScreen({navigation}) {
  return (
   <ImageBackground blurRadius={1} source={image} style={styles.imgBackground}>
       <SafeAreaView style={styles.container}>
            <Image source={require('../assets/logo2.png')} style={styles.logo}/>
            <Text style={styles.tagline}>Bewakoof</Text>
        </SafeAreaView>
        <View style={styles.ButtonContainer}>
        <AppButton title='Login'  onPress={() => navigation.navigate("Login")}/>
        <AppButton title='Register' color='secondary'  onPress={() => navigation.navigate("Register")} />
    
        </View>
   </ImageBackground>
   );
}

const styles = StyleSheet.create({
    imgBackground:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logo:{
        width:100,
        height:100,
    },
    ButtonContainer:{
        width:'100%',
        padding:10,
    },
    tagline:{
        fontSize:25,
        fontWeight:'700',
        paddingVertical:10

    },
    container: {
        // flex: 1,
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        position:'absolute',
        top:70
        // justifyContent: 'center',
      },
    
});

export default WelcomeScreen;