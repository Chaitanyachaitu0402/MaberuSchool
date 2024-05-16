
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme, Button, Menu, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Addbranch from './Addbranch';

export default function Exampleshimmer ({ navigation }) {
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

  const openMenu = (index) => setVisibleMenuIndex(index);
  const closeMenu = () => setVisibleMenuIndex(null);
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
        style={{backgroundColor: colors.background,width: '90%', height: 100,margin: 8,justifyContent: 'center',borderRadius: 7,}}onPress={home}>
            <View style={{flexDirection:'row',columnGap:5,justifyContent:'space-between'}}>

        <Text style={{color:colors.primary, fontSize: 22, fontWeight: 'bold',textAlign: 'center',color:'#ffffff',marginStart:4}}>{data.item.title}</Text>
        {/* <Menu
          visible={isMenuVisible}
          onDismiss={closeMenu}
          anchor={<Icon name='dots-vertical' size={26}  style={{ color:colors.primary,alignSelf:'center'}} onPress={() => openMenu(index)}></Icon>}>
          <Menu.Item  title="Edit" onPress={()=>navigation.navigate('Editbranch')} />
          <Menu.Item  title="Delete" />
         
        </Menu> */}
        </View>

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
                   {/* <Button textColor={colors.primary} buttonColor={colors.primary} labelStyle={{ fontSize: 18, color: colors.bg,alignSelf:'center',fontWeight:'800' }} style={{ width: '66%', height: 39, borderColor: colors.background, borderRadius: 6, marginTop: 10,alignSelf:'center',borderWidth:2, }}onPress={()=>navigation.navigate(Addbranch)}> Add Branch</Button > */}

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



