import React , {memo} from 'react';
import { StyleSheet, View,Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';

function BannerCard({onPress,images,title,...otherProps}) {
  return (
   <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container} {...otherProps}>
            <View style={styles.containerV} {...otherProps} >
                <Image 
                style={styles.image}
                source={{ uri:images }} 
                />
            </View>
            <AppText style={{ textAlign: 'center',fontWeight:'bold'}}>{title}</AppText>
        </View>
   </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
    container:{
        width:150,
        alignItems:'center',
        marginVertical:10,
        justifyContent:'center',
        height:200,
        marginRight:10,
        marginLeft:10
    },
      containerV:{
        width:150,
        alignItems:'center',
        marginVertical:5,
        justifyContent:'center',
        borderRadius:15,
        height:170,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
});

export default  memo(BannerCard);