import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,  ScrollView,SafeAreaView,Dimensions ,Alert} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Noticedetails =({navigation})=> {

 
  const { colors } = useTheme();

  return (

    <SafeAreaView>
      <ScrollView>



      

       
      <View style={{ flex: 1,height:Dimensions.get('window').height }}>



            


          <View style={{ marginStart: 9 }}>


            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', margin: 9,textAlign:'right' }}>11-02-2023</Text>

            <Text style={{ color: colors.background, fontSize: 16, fontWeight: 'bold', marginTop: 9, }}>School anniversary celebrations are start in next week</Text>
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', marginTop: 9, }}>Dear students,</Text>
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', marginTop: 9, }}>On the occasion of anniverasary day,the school has decided to organise some events and games for students so all parents encourage to their childrens and we arranged food in school so all students are attend this event and participate all cultural activities.</Text>
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', marginTop: 4, }}>Principal</Text>
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', }}>satish marginStart</Text>
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', }}>Elementary school.</Text>


          </View>





        </View>
           

      </ScrollView>
      
    </SafeAreaView>
    

  )
}


export default Noticedetails;
