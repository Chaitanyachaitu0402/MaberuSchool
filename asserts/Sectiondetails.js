import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Card, useTheme, Button, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const Exampleshimmer = ({ navigation }) => {
  const [isShimmering, setIsShimmering] = useState(false);
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

  const openMenu = (index) => setVisibleMenuIndex(index);
  const closeMenu = () => setVisibleMenuIndex(null);


  const horizontalview5 = [{ number: '01', name: 'NAME: Ravi', id: 'ID NO : 12345', section: 'SECTION : A' }, { number: '02', name: 'NAME: Leela', id: 'ID NO : 27896', section: 'SECTION : B' }, { number: '03', name: 'NAME: Vamsi', id: 'ID NO : 98765', section: 'SECTION : C' }, { number: '04', name: 'NAME: Rahul', id: 'ID NO : 12334', section: 'SECTION : A' }, { number: '05', name: 'NAME: Swetha', id: 'ID NO : 12344', section: 'SECTION : C' }, { number: '06', name: 'NAME: Praneeth', id: 'ID NO : 12332', section: 'SECTION : B' }, { number: '07', name: 'NAME: Lakshmi', id: 'ID NO : 12346', section: 'SECTION : A' }, { number: '08', name: 'NAME: Rajesh', id: 'ID NO : 12333', section: 'SECTION : C' }, { number: '09', name: 'NAME: Ramu', id: 'ID NO : 12112', section: 'SECTION : C' }, { number: '10', name: 'NAME: Harika', id: 'ID NO : 12421', section: 'SECTION : B' },]
   const appearance = (data, index) => {
    const isMenuVisible = visibleMenuIndex === index;

    return (
      <Card style={{  height: 100,
        margin: 8,
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: colors.primary,width:'88%',alignSelf:'center'}} onPress={()=>navigation.navigate('Studentdetails')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
<View style={{flexDirection:'row'}}>

<View style={{ flexDirection: 'row' }}>

                   <View>
                       <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >
                           <Text style={{ color: colors.primary, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{data.item.number}</Text>
                       </Card>
                   </View>

                   <View style={{ justifyContent: 'center' }}>
                       <Text style={{ color: colors.text, fontSize: 14, margin: 5 }}>{data.item.name}</Text>
                       <Text style={{ color: colors.text, fontSize: 14, margin: 3 }}>{data.item.id}</Text>
                       <Text style={{ color: colors.text, fontSize: 14, margin: 3 }}>{data.item.section}</Text>
                   </View>
               </View>


          </View>

          <Menu
            visible={isMenuVisible}
            onDismiss={closeMenu}
            anchor={<Icon name='dots-vertical' size={26} onPress={() => openMenu(index)} />}
          >
            <Menu.Item title="Edit" onPress={() => navigation.navigate("Editstudent")} />
            <Menu.Item title="Delete" />
          </Menu>

        </View>
      </Card>
    );
  };

  const { colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setIsShimmering(true);
    }, 3000);
  }, []);

  return (
    <View style={{width:'99%',flex:1}}>

    <View style={[styles.container,{backgroundColor: 'white'}]}>
        <View style={styles.shimmerContainer}>

<View style={{width:'100%'}}>

           <Card style={{ height: 150, margin: 4, borderRadius: 10, backgroundColor: colors.primary,width:Dimensions.get('window').width }}>

                       <View style={{ flexDirection: 'row' }}>

                           <View>
                               <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >
                                   <Text style={{ color: colors.bg, alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>VI</Text>
                               </Card>
                           </View>

                           <View style={{ justifyContent: 'center' }}>
                               <Text style={{ color: colors.text, fontSize: 16, margin: 5 }}>Section name : A</Text>
                               <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>No of students : 30 </Text>
                               <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>Class teacher : Sirisha</Text>
                           </View>

                       </View>

                       <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                           <Button textColor={colors.primary} buttonColor={colors.background} labelStyle={{ fontSize: 15, color: colors.primary }} style={{ width: '44%', height: 37, borderColor: colors.primary, borderRadius: 6, marginTop: 10 }}onPress={()=>navigation.navigate('Addstudent')}> Add
                           </Button >

                       </View>

                   </Card>

                   </View>


          <FlatList
            data={horizontalview5}
            renderItem={({ item, index }) => appearance({ item }, index)}
            contentContainerStyle={{ margin: 9,
              columnGap: 5,width:Dimensions.get('window').width}}
          />
        </View>

    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerPlaceholder: {
    width: '88%',
    height: 100,
    margin: 8,
    borderRadius: 7,
    backgroundColor: '#ffffff',
  },
  card: {

  },


});

export default Exampleshimmer;
