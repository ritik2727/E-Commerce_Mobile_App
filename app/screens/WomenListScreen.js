import React , {useContext,useEffect} from 'react';
import { StyleSheet, View,FlatList} from 'react-native';
import ProductCard from '../components/ProductCard';
import ListCard from '../components/ListCard';
import {StateContext} from '.././context/StateContext';

const ProductList = [
    {
        url:'https://images.bewakoof.com/t320/mickey-mouse-polaroids-440234-1637922200-1.jpg',
        title:'Atlantic Deep Full Sleeve Henley T-shirt',
        price:'₹499',
        oldPrice:'₹499',
    },
    {
        url:'https://images.bewakoof.com/t320/black-grey-mel-cut-n-sew-hoodie-sweatshirt-392785-1638435660-1.jpg',
        title:'Atlantic Deep Full Sleeve Henley T-shirt',
        price:'₹499',
        oldPrice:'₹499',
    },
    {
        url:'https://images.bewakoof.com/t320/black-long-sleeve-henley-t-shirt-405279-1639651510-1.jpg',
        title:'Atlantic Deep Full Sleeve Henley T-shirt',
        price:'₹499',
        oldPrice:'₹499',
    },
    {
        url:'https://images.bewakoof.com/t320/burnt-orange-solid-flat-knit-sweater-424379-1638511341-1.jpg',
        title:'Atlantic Deep Full Sleeve Henley T-shirt',
        price:'₹499',
        oldPrice:'₹499',
    },
    {
        url:'https://images.bewakoof.com/t320/mickey-wink-mickebdaygt001-440226-1637922082-1.jpg',
        title:'Atlantic Deep Full Sleeve Henley T-shirt',
        price:'₹499',
        oldPrice:'₹499',
    },
    {
        url:'https://images.bewakoof.com/t320/tan-solid-pu-jacket-393798-1638435394-1.jpg',
        title:'Atlantic Deep Full Sleeve Henley T-shirt',
        price:'₹499',
        oldPrice:'₹499',
    },
    {
        url:'https://images.bewakoof.com/t320/tan-solid-pu-jacket-393798-1638435394-1.jpg',
        title:'Atlantic Deep Full Sleeve Henley T-shirt',
        price:'₹499',
        oldPrice:'₹499',
    },
]

function WomenListScreen({navigation}) {

    const {womens} =  useContext(StateContext);
    const [dataWomen] =  womens;
  
  return (
   <View style={styles.container}>
       {/* <FlatList
            data={getListingsApi.data}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({item})=>(
                <Card  title={item.title} 
                    subTitle={"$" + item.price}
                    imageUrl={item.images[0].url}
                    onPress={()=> navigation.navigate('ListingDetails',item)}
                    thumbnailUrl={item.images[0].thumbnailUrl}
                />
            )}
        /> */}
        <FlatList 
            showsVerticalScrollIndicator={false}
            data={dataWomen}
            numColumns={2} 
            keyExtractor={(item, index) => `key-${index}` }
            renderItem={({item,index}) => (
                <ListCard 
                key={index}
                price={item.price}
                oldPrice={item.oldPrice}
                productName={item.productName}
                image={item.image}
                nu={item.nu}
                onPress={()=> navigation.navigate('ListingDetails',item)}
                />
            )}
        />
   </View>
   );
}

const styles = StyleSheet.create({
  container:{
   
    
 

    // padding: 10,
 
    paddingTop:0
  }
});

export default WomenListScreen;