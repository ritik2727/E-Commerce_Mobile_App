import React , {memo} from 'react';
import { StyleSheet, View,Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';

function ProductCard({images,title,}) {
  return (
   <TouchableWithoutFeedback>
        <View style={styles.container} >
            <View style={styles.containerV} >
                <Image 
                style={styles.image}
                source={{ uri:images }} 
                />
            </View>
            <AppText style={{ textAlign: 'center',fontSize:13,fontWeight:'bold'}}>{title}</AppText>
        </View>
   </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
    container:{
        width:'30%',
        alignItems:'center',
        marginVertical:10,
        justifyContent:'center',
        height:200,
        margin:6
        // marginRight:5,
        // marginLeft:5
    },
      containerV:{
        width:'100%',
        alignItems:'center',
        marginVertical:3,
        justifyContent:'center',
        borderRadius:15,
        height:150,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
});

export default  memo(ProductCard);