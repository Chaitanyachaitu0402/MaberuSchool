

import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions, SafeAreaView,FlatList } from 'react-native'
import { TextInput, useTheme, Button, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function({navigation})  {

  const { colors } = useTheme();

  return (


<SafeAreaView>
    <ScrollView>


        <View style={{ flex: 1, backgroundColor: colors.primary,height:Dimensions.get('window') .height  }}>


          <View style={{ width: '100%', backgroundColor: colors.background, flexDirection: 'row', columnGap: 14, height: 150 }}>

            <Image source={require("./Image/women.jpg")} style={{ width: '22%', height: 90, alignSelf: 'center', justifyContent: 'center', borderRadius: 88, marginStart: 7, marginTop: 8 ,}}></Image>

            <View style={{ marginTop: 12 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 26 }}>L.sudharani</Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>sudha123@gmail.com</Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>year of service:3</Text>
            </View>

          </View>

          <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.text, marginTop: 16, marginStart: 8 }}>Information List</Text>

<View style={{ flexDirection: 'row', margin:8, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 10 }}>
    <Card style={{ width: "40%", height: 110, marginStart: 8 }} onPress={() => navigation.navigate('Classlist')}>
        <Icon name='school-outline' color={colors.bg} size={50} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

        <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Student List</Text>

    </Card>

</View>


          <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}>Academic Updates</Text>

<View style={{ flexDirection: 'row', margin:8, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 3, marginStart: 3 }}>
    <Card style={{ width: "29%", height: 110 }}onPress={()=>navigation.navigate('Teacherhomeworklist')}>
        <Icon name='note-text-outline' color={colors.bg} size={40} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Create</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Assignments</Text>

    </Card>

    <Card style={{ width: "29%", height: 110, marginStart: 13 }}onPress={()=>navigation.navigate('Examtimetable')}>
        <Icon name='notebook-edit-outline' color={colors.bg} size={40} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Exams</Text>


    </Card>

    <Card style={{ width: "29%", height: 110, marginStart: 13 }}onPress={()=>navigation.navigate('Time')}>
        <Icon name='timetable' color={colors.bg} size={40} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Timetable</Text>


    </Card>

</View>

<View style={{ flexDirection: 'row', marginTop: 23, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 3, marginStart: 3 }}>
    <Card style={{ width: "29%", height: 110 }}onPress={()=>navigation.navigate('Feesadd')}>
        <Icon name='cash-multiple' color={colors.bg} size={40} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Fee </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}> Details</Text>

    </Card>

    <Card style={{ width: "29%", height: 110, marginStart: 13 }}onPress={()=>navigation.navigate('Leaveadd')}>
        <Icon name='account-arrow-left-outline' color={colors.bg} size={40} style={{ margin:5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>

        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Add</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center',  color: colors.text }}>Leave</Text>


    </Card>
    <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => navigation.navigate('Attendancecard')}>
                            <Icon name='view-dashboard-edit-outline' color={colors.bg} size={40} style={{ margin: 5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}> Student</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Attendance </Text>
                        </Card>


</View>



        </View>
        </ScrollView>

        </SafeAreaView>


  )
}






