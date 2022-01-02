import React from 'react';
import { StyleSheet, View ,Image,FlatList,Text,TouchableOpacity} from 'react-native';
import AppText from '../components/AppText';
import { MaterialIcons } from '@expo/vector-icons'; 
import Color from '../config/Color';
import { Button } from 'react-native-paper';
import CartCard from '../components/CartCard';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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


function CartScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2 }}>
        <View style={[styles.centerElement, { width: 50, height: 50 }]}>
            <MaterialIcons name='shopping-bag' size={25} color='black' />
        </View>
        <View style={[styles.centerElement, { height: 50 }]}>
            <AppText style={{ fontSize: 18,fontWeight:'bold' }}>My Bag</AppText>
        </View>
    </View>
    <FlatList 
            showsVerticalScrollIndicator={false}
            data={dataList}
            keyExtractor={(item, index) => `key-${index}` }
            ListFooterComponent={() => (
              <>
              <View style={{  paddingHorizontal:15}}>
                  <AppText>
                    Price Summary
                  </AppText>
                </View>
              <View style={styles.containerE}>
                <View style={styles.containerD}>
                  <View style={{width:'80%'}}>
                    <AppText>
                      Total MRP(incl of taxes)
                    </AppText>
                  </View>
                  <View style={{width:'20%'}}>
                    <AppText>
                      ₹499
                    </AppText>
                  </View>
                </View>
                <View style={styles.containerD}>
                  <View style={{width:'80%'}}>
                    <AppText>
                      Delivery Fee
                    </AppText>
                  </View>
                  <View style={{width:'20%'}}>
                    <AppText style={{color:'green'}}>
                      FREE
                    </AppText>
                  </View>
                </View>
                <View style={styles.containerD}>
                  <View style={{width:'80%'}}>
                    <AppText>
                      Bag Discount
                    </AppText>
                  </View>
                  <View style={{width:'20%'}}>
                    <AppText>
                      -₹499
                    </AppText>
                  </View>
                </View>
                <View style={styles.containerD}>
                  <View style={{width:'80%'}}>
                    <AppText style={{fontWeight:'bold'}}>
                      Subtotal
                    </AppText>
                  </View>
                  <View style={{width:'20%'}}>
                    <AppText style={{fontWeight:'bold'}}>
                      ₹499
                    </AppText>
                  </View>
                </View>
                <View style={styles.containerD}>
                  <View style={{width:'100%',backgroundColor:'#DAF7A6',opacity:0.5,borderRadius:20,padding:2}}>
                    <AppText style={{color:'green',fontSize:14,opacity:1,textAlign:'center'}}>
                      You are Saving 400 on this order
                    </AppText>
                  </View>
                </View>
              </View>
              </>
            )}
            renderItem={({item,index}) => (
              <CartCard 
                size={item.size} 
                title={item.title} 
                price={item.price} 
                save={item.save} 
                url={item.url}
              />
            )}
        />
        <View>
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
              onPress={()=> navigation.navigate('Address')}
            >
              Checkout
            </Button>
          </View>
          </View>
        </View>
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

export default CartScreen;