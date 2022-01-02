import React from 'react';
import { TouchableOpacity,StyleSheet,Text} from 'react-native';
import { Button } from 'react-native-paper';
import Color from '../config/Color';


function AppButton({title,mode,onPress,color='primary'}) {
    return (
    <Button  style={[styles.button,{backgroundColor:Color[color]}]} mode={mode} onPress={onPress}>
        <Text style={styles.text}>
        {title} 
        </Text>
    </Button>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:Color.primary,
        borderRadius:25,
        justifyContent:'center',
        // alignItems:'center',
        // width:'100%',
        marginVertical:10
    },
    text:{
        color:Color.white,
        fontSize:18,
        fontWeight:'bold',
        textTransform:'uppercase'
    }
})

export default AppButton;