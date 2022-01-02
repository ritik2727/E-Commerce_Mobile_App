import React, { useState ,useRef} from 'react';
import { StyleSheet, View ,Image ,ScrollView ,TouchableWithoutFeedback,FlatList} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Color from '../config/Color';
import AppText from '../components/AppText.js';
import BannerCard from '../components/BannerCard';
import ProductCard from '../components/ProductCard';
import { Button } from 'react-native-paper';

const bannerList = [
    {
        url:'https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-buy-1-get-1-1637307128.jpg',
        title:'Buy 1 Get 1',
    },
    {
        url:'https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg',
        title:'Bestseller',
    },
    {
        url:'https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-collab-store-1637307127.jpg',
        title:'Pop Culture',
    },
    {
        url:'https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg',
        title:'New Arrivals',
    },
    {
        url:'https://images.bewakoof.com/uploads/grid/app/new-tod-thumbnail-lighting-1640070861.jpg',
        title:'Decorative Lighting',
    },
   
]
const ProductList = [
    {
        url:'https://images.bewakoof.com/t320/women-s-printed-boyfriend-fit-christmas-t-shirt-443522-1640008891-1.jpg',
        title:'₹499',
    },
    {
        url:'https://images.bewakoof.com/t320/black-grey-mel-cut-n-sew-hoodie-sweatshirt-392785-1638435660-1.jpg',
        title:'₹899',
    },
    {
        url:'https://images.bewakoof.com/t320/black-long-sleeve-henley-t-shirt-405279-1639651510-1.jpg',
        title:'₹449',
    },
    {
        url:'https://images.bewakoof.com/t320/burnt-orange-solid-flat-knit-sweater-424379-1638511341-1.jpg',
        title:'₹699',
    },
    {
        url:'https://images.bewakoof.com/t320/mickey-wink-mickebdaygt001-440226-1637922082-1.jpg',
        title:'₹329',
    },
    {
        url:'https://images.bewakoof.com/t320/tan-solid-pu-jacket-393798-1638435394-1.jpg',
        title:'₹239',
    },
]

function AccessoriesScreen({navigation}) {
   

    const [images,setImages] = useState([
        "https://images.bewakoof.com/uploads/grid/app/ByeBye21Sale-Static-common-1640368542.jpg",
        "https://images.bewakoof.com/uploads/grid/app/1-x-1-banner-mobile-cover-1638935683.jpg",
       "https://images.bewakoof.com/uploads/grid/app/1-x-1-banner-headphone-1638959400.jpg",
       "https://images.bewakoof.com/uploads/grid/app/1-x-1-banner-TOD-boat-1639732401.jpg",
    ])
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        {/* <Image 
            style={styles.banner1}
            source={{ uri: 'https://images.bewakoof.com/uploads/grid/app/ByeBye21Sale-Static-men-1640368543.jpg' }} 
        />
        <Image 
            style={styles.banner2}
            source={require('../assets/banner2.jpeg')} 
        /> */}
  
         <SliderBox 
            images={images}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            sliderBoxHeight={400}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            autoplay
            circleLoop
        />
        <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true} style={styles.containerS}>  
        {bannerList.map((item,id) => (
            <BannerCard   key={id} title={item.title} images={item.url} />
        ))}
        </ScrollView>
        <Image 
            style={styles.banner4}
            source={require('../assets/banner4.jpeg')} 
        />
        <Image 
        style={styles.banner4}
        source={require('../assets/banner5.jpeg')} 
         />
        {/* <View >
            <FlatList style={{padding:10}}
                data={ProductList}
                numColumns={3} 
                keyExtractor={(item, index) => `key-${index}` }
                ListHeaderComponent={() => (
                    <AppText style={{textAlign:'center',fontWeight:'bold'}}>New Arrivals For MEN</AppText>
                  )}
                renderItem={({item,index}) => (
                    <ProductCard 
                    key={index}
                    title={item.title}
                    images={item.url}
                    />
                )}
            />
        </View> */}
        <AppText style={{textAlign:'center',fontWeight:'bold'}}>New Arrivals For MEN</AppText>
        <View   style={styles.containerC}> 
        {ProductList.map((item,index) => (
            <ProductCard 
            key={index}
            title={item.title}
            images={item.url}
            />
        ))}
        </View>
        <Button color={Color.secondary}  mode="text"  onPress={() => navigation.navigate("AccessoriesLists")}>
            VIEW ALL
        </Button>
       
 
   </ScrollView>
   );
}

const styles = StyleSheet.create({
  container:{
   paddingBottom:20
  },
  containerS:{  
    flexDirection:'row',
    marginBottom:20,
  
},  
containerC:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'center'
},

  banner1:{
    width: '100%',
    height: 450,
    marginBottom:10
  },
  banner2:{
    
    width: '100%',
    height: 100,
    marginBottom:5
  },
  banner4:{
    
    width: '100%',
    height: 250,
  }
});

export default AccessoriesScreen;