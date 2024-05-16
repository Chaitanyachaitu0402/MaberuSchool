import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, FlatList } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';

export default function Parenthomework({navigation}) {
  const horizontalview = [{ name: 'Classname: II', date: '11-01-2023, 09:15 AM', description: 'Subject:English', text: '5days ago', staff: ' Teachername:Rajesh', timing: 'Deadline:01/01/2024 To 03/01/2024',  }, { name: 'Classname: II', date: '11-01-2023, 09:15 AM', description: 'Subject:Social', text: '1 weak ago', staff: ' Teachername:Rajesh', timing: 'Deadline:05/01/2024 To 07/01/2024',  },{ name: 'Classname: II', date: '11-01-2023, 09:15 AM', description: 'Subject:Social', text: '1 weak ago', staff: ' Teachername:Rajesh', timing: 'Deadline:05/01/2024 To 07/01/2024'},{ name: 'Classname: II', date: '11-01-2023, 09:15 AM', description: 'Subject:Social', text: '1 weak ago', staff: ' Teachername:Rajesh', timing: 'Deadline:05/01/2024 To 07/01/2024' },{ name: 'Classname: II', date: '11-01-2023, 09:15 AM', description: 'Subject:Social', text: '1 weak ago', staff: ' Teachername:Rajesh', timing: 'Deadline:05/01/2024 To 07/01/2024' }]
  const apperancce = ({ item }) => {

    return (


      <Card style={{ width: '95%',  alignSelf: 'center', backgroundColor: 'white', margin: 7, padding: 5 }}onPress={()=>navigation.navigate('Homeworkdetail')}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
          <Text style={{ color: colors.background, fontSize: 18, fontWeight: 'bold', marginStart: 5, marginTop: 5 }}>{item.name} </Text>
          <View>

          </View>

         
          {/* <Icon name='eye' color={colors.background} size={24} style={{ marginTop: 10, alignSelf: 'flex-end' }}></Icon> */}
        </View>

        <Text style={{ color: colors.text, fontSize: 16, marginStart: 10, marginTop: 3 }}>{item.description} </Text>
        <Text style={{ color: colors.text, fontSize: 16, marginStart: 6, marginTop: 3 }}>{item.staff} </Text>
        <Text style={{ color: colors.text, fontSize: 16, marginStart: 10, marginTop: 3 }}>{item.timing} </Text>

        <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal', marginStart: 12, marginTop: 17 }}>{item.date} </Text>

        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', columnGap: 4, marginRight: 3 }}>
          <Icon name='clock-outline' color={colors.text} size={17} style={{ marginTop: 4, alignSelf: 'flex-end', bottom: 15 }}></Icon>
          <Text style={{ color: colors.text, fontSize: 14, alignSelf: 'flex-end', bottom: 15 }}>{item.text} </Text>
        </View>

      </Card>


    )
  }
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary,height:Dimensions.get('window').height }}>
    

      <View style={{ marginTop: 8 }}>
        <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5, }}></FlatList>

      </View>




    </View>
  )
}
