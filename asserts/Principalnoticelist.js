import { View, Text, Image, Dimensions, FlatList, StyleSheet,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme, Card,Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Noticedetails from './Noticedetails';
import Eventadd from './Eventadd';


export default function Note({navigation}) {

 
  const home=()=>{
    navigation.navigate("Noticedetails")
}

    const { colors } = useTheme()
    const horizontalview = [{ name: 'Director', date: '11-01-2023, 09:15 AM', description: 'School Anniversary celebrations in next month', text: '2days ago' }, { name: 'Director', date: '19-03-2023, 10:15AM', description: 'Pongal Holidays from sundat to saturday', text: '3days ago' }, { name: 'Director', date: '22-03-2023, 11:15AM', description: 'Childrens sport meet conducted in tuesday', text: '5days ago' }, { name: 'Director', date: '11-01-2023, 09:15 AM', description: 'Annual exams start from next weak ', text: '6days ago' },{ name: 'Director', date: '11-01-2023, 09:15 AM', description: 'School Anniversary celebrations in next month', text: '2days ago' }]
    const apperancce = (data) => {
      

      return (
  
  
        <Card style={{ width: '95%',  alignSelf: 'center', backgroundColor: 'white', marginTop: 14, padding: 5 }} onPress={home} >
  
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
            <Text style={{ color: colors.background, fontSize: 18, fontWeight: 'bold', marginStart: 9, marginTop: 5 }}>{data.item.name} </Text>
         
          </View>
  
          <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginStart: 12, marginTop: 6 }}>{data.item.description} </Text>
          <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal', marginStart: 12, marginTop: 17 }}>{data.item.date} </Text>
  
          <View style={{ flexDirection: 'row', alignSelf: 'flex-end', columnGap: 4, marginRight: 3 }}>
            <Icon name='clock-outline' color={colors.text} size={17} style={{ marginTop: 4, alignSelf: 'flex-end', bottom: 15 }}></Icon>
            <Text style={{ color: colors.text, fontSize: 14, alignSelf: 'flex-end', bottom: 15 }}>{data.item.text} </Text>
          </View>
  
        </Card>
  
      )
 
    }

  return (


  <View style={{ backgroundColor: colors.primary, flex: 1,height:Dimensions.get('window').height}}>
               

<FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>
</View>


  )

}



