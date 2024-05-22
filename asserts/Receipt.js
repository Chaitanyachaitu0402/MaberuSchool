import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions } from 'react-native'
import { TextInput, useTheme, Button, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker'

export default function Receipt() {
    const { colors } = useTheme();
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>
                 
                    <Image source={require("./Image/School.jpg")} style={{ width: "30%", height: 99, marginStart: 5, alignSelf: 'center', margin: 6 }}></Image>

                    <View style={{ width: '94%', height: 38, backgroundColor: colors.bg, alignSelf: 'center', }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, alignSelf: 'center', margin: 6 }}> Receipt Details</Text>
                    </View>

                    <View style={{width:'95%',alignSelf:'center',margin:8 }}>
                        <Text style={{ fontSize: 16, color: colors.text, margin: 4 }}> Receipt number:123</Text>
                        <Text style={{ fontSize: 16, color: colors.text, margin: 4 }}> Admission number:1674</Text>
                        <Text style={{ fontSize: 16, color: colors.text, margin: 4 }}> Date:14/02.2014</Text>
                        <Text style={{ fontSize: 16, color: colors.text, margin: 4 }}> Student Name: dhanunjay</Text>
                        <Text style={{ fontSize: 16, color: colors.text, margin: 4 }}> Class :II</Text>
                        <Text style={{ fontSize: 16, color: colors.text, margin: 4 }}> Section:A</Text>
                    </View>
                    <View style={{width:'95%',alignSelf:'center',margin:8 }}>

                    <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: colors.text,  fontWeight: 'bold' }}> Type</Text>
                        <Text style={{ fontSize: 16, color: colors.text, fontWeight: 'bold' }}> Amount</Text>
                    </View>

                    <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: colors.text,  }}> Tuition Fees</Text>
                        <Text style={{ fontSize: 16, color: colors.text,  }}> Rs.1500</Text>
                    </View>
                    <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: colors.text,  }}> Transport Fees</Text>
                        <Text style={{ fontSize: 16, color: colors.text,  }}> Rs.1200</Text>
                    </View>
                    <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: colors.text,  }}> Stationary Fees</Text>
                        <Text style={{ fontSize: 16, color: colors.text,  }}> Rs.1000</Text>
                    </View>

                    </View>

                    <View style={{ width: '94%', height: 38, backgroundColor: colors.bg, alignSelf: 'center', }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, alignSelf: 'center', margin: 6 }}> Payment Details</Text>
                    </View>

                    <View style={{margin:6,width:'95%',alignSelf:'center'}}>
                        <Text style={{ fontSize: 16, color: colors.text,}}> Payment Mode: Cash</Text>
                        <Text style={{ fontSize: 16, color: colors.text,}}> Payment date: 11/03/2024</Text>
                        <Text style={{ fontSize: 16, color: colors.text,}}> Balance Amount: Rs.1000</Text>
                        <Text style={{ fontSize: 16, color: colors.bg, fontWeight:'bold',alignSelf:'flex-end' }}> Total:Rs.3000</Text>

                    </View>




                </View>

            </ScrollView>

        </SafeAreaView>

    )
}
