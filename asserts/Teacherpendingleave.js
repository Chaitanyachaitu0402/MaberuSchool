
import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme, Card, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Leavedetail({navigation}) {
    const { colors } = useTheme();
   
   

    return (
        <SafeAreaView>
            <View style={{ flex: 1, backgroundColor: colors.b, height: Dimensions.get('window').height }}>

               
                <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8, height: 220 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 6 }}>
                        <Text style={{ color: colors.text, fontSize: 17, fontWeight: 'bold' }}>Casual Leave</Text>
                        <Text style={{ color: colors.bg, fontSize: 17, fontWeight: 'bold' }}onPress={ () => navigation.navigate('Leaveedit')}>Edit</Text>

                    </View>
               
                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500', marginStart: 12 }}>18-03-2023 To 19-03-2023</Text>
                    <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal', marginStart: 12, marginTop: 8 }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit."</Text>
                </Card>

            </View>

        </SafeAreaView>
    );

};