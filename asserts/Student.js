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

                    <View style={{ width: '90%', backgroundColor: colors.background, columnGap: 14, height: 290, alignSelf: 'center', margin: 7, borderRadius: 9 }}>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',margin:6}}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: colors.primary, margin: 5, alignSelf: 'center', justifyContent: 'center' }}onPress={()=>navigation.navigate('Studentedit')}> Edit</Text>

                    </View>

                        <Image source={require("./Image/boyy.jpg")} style={{ width: 100, height: 100, alignSelf: 'center', justifyContent: 'center', marginStart: 7, marginTop: 8 }}></Image>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>Name: Pradeep</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Class: VI</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Section: A</Text>

                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Class Teacher: Sridevi</Text>


                    </View>

                    <Card style={{ backgroundColor: colors.bg, height: 44, width: '96%', alignSelf: 'center', margin: 6 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary, marginTop: 8, alignSelf: 'center', justifyContent: 'center' }}>Parent Information</Text>

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
