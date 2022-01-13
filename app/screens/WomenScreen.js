import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Color from "../config/Color";
import AppText from "../components/AppText.js";
import BannerCard from "../components/BannerCard";
import ProductCard from "../components/ProductCard";
import { Button } from "react-native-paper";

const bannerList = [
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
    url: "https://images.bewakoof.com/uploads/grid/app/new-tod-thumbnail-go-nuts-1639915479.jpg",
    title: "GoNuts",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-plus-size-1637307128.jpg",
    title: "Plus Size",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg",
    title: "Last Size Left",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-react-2-1637567115.jpg",
    title: "Sustainability",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-essentials-1637307130.jpg",
    title: "Essentials",
  },
];
const ProductList = [
  {
    url: "https://images.bewakoof.com/t540/women-s-printed-boyfriend-fit-christmas-t-shirt-443522-1640008891-1.jpg",
    title: "₹499",
  },
  {
    url: "https://images.bewakoof.com/t540/black-aop-street-wear-boyfriend-fit-t-shirt-425015-1635934562-1.jpg",
    title: "₹899",
  },
  {
    url: "https://images.bewakoof.com/t540/climbing-pocket-panda-boyfriend-t-shirt-231686-1640346487-1.jpg",
    title: "₹449",
  },
  {
    url: "https://images.bewakoof.com/t540/live-love-strip-boyfriend-t-shirt-black-327503-1638259865-1.jpg",
    title: "₹699",
  },
  {
    url: "https://images.bewakoof.com/t320/orchid-petal-women-s-hoodie-sweatshirt-454660-1640787479-1.jpg",
    title: "₹329",
  },
  {
    url: "https://images.bewakoof.com/t320/high-risk-red-tina-core-solid-hoodie-aw-21-women-s-tina-core-solid-hoodie-aw-21-plain-361460-1630480993-1.jpg",
    title: "₹239",
  },
];

function WomenScreen({ navigation }) {
  const [images, setImages] = useState([
    "https://images.bewakoof.com/uploads/grid/app/DOTD-IS-BACK-homepage-banner-13thjan-W-1642063826.jpg",
    "https://images.bewakoof.com/uploads/grid/app/joggers-oof-sale-1641997077.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1st-time-discount-sweater-hoodie-1641997075.jpg",
  ]);
  return (
    <ScrollView
      style={{ backgroundColor: Color.white }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("WomenLists")}
      >
        <Image
          style={styles.banner1}
          source={{
            uri: "https://images.bewakoof.com/uploads/grid/app/oof-sale-open-file-1x1-2022-revised-1641993826.jpg",
          }}
        />
      </TouchableWithoutFeedback>
      <Image
        style={styles.banner2}
        source={require("../assets/banner2.jpeg")}
      />

      <SliderBox
        images={images}
        onCurrentImagePressed={() => navigation.navigate("WomenLists")}
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
          <BannerCard
            key={id}
            title={item.title}
            images={item.url}
            onPress={() => navigation.navigate("WomenLists")}
          />
        ))}
      </ScrollView>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("WomenLists")}
      >
      <Image
        style={styles.banner4}
        source={{
          uri: "https://images.bewakoof.com/uploads/grid/app/buy-3-mid-banner-oof-1641997075.jpg",
        }}
      />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("WomenLists")}
      >
      <Image
        style={styles.banner4}
        source={{
          uri: "https://images.bewakoof.com/uploads/grid/app/b2g1-mid-banner-oof-1641997075.jpg",
        }}
      />
      </TouchableWithoutFeedback>
      <AppText style={{ textAlign: "center", fontWeight: "bold" }}>
        New Arrivals For WOMEN
      </AppText>
      <View style={styles.containerC}>
        {ProductList.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            images={item.url}
            onPress={() => navigation.navigate("WomenLists")}
          />
        ))}
      </View>
      <Button
        color={Color.secondary}
        mode="text"
        onPress={() => navigation.navigate("WomenLists")}
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
  },
  containerC: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  banner1: {
    width: "100%",
    height: 400,
    marginBottom: 10,
    marginTop: 10,
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

export default WomenScreen;
