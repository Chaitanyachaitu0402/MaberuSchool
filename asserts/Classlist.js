
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme, Button, Menu, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Addbranch from './Addbranch';
import Addsection from './Addsection';
import Addclass from './Addclass';
import Editclass from './Editclass';

export default function Classlist({navigation}){
  const { colors } = useTheme();

  const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

  const openMenu = (index) => setVisibleMenuIndex(index);
  const closeMenu = () => setVisibleMenuIndex(null);

     const horizontalview5 = [{ title: 'Prenurseey', }, { title: 'Nursery', }, { title: 'Class I', }, { title: 'Class II', }, { title: 'Class III', }, { title: 'Class IV', }, { title: 'Class V', }, { title: 'Class VI', }, { title: 'Class VII', }, { title: 'Class VIII', }, { title: 'Class IX', }, { title: 'Class X', }]


  const apperancce = (data, index) => {
    const isMenuVisible = visibleMenuIndex === index;
    
    return (

      <Card
        style={{ width: '45%',
        height: 100,
        margin:6,
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: colors.primary,}}
        onPress={() => navigation.navigate('Sectionname')}>
            <View style={{flexDirection:'row',columnGap:5,justifyContent:'space-between',padding:6}}>

        <Text style={{fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',color:colors.background,marginStart:4}}>{data.item.title}</Text>
        <Menu
          visible={isMenuVisible}
          onDismiss={closeMenu}
          anchor={<Icon name='dots-vertical' size={22}  style={{ color:colors.text }} onPress={() => openMenu(index)}></Icon>}>
          <Menu.Item  title="Edit" onPress={()=>navigation.navigate(Editclass)} />
          <Menu.Item  title="Delete" />
         
        </Menu>
        </View>

      </Card>

    );
  };



  return (
    
    <View style={{flex:1,left:8}}>
         <Button textColor={colors.primary} buttonColor={colors.primary} labelStyle={{ fontSize: 16, color: colors.bg,alignSelf:'center' }} style={{ width: '55%', height: 39, borderColor: colors.background, borderRadius: 6, marginTop: 10,alignSelf:'center',borderWidth:2 }}onPress={()=>navigation.navigate(Addclass)}>    Add Class  </Button >

          <FlatList
            data={horizontalview5}
            renderItem={({ item, index }) => apperancce({ item }, index)}
             numColumns={2}
            contentContainerStyle={{ margin: 9,
              columnGap: 5,}}
          />
        
     
    </View>
  );
};
