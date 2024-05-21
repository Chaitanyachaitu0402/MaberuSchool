

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions, SafeAreaView } from 'react-native'
import { TextInput, useTheme, Button, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export default function Administration({ navigation }) {
    const { colors } = useTheme();

    // const home=()=>{
    //     navigation.navigate("DrawStacks")
    // }


    return (

        <ScrollView>

            <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }} >


                <View style={{ width: '100%', backgroundColor: colors.background, flexDirection: 'row', columnGap: 14, height: 150 }}>

                    <Image source={require("./Image/nonteach.jpg")} style={{ width: '22%', height: 90, alignSelf: 'center', justifyContent: 'center', borderRadius: 88, marginStart: 7, marginTop: 8 }} ></Image>
                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 26 }}>M.Nagoor Jyothi</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>nagoor1123@gmail.com</Text>
                    </View>

                </View>



                <View style={{ margin: 9 }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.background, margin: 10 }}>Information List</Text>

                    <View style={{ flexDirection: 'row', width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 10 }}>
                        <Card style={{ width: "30%", height: 110, marginStart: 8 }} onPress={() => navigation.navigate('Classlist')}>

                            <Icon name='book-education-outline' color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, margin: 5 }}></Icon>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', color: colors.text, }}>Add  </Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', color: colors.text, }}> Students</Text>

                        </Card>
                        <Card style={{ width: "29%", height: 110, marginStart: 13, }} onPress={() => navigation.navigate('Allteachers')}>
                            <Icon name='account-group-outline' color={colors.bg} size={40} style={{ marginTop: 7, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Add Staff</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Members</Text>

                        </Card>
                        <Card style={{ width: "30%", height: 110, marginStart: 8 }} onPress={() => navigation.navigate('Event')}>

                            <Icon name='calendar-heart' color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, margin: 5 }}></Icon>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', color: colors.text, }}>Event </Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', color: colors.text, }}> List</Text>

                        </Card>

                    </View>



                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.background, margin: 8, }}>Attendance Report</Text>

                    <View style={{ flexDirection: 'row', width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 8, marginStart: 3 }}>
                        <Card style={{ width: "29%", height: 110 }} onPress={() => navigation.navigate('Monthattendance')}>
                            <Icon name='account-check-outline' color={colors.bg} size={40} style={{ margin: 6, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>My</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>attendance </Text>

                        </Card>

                        <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => navigation.navigate('Attendancecard')}>
                            <Icon name='view-dashboard-edit-outline' color={colors.bg} size={40} style={{ margin: 5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}> Student</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Attendance </Text>
                        </Card>

                        <Card style={{ width: "29%", height: 110, marginStart: 7 }} onPress={() => navigation.navigate('Attendancecard2')}>
                            <Icon name='notebook-outline' color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, marginTop: 5 }}></Icon>
                            <View style={{ margin: 7 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>staff</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>attendance</Text>
                            </View>
                        </Card>
                    </View>

                  

                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.background, margin: 7 }}>Other Info</Text>
                    <View style={{ flexDirection: 'row', margin: 8, columnGap: 10, marginStart: 3 }}>
                        <Card style={{ width: "29%", height: 110, marginStart: 8 }} onPress={() => navigation.navigate('Feesadd')}>
                            <Icon name='cash-multiple' color={colors.bg} size={40} style={{ margin: 5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Fee </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}> Details</Text>
                        </Card>

                        <Card style={{ width: "29%", height: 110, marginStart: 6 }} onPress={() => navigation.navigate('Otherstafflist')}>
                            <Icon name='cash-multiple' color={colors.bg} size={40} style={{ margin: 5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Add</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}> Other Staff</Text>
                        </Card>


                        <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => navigation.navigate('Teacherpendingleave')}>
                            <Icon name='account-arrow-right-outline' color={colors.bg} size={40} style={{ margin: 6, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Add </Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Leave</Text>
                        </Card>

                    </View>
                </View>

            </View>


        </ScrollView>

    )
}
















