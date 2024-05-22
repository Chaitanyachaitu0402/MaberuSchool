import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme, Button, Menu, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Leavelist from './Exampleshimmer';
import Studentleaverequest from './Studentleaverequest';



export default function Leavesections({navigation}){


  const { colors } = useTheme();

  return (
    
    <View style={{ flex: 1,backgroundColor: colors.primary,alignItems: 'center',}}>


<Card style={{ width: '70%', height: 100, margin: 8,justifyContent: 'center', borderRadius: 7, backgroundColor: colors.background,}} onPress={()=>navigation.navigate('Leavelist')}>
<Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center',color:colors.primary,marginStart:4}}>Staff leavelist</Text>
</Card>


<Card style={{ width: '70%', height: 100, margin: 8,justifyContent: 'center', borderRadius: 7, backgroundColor: colors.background,}}onPress={()=>navigation.navigate(Studentleaverequest)}>
<Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center',color:colors.primary,marginStart:4}}>Studentleavelist</Text>
</Card>

      
        
    </View>

  )}