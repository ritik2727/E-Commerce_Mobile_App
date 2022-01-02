import React,{useState ,useContext} from 'react';
import { StyleSheet, View,Platform,StatusBar ,KeyboardAvoidingView,FlatList,ScrollView} from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import Color from '../config/Color';
import { Image } from "react-native-expo-image-cache";
import { Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import SelectItem from '../components/SelectItem';
import { StateContext } from '../context/StateContext';


function ListingsDetailsScreen({route,navigation}) {
    const [selectedItem, setSelectedItem] = useState(null);
    const {  userdata, wish } = useContext(StateContext);
   const [user, setUser] = userdata;
   const [dataWishlist, setDataWishlist] = wish;
   
   

    const arr = [
        { name: "S" },
        { name: "M" },
        { name: "L" },
        { name: "XL" },
        { name: "2XL" },
        { name: "3XL" },
      ];

    const listing = route.params;

    var per = ((listing.oldPrice-listing.price)*100)/(listing.oldPrice)
    per = per.toFixed(0);
    const addToWishlist = () => {
        let q = dataWishlist.filter(a => a.productName === props.name)
        if (q.length === 0) {
           database.collection('users').doc(user).collection('wish').add({
              price: price,
              oldPrice:oldPrice,
              percentageOff:per,
              productName:title,
              image:images
           })
        }
        else {
           ToastAndroid.show("Already In WishList", ToastAndroid.SHORT)
        }
  
     }
    return (
        <Screen style={styles.screen}>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ flexGrow: 1 }} 
            >
                 <View style={styles.closeIcon} >
                    <MaterialIcons 
                        name='arrow-back' 
                        onPress={() => navigation.goBack()}  
                        size={26} 
                        color='black' 
                    />
                </View>
                <Image style={styles.image} 
                    preview={{ uri: listing.image}}
                    tint="light"
                    uri={listing.image}
                />
           <View style={styles.detailsContainer} >
               <AppText style={styles.title}>
                  {listing.productName}
               </AppText>
               <View style={styles.subtitle} >
                    <View>
                    <AppText  style={{marginRight:6, fontSize:20,fontWeight:'bold'}}>₹{listing.price}</AppText>
                    </View>
                    <View>
                    <AppText style={{marginRight:7, textDecorationLine: 'line-through',fontSize:18 }}>
                        {listing.oldPrice}
                    </AppText>
                    </View>
                    <View>
                    <AppText  style={{ fontSize:20,fontWeight:'bold',color:Color.danger}}>({per}% OFF)</AppText>
                    </View>
                </View>
                <AppText style={{fontSize:15,fontWeight:'bold'}}>
                    SELECT SIZE
                </AppText>
                <View  style={styles.containerC}> 
                    {arr.map((item,index) => (
                        <SelectItem 
                            key={index} 
                            title={item.name} 
                            checked={item.name === selectedItem} 
                            onPress={() => setSelectedItem(item.name)} 
                        />
                    ))}
                </View>
               <View style={styles.userContainer}  >
                   <Button 
                        mode='outlined'
                        onPress={addToWishlist()}
                        contentStyle={{height:50}} 
                        style={{      
                             borderWidth:1,
                            borderColor:'black'
                        }}
                        color='red'
                        
                    >
                       <MaterialIcons name='favorite-outline' size={26} color='black' />
                   </Button>
                   <Button 
                        color={Color.secondary}
                        mode='contained' 
                        contentStyle={{width:'100%',height:52}} 
                        labelStyle={{ color: "white", fontSize: 18 }}
                        onPress={()=>console.log('press')}
                   >
                       ADD To Bag
                   </Button>
               </View>
           </View>
       </ScrollView>
       </Screen>
    );
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:450
    },
    closeIcon:{
        position:'absolute',
        zIndex:1,
        top:10,
        left:20
    },
    screen:{
        backgroundColor:Color.light,
        flex:1
    },
    detailsContainer:{
        zIndex:2,
        padding:20,
        paddingBottom:5
    },
    containerC:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    title:{
        fontSize:18,
        fontWeight:'500'
    },
    subtitle:{
        color:Color.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center'
    },
    userContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20
    }
})

export default ListingsDetailsScreen;