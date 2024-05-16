import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert,FlatList } from 'react-native';
 import { useTheme, Card, Button, TextInput } from 'react-native-paper';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import React, { useState, useEffect, } from 'react';


export default function Parentnotice() {
  const horizontalview = [{ name: 'Parent meeting', date: '11-01-2024, 09:15 AM', description: 'Parents meeting conducted on monday so you are attend the meeting exactly morning section 9.00AM. ', text: '2days ago' }, { name: 'Dressing style', date: '12-01-2024, 11:15AM', description: 'your childrens  should be wear traditional dressing at tomorrow due to celebration of ugadi', text: '1days ago' }, { name: 'sportsmeet', date: '22-03-2023, 11:15AM', description: 'Childrens sport meet conducted in tuesday', text: '5days ago' }, { name: 'project', date: '10-02-2024, 10:15 AM', description: 'project work will be display tomorrow in bashyam school ', text: '6days ago' }]
  const apperancce = (data) => {
    console.log("data:", data);

    return (


      <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: 'white', marginTop: 14, padding: 5 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
          <Text style={{ color: colors.background, fontSize: 18, fontWeight: 'bold', marginStart: 9, marginTop: 5, }}>{data.item.name} </Text>
        </View>

        <Text style={{ color: colors.text, fontSize: 16, marginStart: 12, marginTop: 6 }}>{data.item.description} </Text>
        <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal', marginStart: 12, marginTop: 17 }}>{data.item.date} </Text>

        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', columnGap: 4, marginRight: 3 }}>
          <Icon name='clock-outline' color={colors.text} size={17} style={{ marginTop: 4, alignSelf: 'flex-end', bottom: 15 }}></Icon>
          <Text style={{ color: colors.text, fontSize: 14, alignSelf: 'flex-end', bottom: 15 }}>{data.item.text} </Text>
        </View>

      </Card>

    )
  }





    const { colors } = useTheme()

  return (
    
    <View style={{flex:1,backgroundColor:colors.primary}}>
 {/* <View style={{ width: '100%', height: 77, backgroundColor: colors.background, flexDirection: 'row', columnGap: 10, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', columnGap: 8, marginTop: 6 }}>
          <Icon name='arrow-left' color={colors.primary} size={24} style={{ marginTop: 20, marginStart: 4 }}></Icon>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primary, marginTop: 22, marginStart: 4 }}>Notice</Text>
        </View>
      </View> */}

      <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>

    </View>
  )
}
