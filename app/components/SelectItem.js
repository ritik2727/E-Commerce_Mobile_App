import React, { useState } from "react";
import { Checkbox } from 'react-native-paper';
import {Pressable} from 'react-native'; 
import AppText from "./AppText";
import { StyleSheet } from 'react-native';

const SelectItem = ({ title, checked, onPress } ) => {

  return (
    <Pressable
        mode='outlined'
        style={ //Line 5
            checked ? styles.selected : styles.unselected
          } 
      checked={checked}
      onPress={onPress}
    >
        <AppText  style={ //Line 5
            checked ? styles.selectedText : styles.unselectedText
          } > 
          {title}
          </AppText>
       
    </Pressable>
  );
};


const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  selectedText:{
      color:'white'
  },
  unselectedText:{
      color:'black'
  },
  unselected: {
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:1,
    margin: 3,
    padding: 2,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 5,
    width:'12%',
  },
  selected: {
    backgroundColor: 'black',
    margin: 3,
    padding: 2,
    justifyContent:'center',
    alignItems:'center',
    width:'11%',
    borderRadius: 5,
  },
})

export default SelectItem;