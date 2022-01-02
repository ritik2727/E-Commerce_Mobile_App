import React from 'react';
import { StyleSheet, View ,Image} from 'react-native';
import AppText from './AppText';
import { Button } from 'react-native-paper';



function CartCard({title,url,price,save,size}) {
  return (
   <View style={{marginBottom:10}} >
    <View style={styles.container}>
      <View style={styles.containerA}>
        <View style={{width:'70%'}}>
            <AppText numberOfLines={1} style={{fontSize:15}}>
              {title}
            </AppText>
            <AppText style={{fontWeight:'bold'}}>
                {price}
            </AppText>
            <AppText style={{color:'green'}}>
                you saved {save}
            </AppText>
            <AppText>
                Size : {size}
            </AppText>
        </View>
        <View style={{width:'25%'}}>
          <Image 
            style={{width:100,height:100}}
            source={{ uri:url}} 
            />
        </View>
      </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{width:'40%', backgroundColor: '#fff',marginRight:2}} >
      <Button mode='text' color='grey' onPress={()=>console.log('yo')}>
        REmOve
      </Button>
    </View>
    <View style={{width:'60%', backgroundColor: '#fff'}}>
      <Button mode='text'  color='grey' onPress={()=>console.log('yo')}>
        Move to wishlist
      </Button>
    </View>
    </View>
   </View>
   );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    padding:15, 
    marginBottom: 2, 
    height: 120 
  },
  containerA:{
    flexDirection: 'row',
    alignItems:'center',
    flexGrow: 1,
    flexShrink: 1,
    borderRadius: 20 ,
    justifyContent:'space-between'
  }
});

export default CartCard;