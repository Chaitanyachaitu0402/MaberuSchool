import React, { useState, useEffect } from 'react';
 import { View, Text, StyleSheet, FlatList, Dimensions,Image,SafeAreaView,ScrollView } from 'react-native';
import { Card, useTheme, Button, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export default function Examsresult() {

const horizontalview5=[{title:'Final Exams'},{title:'Annual Exams'},{title:'Quartely Exams'}]
const appearance=(data)=>{
    console.log("data:",data)

return(
    <Card style={{ width: '90%', alignSelf: 'center', backgroundColor: colors.bg, marginTop: 14, padding: 5, height:66}}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                    <Text style={{  fontSize: 22, fontWeight: 'bold', marginStart: 9, marginTop: 5 ,color:colors.primary}}>{data.item.title} </Text>
                </View>


               
            </Card>

)
}

    const{colors}=useTheme();
  return (
    <SafeAreaView>
        <ScrollView>
        <View style={{flex:1,backgroundColor:colors.primary,height:Dimensions.get('window').height}}>
     <FlatList data={horizontalview5} renderItem={appearance} ></FlatList>
    </View>
        </ScrollView>
    </SafeAreaView>
   
  )
}
