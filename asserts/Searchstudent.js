import React, { useState, useEffect } from 'react';

import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useTheme ,TextInput,Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

export default function Searchstudent({navigation}) {
    const [classes, setclasses] = useState(null);

    const [section, setsections] = useState(null);

    const data = [
        { label: 'Class I', value: '1' },
        { label: 'Class II', value: '2' },
        { label: 'Class III', value: '3' },
        { label: 'Class IV', value: '4' },
        { label: 'Class V', value: '5' },
        { label: 'Class VI', value: '6' },
        { label: 'Class VII', value: '7' },
        { label: 'Class VIII', value: '8' },
        { label: 'Class IX', value: '9' },
        { label: 'Class X', value: '10' },
     
      ];
      const dataa = [
                { label: 'Section A', value: '1' },
                { label: 'Section B', value: '2' },
                { label: 'Section C', value: '3' },
                
              ];
              const { colors } = useTheme();

  return (
    
<View style={{flex:1,backgroundColor:colors.primary}}>

    <View >
    <Dropdown
        style={style.dropdown}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.selectedTextStyle}
        inputSearchStyle={style.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder="Select Class"
        searchPlaceholder="Search..."
        value={section}
        onChange={item => {
            setsections(item.value);
        }}
   
    />
</View>

<View >
    <Dropdown
        style={style.dropdown}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.selectedTextStyle}
        inputSearchStyle={style.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        data={dataa}
        search
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder="Select Section"
        searchPlaceholder="Search..."
        value={classes}
        onChange={item => {
           setclasses(item.value);
        }}
   
    />
</View>

<Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.background, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 40 }} onPress={()=>navigation.navigate('Sectiondetails')}>
        GO 
      </Button >
</View>

  )
}
const style = StyleSheet.create({
    dropdown: {

        width: '87%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.7,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 57,
        marginTop: 12,backgroundColor:'#d0d9d2'
    },
    icon: {
        margin: 10,


    },
    placeholderStyle: {
        fontSize: 16,
        height: 20,
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center', marginStart: 5,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
        marginStart: 6, fontWeight: '500'
    },
   
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});