


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions, SafeAreaView } from 'react-native'
import { TextInput, useTheme, Button, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';


const Exampletoogle = ({ navigation }) => {

    const { colors } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    // const getuserdata = async () => {
    //     const role = await AsyncStorage.getItem("role");
    //     const accessToken = await AsyncStorage.getItem("accessToken");
    //     const refreshtoken = await AsyncStorage.getItem("refreshtoken");
    //     const headmasterID = await AsyncStorage.getItem("headmasterID");

    //     getHeadmasterData(headmasterID, role);
    //     sethomeid(homeid);
    //     setrole(role);
    //     setaccessToken(accessToken);
    //     setrefreshToken(refreshtoken);
    // }


    // useEffect(() => {
    //     getuserdata()
    // }, [])

    // setTimeout(() => {
    //     console.log('=========================>')
    //     setisShimmering(true);
    // }, 3000);


    return (

        <ScrollView>
           

                <View style={{ flex: 1, backgroundColor: colors.primary,height:Dimensions.get('window').height }}>


                    <View style={{ width: '100%', backgroundColor: colors.background, flexDirection: 'row', columnGap: 14, height: 150 }}>

                        <Image source={require("./Image/headmaster.jpg")} style={{ width: '22%', height: 90, alignSelf: 'center', justifyContent: 'center', borderRadius: 88, marginStart: 7, marginTop: 8 }}></Image>

                        <View style={{ marginTop: 12 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 26 }}>L.surendar</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>surendarkumarr123@gmail.com</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>year of service: 7</Text>
                        </View>




                    </View>

                    <View style={{
                        alignSelf: 'flex-end',
                        right: 12,
                        bottom: 12,
                    }}>
                        <TouchableOpacity onPress={toggleSwitch} style={[styles.toggleButton, { backgroundColor: isEnabled ? 'green' : 'red' }]}>
                            <Text style={{
                                color: colors.primary,
                                fontWeight: 'bold',
                                justifyContent: 'center',
                                alignSelf: 'center'
                            }}>{isEnabled ? 'Punchin' : 'Punchout'}</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, color: colors.text, }}> Time:10.00Am</Text>

                    </View>

                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.text, margin: 8, left: 6 }}>Daily Report</Text>

                    <View style={{ flexDirection: 'row', width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 8, marginStart: 3 }}>
                        <Card style={{ width: "29%", height: 110 }} onPress={() => navigation.navigate('Monthattendance')}>
                            <Icon name='account-check-outline' color={colors.bg} size={40} style={{ margin: 6, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>My</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>attendance </Text>

                        </Card>

                        <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => navigation.navigate('Attendancecard')}>
                            <Icon name='view-dashboard-edit-outline' color={colors.bg} size={40} style={{ margin: 5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}> Student</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Attendance </Text>
                        </Card>

                        <Card style={{ width: "29%", height: 110, marginStart: 7 }} onPress={() => navigation.navigate('Attendancecard2')}>
                            <Icon name='notebook-outline' color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, marginTop: 5 }}></Icon>
                            <View style={{ margin: 7 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>staff</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>attendance</Text>
                            </View>
                        </Card>
                    </View>




                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 7, left: 7 }}>Teacher Report</Text>

                    <View style={{ flexDirection: 'row', margin: 9, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 4, marginStart: 3 }}>
                        <Card style={{ width: "29%", height: 110, }}>
                            <View style={{ margin: 7 }}>

                                <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color: colors.bg }}>70</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Total</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>techers</Text>
                            </View>


                        </Card>

                        <Card style={{ width: "29%", height: 110, marginStart: 13 }}>
                            <View style={{ margin: 7 }}>

                                <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color: colors.bg }}>30</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Number of</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Present</Text>
                            </View>


                        </Card>

                        <Card style={{ width: "29%", height: 110, marginStart: 13 }}>
                            <View style={{ margin: 7 }}>

                                <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color: colors.bg }}>5</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Number of</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Absent</Text>
                            </View>


                        </Card>

                    </View>


                 

                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 8, left: 6 }}>School info</Text>

                 

<View style={{ flexDirection: 'row', width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 8, marginStart: 3 }}>
                        <Card style={{ width: "29%", height: 110 }} onPress={() => navigation.navigate('Classlist')}>
                        <Icon name='account-group-outline' color={colors.bg} size={40} style={{ marginTop: 7, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Class</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>List </Text>

                        </Card>

                        <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => navigation.navigate('Allteachers')}>
                        <Icon name='account-group-outline' color={colors.bg} size={40} style={{ marginTop: 7, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}> Add Staff</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>members</Text>
                        </Card>

                        <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => navigation.navigate('Event')}>
                        <Icon name='calendar-clock' color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, marginTop: 5 }}></Icon>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Event</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>List</Text>
                        </Card>

                    </View>
                    


                </View>




        </ScrollView>



    )
}
export default Exampletoogle;

const styles = StyleSheet.create({

    toggleButton: {
        padding: 6,
        borderRadius: 20,

    },

});
