import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Color from "../config/Color";
import AppText from "../components/AppText.js";
import BannerCard from "../components/BannerCard";
import ProductCard from "../components/ProductCard";
import { Button } from "react-native-paper";

const bannerList = [
  {
    url: "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-buy-1-get-1-1637307128.jpg",
    title: "Buy 1 Get 1",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg",
    title: "Bestseller",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-collab-store-1637307127.jpg",
    title: "Pop Culture",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg",
    title: "New Arrivals",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/mug-thumbnail-1641810895.jpg",
    title: "Mugs",
  },
];
const ProductList = [
  {
    url: "https://images.bewakoof.com/t320/macmerise-suit-up-captain-marvel-sleek-case-for-oneplus-9r-398543-1631018444-1.jpg",
    title: "₹499",
  },
  {
    url: "https://images.bewakoof.com/t540/flash-logo-oppo-f11-pro-mobile-cover-bml-oppo-f11-pro-mobile-covers-255631-1577273880.jpg",
    title: "₹899",
  },
  {
    url: "https://images.bewakoof.com/t320/macmerise-marvel-comics-collection-sleek-case-for-oneplus-7t-397474-1632481305-1.jpg",
    title: "₹449",
  },
  {
    url: "https://images.bewakoof.com/t320/macmerise-kawaii-art-marvel-comics-sleek-case-for-oneplus-7-397393-1632483819-1.jpg",
    title: "₹699",
  },
  {
    url: "https://images.bewakoof.com/t320/macmerise-marvel-iconic-mashup-sleek-case-for-oneplus-7-397283-1632481124-1.jpg",
    title: "₹329",
  },
  {
    url: "https://images.bewakoof.com/t320/marvel-comics-oppo-a5-2020-mobile-cover-avl-oppo-a5-2020-mobile-covers-281384-1598458831.jpg",
    title: "₹239",
  },
];

function AccessoriesScreen({ navigation }) {
  const [images, setImages] = useState([
    "https://images.bewakoof.com/uploads/grid/app/ByeBye21Sale-Static-common-1640368542.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1-x-1-banner-mobile-cover-1638935683.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1-x-1-banner-headphone-1638959400.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1-x-1-banner-TOD-boat-1639732401.jpg",
  ]);
  return (
    <ScrollView
    style={{ backgroundColor: Color.white }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <SliderBox
        images={images}
        onCurrentImagePressed={() => navigation.navigate("AccessoriesLists")
        }
        sliderBoxHeight={400}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.containerS}
      >
        {bannerList.map((item, id) => (
          <BannerCard key={id} title={item.title} images={item.url} onPress={() => navigation.navigate("AccessoriesLists")} />
        ))}
      </ScrollView>
      <Image
        style={styles.banner4}
        source={require("../assets/banner4.jpeg")}
      />
      <Image
        style={styles.banner4}
        source={require("../assets/banner5.jpeg")}
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
      <AppText style={{ textAlign: "center", fontWeight: "bold" }}>
        New Arrivals For MEN
      </AppText>
      <View style={styles.containerC}>
        {ProductList.map((item, index) => (
          <ProductCard key={index} title={item.title} images={item.url} onPress={() => navigation.navigate("AccessoriesLists")}/>
        ))}
      </View>
      <Button
        color={Color.secondary}
        mode="text"
        onPress={() => navigation.navigate("AccessoriesLists")}
      >
        VIEW ALL
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  containerS: {
    flexDirection: "row",
    marginBottom: 20,
  },
  containerC: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  banner1: {
    width: "100%",
    height: 450,
    marginBottom: 10,
  },
  banner2: {
    width: "100%",
    height: 100,
    marginBottom: 5,
  },
  banner4: {
    width: "100%",
    height: 250,
  },
});

export default AccessoriesScreen;
