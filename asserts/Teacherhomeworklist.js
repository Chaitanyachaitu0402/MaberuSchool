

import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, FlatList } from 'react-native';
import { useTheme, Card, Button, TextInput, Menu, Divider } from 'react-native-paper'; // Import Menu and Divider
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';

export default function Teacherhomeworklist({navigation}) {

  const horizontalview = [{ name: 'Classname: II', date: '11-01-2023, 09:15 AM', subject: 'Subject:English', text: '5days ago', staff: ' Teachername:Rajesh', timing: 'Deadline:01/01/2024 ', description: 'Write poems in lesson number 5' }, { name: 'Classname: III', date: '11-01-2023, 09:15 AM', subject: 'Subject:Social', text: '1 weak ago', staff: ' Teachername:Rajesh', timing: 'Deadline:05/01/2024', description: 'Read  first three Essayquestion in lesson number 5' },{ name: 'Classname: II', date: '11-01-2023, 09:15 AM', subject: 'Subject:English', text: '5days ago', staff: ' Teachername:Rajesh', timing: 'Deadline:01/01/2024 ', description: 'Write multiple questions in lesson number 2' },{ name: 'Classname: II', date: '11-01-2023, 09:15 AM', subject: 'Subject:social', text: '5days ago', staff: ' Teachername:Rajesh', timing: 'Deadline:01/01/2024 ',description: 'Write poems in lesson number 5' },{ name: 'Classname: II', date: '11-01-2023, 09:15 AM', subject: 'Subject:Hindi', text: '5days ago', staff: ' Teachername:Rajesh', timing: 'Deadline:01/01/2024 ', description: 'Read questio and answers in jockey lesson ' },]
  
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(-1); // State to manage menu visibility for each card

  const openMenu = (index) => {
    setVisibleMenuIndex(index); // Open menu for the corresponding card
  };

  const closeMenu = () => {
    setVisibleMenuIndex(-1); // Close all menus
  };

  const apperancce = ({ item, index }) => {

    return (
      <Card style={{ width: '95%',  alignSelf: 'center', backgroundColor: 'white', marginTop: 14, padding: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
          <Text style={{ color: colors.background, fontSize: 18, fontWeight: 'bold', marginStart: 5, marginTop: 5 }}>{item.name} </Text>
          <Menu
            visible={visibleMenuIndex === index} // Set visibility based on the current index
            onDismiss={closeMenu}
            anchor={<Icon name='dots-vertical' color={colors.text} size={24} onPress={() => openMenu(index)} />} // Pass index to openMenu function
          >
            <Menu.Item onPress={() => {navigation.navigate('Teacherworkcreate')}} title="Edit" />
            <Menu.Item onPress={() => {}} title="Delete" />
          </Menu>
        </View>

        <Text style={{ color: colors.text, fontSize: 17, marginStart: 6, marginTop: 3 }}>{item.staff} </Text>
        <Text style={{ color: colors.text, fontSize: 17, marginStart: 10, marginTop: 3 }}>{item.timing} </Text>
        <Text style={{ color: colors.text, fontSize: 17, marginStart: 10, marginTop: 3 }}>{item.subject} </Text>

        <Text style={{ color: colors.text, fontSize: 17, marginStart: 10, marginTop: 3,fontWeight:'600' }}>{item.description} </Text>

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
    <View style={{ flex: 1, backgroundColor: colors.primary,}}>
        
      
      <Button textColor={colors.primary} buttonColor={colors.primary} labelStyle={{ fontSize: 16, color: colors.bg,alignSelf:'center' }} style={{ width: '55%', height: 39, borderColor: colors.background, borderRadius: 6, marginTop: 10,alignSelf:'center',borderWidth:2 }}onPress={()=>navigation.navigate('Teacherworkcreate')}> Create Homework </Button >

      <View style={{ marginTop: 8  }}>
        <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5, }}></FlatList>

      </View>

    </View>
  )
}
