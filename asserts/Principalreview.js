import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert,FlatList } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';

export default function Principalreview() {
    const{colors}=useTheme();
  return (
    <View style={{flex:1,backgroundColor:colors.primary}}>
      
      <View style={{ width: '100%', height: 80, backgroundColor: colors.background, flexDirection: 'row', columnGap: 14 }}>
                        <Icon name='arrow-left' color={colors.primary} size={24} style={{ marginTop: 24, marginStart: 5 }}></Icon>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primary, marginTop: 23 }}>Fees Receipt</Text>
                    </View>

    </View>
  )
}
