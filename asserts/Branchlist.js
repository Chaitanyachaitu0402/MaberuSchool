
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme, Button, Menu, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Addbranch from './Addbranch';

export default function Exampleshimmer ({ navigation }) {
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

  
  const home=()=>{
    navigation.navigate("Branchdetails")
}
  const horizontalview5 = [
    { title: 'Vizag' },
    { title: 'Srikakulam' },
    { title: 'Hyderabad' },
  ];

  const apperancce = (data, index) => {
    const isMenuVisible = visibleMenuIndex === index;
    
    return (
      <Card
        style={{backgroundColor: colors.background,width: '90%', height: 100,margin: 8,justifyContent: 'center',alignSelf:"center" ,  borderRadius: 7,}}>

        <Text style={{color:colors.primary, fontSize: 22, fontWeight: 'bold',textAlign: 'center',color:'#ffffff',marginStart:4,alignSelf:'center'}}>{data.item.title}</Text>
       
      </Card>

    );
  };

  const { colors } = useTheme();



  return (
    <View style={{ backgroundColor: colors.primary,flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',}}>
        <View style={{}}>

          <FlatList
            data={horizontalview5}
            renderItem={({ item, index }) => apperancce({ item }, index)}
            horizontal={1}
            contentContainerStyle={{ margin: 9,
              columnGap: 5,}}
          />
        </View>
     
    </View>
  );
};



