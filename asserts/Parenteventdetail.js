import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, FlatList } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';

export default function Parenteventdetail({navigation}) {
    const { colors } = useTheme();
    return (
<SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: colors.primary ,height:Dimensions.get('window').height}}>


<Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold',marginTop:4,alignSelf:'flex-end',margin:5 }}>03/03/2024</Text>


<View style={{ marginTop: 6 }}>
    <Card style={{ width: '90%', height: 177, alignSelf: 'center', margin: 6 }}>
        <Card.Cover source={require("./Image/okk.jpeg")} style={{ width: '100%', height: 177 }}></Card.Cover>
    </Card>
</View>
<View style={{margin:10,}}>
<Text style={{ color: colors.text, fontSize: 19, fontWeight: 'bold', }}>Childrens Day celebrations</Text>
<Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold',marginTop:4 }}>Event Timings:09:00AM - 04:00PM</Text>

<Text style={{ color: colors.text, fontSize: 16,marginTop:5 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>

</View>

</View>


    </ScrollView>
</SafeAreaView>
    )}