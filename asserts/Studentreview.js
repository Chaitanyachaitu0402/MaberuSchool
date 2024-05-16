import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert,FlatList } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';

export default function Studentreview() {
    const { colors } = useTheme();

const horizentalview=[{name:'Teacher',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',date:'11-02-2024'},{name:'Teacher',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',date:'16-02-2024'},{name:'Principal',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',date:'15-06-2024'}] 
   const apperancce = (data) => {
        console.log("data:", data);
        return (
            <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8 }}>

               <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginStart: 12, }}>{data.item.name} </Text>
                <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold', marginStart: 12, }}>{data.item.date} </Text>
                </View>


                <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', marginStart: 12, marginTop: 7 }}>{data.item.description}</Text>

            </Card>


        )
    }


    return (

            <View style={{ flex: 1, backgroundColor: colors.primary, }}>
                <View style={{ width: '100%', height: 77, backgroundColor: colors.background, flexDirection: 'row', columnGap: 14 }}>
                    <Icon name='arrow-left' color={colors.primary} size={24} style={{ marginTop: 20 }}></Icon>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primary, marginTop: 23 }}>Review List</Text>
                </View>

                    <FlatList data={horizentalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>

            </View>

    )
}
