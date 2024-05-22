
import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme, Card, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ApprovalMenu(navigation){;
 
    const { colors } = useTheme();
    return (
        <SafeAreaView>
            <View style={{ flex: 1, backgroundColor: colors.b, height: Dimensions.get('window').height }}>

               
                <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, margin:7, padding: 8, height: 300 }}>
                 <View style={{padding:7}}>
<View style={{flexDirection:'row'}}>
<Text style={{ color: colors.text, fontSize: 17, fontWeight: 'bold' }}>Casual Leave</Text>
<ApprovalMenu initialOption="Pending" />


</View>


                    <Text style={{ color: colors.text, fontSize: 17, fontWeight: '500',marginTop:8 }}> From:18-03-2023 To 19-03-2023</Text>
                    <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal', margin:4 }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit."</Text>
                    </View>

                </Card>

            </View>

        </SafeAreaView>
    );
};

