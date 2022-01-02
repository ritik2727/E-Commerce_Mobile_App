import React from 'react';
import { StyleSheet, View ,Image,FlatList,Text,TouchableOpacity} from 'react-native';
import AppText from '../components/AppText';
import { MaterialIcons } from '@expo/vector-icons'; 
import Color from '../config/Color';
import { Button } from 'react-native-paper';
import CartCard from '../components/CartCard';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import WishListCard from '../components/WishListCard';

const dataList = [
  {
      url:'https://images.bewakoof.com/t320/mickey-mouse-polaroids-440234-1637922200-1.jpg',
      title:'Atlantic Deep Full Sleeve Henley T-shirt',
      price:'₹499',
      save:'₹499',
      size:'M'
  },
  {
      url:'https://images.bewakoof.com/t320/black-grey-mel-cut-n-sew-hoodie-sweatshirt-392785-1638435660-1.jpg',
      title:'Atlantic Deep Full Sleeve Henley T-shirt',
      price:'₹499',
     save:'₹499',
      size:'M'
  },
  {
    url:'https://images.bewakoof.com/t320/black-grey-mel-cut-n-sew-hoodie-sweatshirt-392785-1638435660-1.jpg',
    title:'Atlantic Deep Full Sleeve Henley T-shirt',
    price:'₹499',
   save:'₹499',
    size:'M'
},
{
  url:'https://images.bewakoof.com/t320/black-grey-mel-cut-n-sew-hoodie-sweatshirt-392785-1638435660-1.jpg',
  title:'Atlantic Deep Full Sleeve Henley T-shirt',
  price:'₹499',
 save:'₹499',
  size:'M'
},
{
  url:'https://images.bewakoof.com/t320/black-grey-mel-cut-n-sew-hoodie-sweatshirt-392785-1638435660-1.jpg',
  title:'Atlantic Deep Full Sleeve Henley T-shirt',
  price:'₹499',
 save:'₹499',
  size:'M'
},
{
  url:'https://images.bewakoof.com/t320/black-grey-mel-cut-n-sew-hoodie-sweatshirt-392785-1638435660-1.jpg',
  title:'Atlantic Deep Full Sleeve Henley T-shirt',
  price:'₹499',
 save:'₹499',
  size:'M'
},
{
  url:'https://images.bewakoof.com/t320/black-grey-mel-cut-n-sew-hoodie-sweatshirt-392785-1638435660-1.jpg',
  title:'Atlantic Deep Full Sleeve Henley T-shirt',
  price:'₹499',
 save:'₹499',
  size:'M'
},
]


function WishListScreen({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:Color.light }}>
    <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2 }}>
        <View style={[styles.centerElement, { width: 50, height: 50 }]}>
            <MaterialIcons name='favorite-border' size={25} color='black' />
        </View>
        <View style={[styles.centerElement, { height: 50 }]}>
            <AppText style={{ fontSize: 18,fontWeight:'bold' }}>WishList</AppText>
        </View>
    </View>
    <View style={{width:'100%',paddingHorizontal:5,paddingBottom:55}}>
    <FlatList 
            showsVerticalScrollIndicator={false}
            data={dataList}
            numColumns={2}
            keyExtractor={(item, index) => `key-${index}` }
            renderItem={({item,index}) => (
              <WishListCard 
                size={item.size} 
                title={item.title} 
                price={item.price} 
                save={item.save} 
                url={item.url}
                onPress={()=> navigation.navigate('ListingDetails',item)}
              />
            )}
        />
      </View>
        {/* <View>
          <View style={styles.containerC}>
            <View style={{width:'49%'}}>
              <AppText style={{fontWeight:'bold'}}>
                ₹499
              </AppText>
            </View>
          <View style={{width:'49%'}}>
            <Button 
              color={Color.secondary} 
              labelStyle={{ color: "white", fontSize: 18 }} 
              mode='contained'
            >
              Checkout
            </Button>
          </View>
          </View>
        </View> */}
    </View>
   );
}

const styles = StyleSheet.create({
  containerC:{
    backgroundColor: '#fff',
    flexDirection:'row',
    borderTopWidth: 2,
    borderColor: '#f6f6f6',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:5
  },
  containerD:{
    flexDirection:'row',
    alignItems:'center',
   
    paddingVertical:2
  },
  containerE:{
    borderTopWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#f6f6f6',
    paddingHorizontal:15,
    paddingVertical:5
  },
  centerElement: { justifyContent: 'center', alignItems: 'center' },
});

export default WishListScreen;