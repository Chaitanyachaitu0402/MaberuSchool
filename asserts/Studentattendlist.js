import React, { useState, useEffect } from 'react';

import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useTheme ,TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

const StaticTable = () => {

    const { colors } = useTheme();

    const cellStyle = (content) => {
        if (content === 'P') {
            return styles.presentCell;
        } else if (content === 'A') {
            return styles.absentCell;
        } else {
            return styles.cell;
        }
    };

    // Function to generate rows dynamically
    const generateRows = (totalRows) => {
        const rows = [];
        for (let i = 0; i < totalRows; i++) {
            rows.push(
                <View key={i} style={{ height: 30 }}>
                    <Text style={[styles.cell, styles.rowHeader]}> {i + 2}</Text>
                    <Text style={cellStyle('P')}>P</Text>
                    <Text style={cellStyle('P')}>P</Text>
                    <Text style={cellStyle('A')}>A</Text>
                    <Text style={cellStyle('P')}>P</Text>
                    <Text style={cellStyle('P')}>P</Text>
                    <Text style={cellStyle('P')}>P</Text>
                    <Text style={cellStyle('P')}>P</Text>
                    <Text style={cellStyle('P')}>P</Text>
                    <Text style={cellStyle('P')}>P</Text>
                    <Text style={cellStyle('P')}>P</Text>

                </View>
            );
        }
        return rows;
    };

    return (
            <View style={{flex:1,backgroundColor:colors.primary,height:Dimensions.get('window').height}}>

            
          
            

           
            <View style={styles.container}>
           

                <ScrollView horizontal={true}>
                    <View>
                        {/* Static column */}
                    </View>
                    <View>
                        <Text style={[styles.cell, styles.columnHeader]}>Names</Text>
                        <Text style={styles.cell}>name1ssssssssss</Text>
                        <Text style={styles.cell}>name2</Text>
                        <Text style={styles.cell}>name3</Text>
                        <Text style={styles.cell}>name4</Text>
                        <Text style={styles.cell}>name5</Text>
                        <Text style={styles.cell}>name6</Text>
                        <Text style={styles.cell}>name7</Text>
                        <Text style={styles.cell}>name8</Text>
                        <Text style={styles.cell}>name9</Text>
                        <Text style={styles.cell}>name10</Text>

                    </View>
                </ScrollView>
                <ScrollView vertical={true} horizontal={true}>
                    {/* Static row */}
                    <View style={{ height: 37 }}>
                        <Text style={[styles.cell, styles.rowHeader]}>1</Text>
                        <Text style={cellStyle('A')}>A</Text>
                        <Text style={cellStyle('P')}>P</Text>
                        <Text style={cellStyle('P')}>P</Text>
                        <Text style={cellStyle('P')}>P</Text>
                        <Text style={cellStyle('P')}>P</Text>
                        <Text style={cellStyle('P')}>P</Text>
                        <Text style={cellStyle('A')}>A</Text>
                        <Text style={cellStyle('P')}>P</Text>
                        <Text style={cellStyle('A')}>A</Text>
                        <Text style={cellStyle('P')}>P</Text>

                    </View>
                    {/* Generate additional rows */}
                    {generateRows(29)}
                </ScrollView>
            </View>
            </View>

    );
};
export default StaticTable;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '99%',
        alignSelf: 'center',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 10,color:'#ffffff',
        fontSize: 14,width:144,height:40,backgroundColor:'#192f6a'
    },
    columnHeader: {
        fontWeight: 'bold',
        borderWidth: 1,
        backgroundColor: 'green',
        fontSize: 15 ,// background color for column headers
    },
    rowHeader: {
        fontWeight: 'bold',
        borderWidth: 1,
        backgroundColor: '#192f6a',
        fontSize: 20,
        color: '#ffffff', // background color for row headers
        height: 46, // height of row
        textAlign: 'center', // center text vertically
        lineHeight: 30 // align text vertically
    },
    presentCell: {
        backgroundColor: '#ffffff',
        height: 39,
        borderColor: '#000000',
        borderWidth: 1,
        textAlign: 'center',
        color: 'green',
        fontSize: 16,
        fontWeight: '700'
    },
    absentCell: {
        backgroundColor: '#ffffff',
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        textAlign: 'center',
        color: 'red',
        fontSize: 16,
        fontWeight: '700'
    },
});
