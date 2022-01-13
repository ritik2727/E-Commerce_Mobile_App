import React from 'react';
import { StyleSheet, View} from 'react-native';
import { TextInput } from 'react-native-paper';
import Color from '../config/Color';
import defaultStyles from '../config/Styles';

function AppTextInput({icon,width='100%',...otherProps}) {
  return (
    <TextInput
    mode='outlined'
    style={[defaultStyles.text,{width},styles.conatiner]}
    placeholderTextColor={Color.medium}

    theme={{
        roundness: 10,
        colors: {
             text: "#0c0c0c", primary: "#6e6969",
            underlineColor: 'transparent', background:"#f8f4f4" // Outline color here
        }
      }}
      {...otherProps}
     left={icon && <TextInput.Icon name={icon} size={25}   color={Color.medium}
    style={styles.icon}  />}

    />
   );
}

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor:Color.white,
        // padding: 1,
        marginVertical: 10,
    },
    icon:{
        marginRight:10
    },
});

export default AppTextInput;