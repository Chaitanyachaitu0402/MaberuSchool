import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert,FlatList } from 'react-native';
 import { useTheme, Card, Button, TextInput } from 'react-native-paper';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import React, { useState, useEffect, } from 'react';


 export default function Parentgeneral() {
    const horizontalview = [{ name: 'Disiplane', date: '11-01-2024, 09:15 AM', description: 'your children should be very disiplane in class room and as a parents you re give some potential strenght . ', text: '2days ago' }, { name: 'Fee due', date: '12-01-2024, 11:15AM', description: 'your children feesdue will be paid as possible as early.', text: '3days ago' }, { name: 'Activity', date: '22-03-2023, 11:15AM', description: 'next weak your children participating in school anniversary dancing competation so you are attend the event.', text: '5days ago' }, { name: 'project', date: '10-02-2024, 10:15 AM', description: 'project work will be display tomorrow in bashyam school so please mentain shoe,identity card,white dress', text: '6days ago' }]
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
        </View>
   */}
        <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>
  
      </View>
    )
  }
  
