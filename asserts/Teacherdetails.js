


import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, FlatList } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';

export default function Student({ navigation }) {
    const { colors } = useTheme();

    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>

                    <View style={{ width: '90%', backgroundColor: colors.b, columnGap: 14, height: 270, alignSelf: 'center', margin: 7, borderRadius: 9 }}>


                        <Card style={{ width: 100, height: 100, borderRadius: 80, margin: 7, alignSelf: 'center' }}>
                            <Icon name='account' color={colors.background} size={69} style={{ borderRadius: 18, alignSelf: 'center', margin: 6 }} />
                        </Card>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>Name: Pradeep</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>Role: Teacher</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>Year of service: 1</Text>


                    </View>

                    <Card style={{ backgroundColor: colors.bg, height: 44, width: '96%', alignSelf: 'center', margin: 6 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary, marginTop: 8, alignSelf: 'center', justifyContent: 'center' }}>Personal Information</Text>
                    </Card>

                    <View style={{ margin: 10 }}>

                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Father Name: </Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Dharmendra </Text>
                        </View>

                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Mother Name: </Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Neeraja </Text>
                        </View>

                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Phone Number: </Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> +9876543210 </Text>
                        </View>

                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Email: </Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> dharma@gmail.com </Text>
                        </View>


                        <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, margin: 5 }}> student address: </Text>

                        <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, }}> Indhiramma colony </Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, }}> Near Sbi Bank </Text>
                            <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, }}> Vishakapatnam </Text>
                        </View>

                    </View>



                </View>


            </ScrollView>

        </SafeAreaView>

    )
}
