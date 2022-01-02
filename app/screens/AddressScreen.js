import React from 'react';
import { StyleSheet, View} from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import { AppForm, AppFormField,SubmitButton ,ErrorMessage } from "../components/forms";
import * as Yup from "yup";
import { ScrollView } from 'react-native';

const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

const validationSchema = Yup.object().shape({
  name:Yup.string().required().label('Name'),
  phone: Yup.string().matches(phoneRegex, "Invalid phone").required("Phone is required").required(),
  email:Yup.string().required().email().label("Email"),
  pinCode:Yup.string().required().label("Pin Code").matches(/^[0-9]+$/, "Must be only digits")
  .min(6, 'Must be exactly 6 digits')
  .max(6, 'Must be exactly 6 digits'),
  city:Yup.string().required().label('City'),
  state:Yup.string().required().label('State'),
  address:Yup.string().required().label('Address'),
})

   

function AddressScreen({navigation}) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       <AppForm
          initialValues={{name:'', email:'',phone:'',pinCode:'',city:'',state:'',address:''}}
          onSubmit={(values)=>console.log(values)}
          validationSchema={validationSchema}
       >
        <View >
           <AppText style={{fontWeight:'bold'}}>
              CONTACT DETAILS
           </AppText>
        </View>
           <AppFormField
              autoCapitalize = 'none'
              name='name'
              autoCorrect={false}
              placeholder='Name*'
              textContextType='name'
           />
           <AppFormField 
              autoCapitalize = 'none'
              name='email'
              autoCorrect={false}
              placeholder='Email*'
              textContextType='email'
           />
           <AppFormField 
              autoCapitalize = 'none'
              name='phone'
              autoCorrect={false}
              placeholder='Mobile No*'
           />
           <View>
            <AppText style={{fontWeight:'bold'}}>
                ADDRESS
            </AppText>
           </View>
           <AppFormField 
              autoCapitalize = 'none'
              name='pinCode'
              width='60%'
              placeholder='Pin Code*'
           />
            <AppFormField 
            autoCapitalize = 'none'
            name='city'
            placeholder='City/District*'
            width='60%'
           />
           <AppFormField 
              autoCapitalize = 'none'
              name='state'
              width='60%'
              placeholder='State*'
           />
            <AppFormField 
              autoCapitalize = 'none'
              name='address'
              numberOfLines={3}
                maxLength={255}
                multiline
              placeholder='Address*'
           />
       
           <SubmitButton 
               title='Add Address' 
                color='secondary' 
            />
       </AppForm>
    </ScrollView>
   );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginVertical:5
    }
});

export default AddressScreen;