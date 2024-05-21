import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
 import { useTheme, Button, Modal, } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';

const Timetable = ({navigation}) => {
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

    const timetableData = [
        ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

        ['9:00 AM-10:00 AM', 'Maths', 'Science', 'Hindi', 'telugu', 'Telugu', 'English'],
        ['10:00 AM-11:00 AM', 'Science', 'Social', 'English', 'Maths', 'Hindi', 'telugu'],
        ['11:00 AM-12:00 PM', 'English', 'Social', 'Maths', 'Science', 'Hindi', 'Telugu'],
        ['12:00 PM-1:00 PM', 'English', 'Hindi', 'Science', 'Telugu', 'Social', 'Maths'],
        ['1:00 PM-2:00 PM', 'Telugu', 'English', 'Social', 'Maths', 'Hindi', 'Science'],
        ['2:00 PM-3:00 PM', 'Science', 'Telugu', 'Social', 'Maths', 'Hindi', 'English'],
        ['3:00 PM-4:00 PM', 'Hindi', 'Maths', 'English', 'Social', 'Science', 'Telugu'],
        ['4:00 PM-5:00 PM', 'Maths', 'Telugu', 'Science', 'English', 'Hindi', 'English'],

    ];
    
   
    return (
        <SafeAreaView>

<ScrollView>

        <View style={styles.container}>

     <View style={{width:'95%',alignSelf:'center'}}>
    <Dropdown
        style={[style.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
        placeholderStyle={[style.placeholderStyle, { color: colors.text }]}
        selectedTextStyle={[style.selectedTextStyle, { color: colors.text }]}
 
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

<View  style={{alignSelf:'center',width:'95%'}}>
    <Dropdown
        style={[style.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
        placeholderStyle={[style.placeholderStyle, { color: colors.text }]}
        selectedTextStyle={[style.selectedTextStyle, { color: colors.text }]}
 
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

<View style={{height:10}}></View>

            <ScrollView horizontal={true}>
                <View style={styles.table}>
                    {timetableData.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {row.map((cell, cellIndex) => (
                                <View key={cellIndex} style={[styles.cell, cellIndex === 0 && styles.firstCell]}>
                                    <Text style={styles.cellText}>{cell}</Text>
                                </View>
                            ))}
                            
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
        </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,flex:1,margin:9
    },
    table: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',backgroundColor:'red'
    },
    cell: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#192f6a', backgroundColor: '#FFFFFF', width: 88,
    },
    firstCell: {
        width: 99, height: 73, backgroundColor: 'pink'  // Adjust the width for the Time column
    },
    cellText: {
        textAlign: 'center', fontSize: 17, color: '#000000',height:44
    },
});
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
export default Timetable;


