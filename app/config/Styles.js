import { StyleSheet,Platform } from "react-native"
import Color from "./Color";

const defaultStyles = StyleSheet.create({
    text:{
    color:Color.dark,
    fontSize:18,
    fontFamily:Platform.OS === 'android' ? 'Roboto' :' Avenir'
    }
})

export default defaultStyles;