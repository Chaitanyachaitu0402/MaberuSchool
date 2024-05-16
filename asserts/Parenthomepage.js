
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions, SafeAreaView } from 'react-native'
import { TextInput, useTheme, Button, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Parenthome({navigation}){;

    const { colors } = useTheme();
   
    return (
        <SafeAreaView>
            <ScrollView>

                        <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>
                            <View style={{ width: '100%', backgroundColor: colors.background, columnGap: 14, height: 160 }}>

                                <Image source={require("./Image/boy.jpeg")} style={{ width: '26%', height: 100, alignSelf: 'center', justifyContent: 'center', borderRadius: 88, marginStart: 7, marginTop: 8 }}></Image>

                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>N.PRAVEEN</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>parent</Text>


                            </View>

                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 16, marginStart: 14, left: 6 }}>School Updates</Text>
                            <View style={{ flexDirection: 'row', marginTop: 17, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 8, marginStart: 2 }}>


                                <Card style={{ width: "45%", height: 110, marginStart: 5 }}onPress={()=>navigation.navigate('Parentevent')}>
                                    <Icon name='calendar-multiple-check' color={colors.bg} size={40} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

                                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Event List</Text>


                                </Card>

                                <Card style={{ width: "45%", height: 110, marginStart: 7 }}onPress={()=>navigation.navigate('Notifications')}>
                                    <Icon name='bell-outline' color={colors.bg} size={40} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

                                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Notification</Text>


                                </Card>

                            </View>


                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}>Academic Updates</Text>

                            <View style={{ flexDirection: 'row', marginTop: 23, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 3, marginStart: 3 }}>
                                <Card style={{ width: "29%", height: 110 }}onPress={()=>navigation.navigate('Parenthomework')}>
                                    <Icon name='note-text-outline' color={colors.bg} size={40} style={{ margin:6, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

                                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Assignments</Text>

                                </Card>

                                <Card style={{ width: "29%", height: 110, marginStart: 13 }}onPress={()=>navigation.navigate('Examtimetable')}>
                                    <Icon name='notebook-edit-outline' color={colors.bg} size={40} style={{ margin:6, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

                                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Exams</Text>


                                </Card>

                                <Card style={{ width: "29%", height: 110, marginStart: 13 }}onPress={()=>navigation.navigate('Time')}>
                                    <Icon name='timetable' color={colors.bg} size={40} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

                                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Timetable</Text>


                                </Card>

                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 23, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 3, marginStart: 3 }}>
                                <Card style={{ width: "29%", height: 110 }}onPress={()=>navigation.navigate('Fees')}>
                                    <Icon name='cash-multiple' color={colors.bg} size={40} style={{ margin:6, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

                                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Fee Details</Text>

                                </Card>

                                <Card style={{ width: "29%", height: 110, marginStart: 13 }}onPress={()=>navigation.navigate('Parentleaveadd')}>
                                    <Icon name='account-arrow-left-outline' color={colors.bg} size={40} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

                                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Add Leave</Text>


                                </Card>

                                <Card style={{ width: "29%", height: 110, marginStart: 13 }}onPress={()=>navigation.navigate('Monthattendance')}>
                                    <Icon name='account-check-outline' color={colors.bg} size={40} style={{ margin:6, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

                                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Attendance</Text>

                                </Card>

                            </View>

                        </View>
                 

            </ScrollView>
        </SafeAreaView>
    )
}
