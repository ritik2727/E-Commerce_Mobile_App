import React , {memo} from 'react';
import { StyleSheet, View,Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import Color from '../config/Color';

function WishListCard({url,title,price,oldPrice,onPress}) {
  return (
   <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container} >
            <View style={styles.containerV} >
                <View style={styles.favIcon}>
                    <Entypo name="cross" size={24} color="black" />
                </View>
                <Image 
                style={styles.image}
                source={{ uri:url }} 
                />
            </View>
            <View style={{paddingHorizontal:10,marginBottom:3}} >
                <AppText style={{ fontSize:13,fontWeight:'bold'}}>BEWAkOOF</AppText>
                <AppText numberOfLines={1}  style={{ fontSize:13}}>{title}</AppText>
                <AppText  style={{ fontSize:13}}>{price}</AppText>
            </View>
            <View style={{flex:1,borderTopWidth:1,justifyContent:'center',borderColor:'#d3d3d3'}}>
            <View style={{}}>
                <Button style color={Color.secondary} mode='text' onPress={()=>console.log('press')}>

                 MOVE TO BAG
                </Button>
            </View>
            </View>
        </View>
   </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
    container:{
        width: '49%',
        // flex:1,
       
        borderWidth:1,
        borderColor:'#d3d3d3',
        // flex:1,
        // alignItems:'center',
        marginBottom:12,
        // justifyContent:'center',
        height:356,
        marginRight:'2%',
        // marginLeft:5
        borderRadius:7,
        overflow:'hidden'
    },
      containerV:{
        alignItems:'center',
        marginBottom:3,
        // justifyContent:'center',
        height:250,
        overflow:'hidden'
    },
    favIcon:{
        zIndex:2,
        position:'absolute',
        top:10,
        backgroundColor:'white',
        opacity: 0.4,
        borderRadius:50,
        padding:2,
        left:'77%'
    },
    image:{
        width:'100%',
        height:'100%',
        
    },
});

export default  memo(WishListCard);