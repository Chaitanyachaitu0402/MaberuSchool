


import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, FlatList } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';

export default function Student({navigation}) {
    const { colors } = useTheme();

    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height, }}>

                    <View style={{ width: '90%', backgroundColor: colors.b, columnGap: 14, height: 200, alignSelf: 'center', margin: 7, borderRadius: 9 }}>
                     

                    <Card style={{ width: 100, height: 100, borderRadius: 80, margin:7,alignSelf:'center' }}>
          <Icon name='account' color={colors.background} size={69} style={{ borderRadius: 18, alignSelf: 'center',margin:6 }} />
          </Card>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>Name: Pradeep</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>Role: Librarian</Text>


                    </View>

                    <Card style={{ backgroundColor: colors.bg, height: 44, width: '96%', alignSelf: 'center', margin: 6 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary, marginTop: 8, alignSelf: 'center', justifyContent: 'center' }}>Personal Information</Text>

                    </Card>
                    <View style={{ margin: 10 }}>

                   
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Phone Number: </Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> +9876543210 </Text>
                        </View>
                       
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Date of joining: </Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> 11-02-2024 </Text>
                        </View>


                        <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, margin: 5 }}> staff address: </Text>

                        <View style={{ alignSelf: 'center', justifyContent: 'center' }}>

                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, }}> Rajeev Nagar </Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, }}> Near Shivalayam Temple</Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, }}> Vizianagaram </Text>
                        </View>

                  </View>



                </View>


            </ScrollView>

        </SafeAreaView>

    )
}
