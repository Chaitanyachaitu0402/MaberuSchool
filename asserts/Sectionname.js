
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme, Button, Menu, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Addbranch from './Addbranch';
import Addsection from './Addsection';

const Exampleshimmer = ({ navigation }) => {
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

  const openMenu = (index) => setVisibleMenuIndex(index);
  const closeMenu = () => setVisibleMenuIndex(null);

  const horizontalview5 = [
    { title: 'Section-A' },
    { title: 'Section-B' },
    { title: 'Section-C' },
  ];

  const apperancce = (data, index) => {
    const isMenuVisible = visibleMenuIndex === index;
    
    return (
      <Card
        style={{ width: '74%',
        height: 100,
        margin: 8,
        borderRadius: 7,
        backgroundColor: colors.background,alignSelf:'center',justifyContent:'center'}}
        onPress={() => navigation.navigate('Sectiondetails')}>
            <View style={{flexDirection:'row',columnGap:5,justifyContent:'space-between'}}>

        <Text style={{ fontSize: 20,
    fontWeight: 'bold',
    color:colors.primary,alignSelf:'center',margin:5}}>{data.item.title}</Text>
        <Menu
          visible={isMenuVisible}
          onDismiss={closeMenu}
          anchor={<Icon name='dots-vertical' size={22}  style={{ color:colors.primary,margin:6 }} onPress={() => openMenu(index)}></Icon>}>
          <Menu.Item  title="Edit" onPress={()=>navigation.navigate(Addsection)} />
          <Menu.Item  title="Delete" />
         
        </Menu>
        </View>

      </Card>
    );
  };

  const { colors } = useTheme();

 

  return (

    <View style={{ flex: 1,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',flexDirection:'row',alignSelf:'center'}}>
      
        <View style={styles.shimmerContainer}>
           <Button textColor={colors.primary} buttonColor={colors.primary} labelStyle={{ fontSize: 16, color: colors.bg,alignSelf:'center' }} style={{ width: '43%', height: 39, borderColor: colors.background, borderRadius: 6, marginTop: 10,alignSelf:'center',borderWidth:2 }}onPress={()=>navigation.navigate('Addsection')}>Add Section  
                             </Button >

          <FlatList
            data={horizontalview5}
            renderItem={({ item, index }) => apperancce({ item }, index)}
          horizontal={1}
            contentContainerStyle={{ margin: 9,
              columnGap: 5,alignSelf:'center',left:3,alignItems:'center'}}
          />
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
  shimmerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerPlaceholder: {
    width: '30%',
    height: 100,
    margin: 8,
    borderRadius: 7,
    backgroundColor: '#ffffff',
  },



});

export default Exampleshimmer;
