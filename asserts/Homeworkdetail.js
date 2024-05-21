import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions, SafeAreaView } from 'react-native'
import { TextInput, useTheme, Button, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



export default function Homeworkdetail({navigation}) {
  const { colors } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>

     
      <View style={{ marginTop: 7, margin: 8 }}>

        <Text style={{ fontSize: 17, color: colors.text, marginTop: 10, marginStart: 4 }}>Teacher Name: Rajesh</Text>
        <Text style={{ fontSize: 17, color: colors.text, marginTop: 6, marginStart: 4 }}>SubjectName: English</Text>
        <Text style={{ fontSize: 17, color: colors.text, marginTop: 6, marginStart: 4 }}>Deadline Timing: 01/01/2024-03/01/2024</Text>
        <Text style={{ fontSize: 17, color: colors.text, fontWeight: '500', marginTop: 8, marginStart: 4 }}>Description:Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua .Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </Text>

      </View>

    </View>

  )
}
