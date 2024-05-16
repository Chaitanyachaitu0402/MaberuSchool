
import React, { useState, useEffect } from 'react';
 import { View, Text, StyleSheet, FlatList, Dimensions,Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, useTheme, Button, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export default function Feesview  ({navigation})  {
    const{colors}=useTheme();

  return (
    <SafeAreaView>
        <ScrollView >
        <View style={{margin:5,backgroundColor:colors.primary,flex:1,}}> 
                    <Image source={require("./Image/School.jpg")} style={{ width: "30%", height: 99, marginStart: 5, alignSelf: 'center', margin: 6 }}></Image>

     <Text style={{fontSize:24,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Student Fees Information </Text>
 <View style={{marginTop:5}}>

      <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Name:John </Text>
      <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Section:A</Text>
      <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Class:II</Text>
      </View>


    <View style={{ flexDirection: 'column',borderWidth: 1 ,  borderColor: 'black',margin: 8,borderRadius:5}}>
        
      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 57,backgroundColor:colors.background}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.primary,fontWeight:'bold',fontSize:17}}>Fee details</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.primary,fontWeight:'bold',fontSize:17}}>Amount</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,height: '',color:colors.primary,fontWeight:'bold',fontSize:17}}>GST*</Text>

      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: 'black', height: 46,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Registration Fee</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2500</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2700</Text>

      </View>

     
    
      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 62,backgroundColor:colors.b}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.background,fontWeight:'bold',fontSize:18}}>First installment Amount</Text>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 46,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Tuition Fee</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>4000</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>4300</Text>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 46,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Stationary Fee</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2200</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2350</Text>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: colors.text, height: 46,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Transport Fee</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2000</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2300</Text>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 46,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Sports Fee</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>3200</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>3400</Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 62,backgroundColor:colors.b}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.background,fontWeight:'bold',fontSize:18}}>Second installment Amount</Text>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: colors.text, height: 46,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Tuition Fee</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2500</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2670</Text>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 46,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Stationary Fee</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>1500</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>1850</Text>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: colors.text, height: 46,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Transport Fee</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>900</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>1110</Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: colors.text, height: 56,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.background,fontSize:20,fontWeight:'bold'}}>Total</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.background,fontSize:20,fontWeight:'bold'}}>15000</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.background,fontSize:20,fontWeight:'bold'}}>15700</Text>
      </View>

    </View>
    </View>

        </ScrollView>
    </SafeAreaView>
    
  );
};

// 
