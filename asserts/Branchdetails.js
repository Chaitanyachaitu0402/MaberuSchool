import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'

export default function Branchdetails({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <Image source={require("./Image/School.jpg")} style={{ height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, marginTop: 30 }}></Image>
      <View style={{ flexDirection: 'row', margin: 5, marginTop: 6, alignSelf: 'center' }}>
        <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold' }}> Branch ID: </Text>
        <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold' }}> 14q71 </Text>
      </View>

      <View style={{ flexDirection: 'row',  alignSelf: 'center' }}>
        <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold' }}> Branch Name: </Text>
        <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold' }}> Elementary school </Text>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold' }}> Branch Head: </Text>
        <Text style={{ fontSize: 17, color: colors.background, marginTop: 3, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold' }}> Rootherfor </Text>
      </View>


      <Text style={{ fontSize: 24, color: colors.bg, marginTop: 3, margin: 5, fontWeight: 'bold', }}>  Location: </Text>
      <View style={{ alignSelf: 'center', justifyContent: 'center', }}>

        <Text style={{ fontSize: 18, color: colors.background, marginTop: 3, }}>   Indhiramma colony </Text>
        <Text style={{ fontSize: 18, color: colors.background, marginTop: 3,}}>    Near Sbi Bank </Text>
        <Text style={{ fontSize: 18, color: colors.background, marginTop: 3,}}>    Vishakapatnam </Text>
        <Text style={{ fontSize: 18, color: colors.background, marginTop: 3, }}>    540045 </Text>


      </View>

    </View>
  )
}
