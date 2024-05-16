import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect, } from 'react';
import Swiper from 'react-native-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Parentevent({navigation}) {
    const { colors } = useTheme();
    return (
        <SafeAreaView>

        <ScrollView>

            <View style={{ flex: 1, backgroundColor: colors.primary }}>

             


                <View style={{ height: 530, width: '96%', marginTop: 3, marginStart: 8, alignSelf: 'center', right: 7 }}>

                    <Swiper style={{ height: 500, alignSelf: 'center', }} dotStyle={{ width: 14, }} activeDotColor={colors.text} activeDotStyle={{ width: 13 }} dotColor={colors.primary} showsButtons={false} loop={true} autoplayTimeout={1.0} autoplay={true}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Parenteventdetail')}>
                         <View style={{ height: 500, width: "97%", borderRadius: 100, alignSelf: 'center', }} >
                            <Image source={require("./Image/okk.jpeg")} style={{ width: "100%", height: '100%', marginStart: 5, alignSelf: 'center', position: 'absolute', }} ></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>navigation.navigate('Parenteventdetail')}>

                        <View style={{ height: 500, width: "97%", borderRadius: 100, alignSelf: 'center', }} >
                            <Image source={require("./Image/anniver.jpg")} style={{ width: "100%", height: '100%', marginStart: 5, alignSelf: 'center' }}></Image>

                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Parenteventdetail')}>

                        <View style={{ height: 500, width: "97%", borderRadius: 100, alignSelf: 'center', }} >
                            <Image source={require("./Image/inde.jpg")} style={{ width: "100%", height: '100%', marginStart: 5, }}></Image>

                        </View>
                        </TouchableOpacity>

                    </Swiper>

                </View>

            </View>
        </ScrollView>
        </SafeAreaView>

    )
}
