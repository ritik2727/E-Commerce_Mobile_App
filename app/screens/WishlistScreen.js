import React , {useContext} from 'react';
import { StyleSheet, View ,Image,FlatList,Text,TouchableOpacity,SafeAreaView} from 'react-native';
import AppText from '../components/AppText';
import { MaterialIcons } from '@expo/vector-icons'; 
import Color from '../config/Color';
import { Button } from 'react-native-paper';
import CartCard from '../components/CartCard';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import WishListCard from '../components/WishListCard';
import { StateContext } from '../context/StateContext';
import ContextLink from '../components/ContextLink';

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
  const { wish, wishtotal, userdata, cart } = useContext(StateContext);
  const [dataWishlist, setDataWishlist] = wish;
  const [dataCart, setDataCart] = cart;
  const [wishTotal, setWishTotal] = wishtotal;
  const [user, setUser] = userdata;
  const ide = user;
  
  if (dataWishlist.length === 0){
    return (
      <View style={styles.imgBackground}>
        <SafeAreaView style={styles.container}>
          <Image
            source={require("./../assets/wishlistempty.png")}
            style={styles.logo}
          />
          <AppText>Your Wishlist is Empty !</AppText>
          <Button
            color={Color.secondary}
            mode="outlined"
            style={{
              borderWidth: 1,
              borderColor: Color.secondary,
              marginTop: 10,
            }}
            onPress={() => navigation.navigate("Home")}
            backgroundColor={Color.black}
          >
            <AppText style={{ color: Color.secondary, fontSize: 16 }}>
              Continue Shopping
            </AppText>
          </Button>
          <ContextLink navigation={navigation}/>
        </SafeAreaView>
      </View>
    )
  }
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
            data={dataWishlist}
            numColumns={2}
            keyExtractor={(item, index) => `key-${index}` }
            renderItem={({item,index}) => (
              <WishListCard 
                size={item.size} 
                id={item.key}
                productName={item.productName}
                price={item.price} 
                nu={item.nu}
                oldPrice={item.oldPrice}
                // save={item.save} 
                image={item.image}
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
  imgBackground: {
    backgroundColor:Color.white,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 180,
  },
  container: {
    // flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    position: "absolute",
    top: 40,
    justifyContent: "center",
  },
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