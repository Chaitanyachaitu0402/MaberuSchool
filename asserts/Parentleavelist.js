import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect, } from 'react';


export default function Parentleavelist({navigation}) {
  const { colors } = useTheme();

  const horizontalview = [{ date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'fever', status: 'Approved' }, { date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Fever and headache', status: 'Rejected' }, { date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'cough', status: 'Pending' }, { date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'going to hyderabad', status: 'Approved' }, { date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'function', status: 'Rejected' },{ date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'fever', status: 'Approved' },]
  const apperancce = ({ item }) => {


    return (
      <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8 }}>

        <View style={{ flexDirection: 'row', margin: 6, justifyContent: 'space-between' }}>
          <Text style={{ color: colors.text, fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 6 }}>{item.text}  </Text>

          <View>

            {(() => {
              switch (item.status) {
                case 'Approved':
                  return <Text style={{ color: "#008000", fontWeight: 'bold',fontSize:17 }}>Approved</Text>;
                case 'Rejected':
                  return <Text style={{ color: "#ff0000", fontWeight: 'bold',fontSize:17 }}>Rejected</Text>;
                case 'Pending':
                  return <Text style={{ color: "#FB9D2F", fontWeight: 'bold',fontSize:17}}>Pending</Text>;
                default:
                  return <Text style={{ color: "#000000", fontWeight: 'bold',fontSize:17 }}></Text>;

              }
            })()}
            
          </View>

        </View>

        <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', marginStart: 9, }}>{item.description}</Text>
        <Text style={{ color: colors.text, fontSize: 13, fontWeight: 'normal', marginStart: 9, marginTop: 4, alignSelf: 'flex-end' }}>{item.date} </Text>

      </Card>

    )
  }

  return (

    <View style={{flex:1,backgroundColor:colors.b}}>
     

        <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} ></FlatList>

    </View>
  )
}

