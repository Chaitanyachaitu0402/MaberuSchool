import React, { useState } from 'react';
import { useTheme, Card, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';



const ApprovalMenuFlatList = ({navigation}) => {
    const { colors } = useTheme();
    const horizontalview = [
        { date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'Employe id: 1224 ', name: 'Name: kotla.Ramadevi',view:'View' },
        { date: '13-01-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Medical Leave', employe: 'Employe id: 3334 ', name: 'Name: Varahi.Ravukumar',view:'View' },
        { date: '16-03-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'Employe id: 8769 ', name: 'Name: Deva.Prathiba',view:'View' },
        { date: '16-03-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'Employe id: 8769 ', name: 'Name: Deva.Prathiba',view:'View' }
    ];

    const apperancce = (data) => {
        return (
            <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:7  }}>
                    <Text style={{ color: colors.text, fontSize: 19, fontWeight: 'bold',   }}>{data.item.text} </Text>
                    <Text style={{ color: colors.primary, fontSize: 19, fontWeight: 'bold',  backgroundColor:'#1c1c84',padding:10,borderRadius: 10   }}onPress={()=>navigation.navigate('Leavedetail')}>{data.item.view} </Text>
                </View>
<View style={{padding:7}}>

                <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold',  }}>{data.item.employe} </Text>
                <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold',  }}>{data.item.name} </Text>
                <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal',  marginTop: 7 }}>{data.item.description}</Text>

             <Text style={{ color: colors.text, fontSize: 13, fontWeight: 'normal',  marginTop: 4, alignSelf: 'flex-end' }}>{data.item.date} </Text>
             </View>

            </Card>
        );
    };

    return (
        <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, }} />
    );
};

export default ApprovalMenuFlatList;