
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Addstudent({navigation}) {
   
    const home=()=>{
        navigation.navigate("Event")
    }

    const { colors } = useTheme();

    const [eventdate, seteventdate] = useState(new Date())
    const [openn, setOpenn] = useState(false)
    const [eventdata, seteventdata] = useState("")

    const [eventtime, seteventtime] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [timedata, settimedata] = useState("")

    const [eventclose, seteventclose] = useState(new Date())
    const [close, setclose] = useState(false)
    const [times, settimes] = useState("")


    const [eventid, seteventid] = useState("")
    const eventiddetails = (name) => {
        seteventid(name)
        console.log(name);
    }

 const [role, setrole] = useState("")
const [accessToken, setaccessToken] = useState("")
const [refreshtoken, setrefreshToken] = useState("")
    const [title, settitle] = useState("")
    const titledetails = (name) => {
        settitle(name)
        console.log(name);
    }


    const getEventData = async (ID, role) => {
        try {
            const eventresponse = await fetch("https://localhost.com:3000/get-Event-by-id", {
                method: "POST",
                body: JSON.stringify({ user_id: ID, role: role }),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            }).then((Res) => { return Res.json() });

            const eventdata = await eventresponse.then(data);
            if (eventdata.success) {
                settitle(eventdata.response.name);
                seteventdate(eventdata.response.date);
                seteventtime(eventdata.response.startTime);
                seteventclose(eventdata.response.endTime);
                seteventid(eventdata.response.id);

            } else {

                if (eventdata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                } else {
                    Alert.alert("this event can't be updated right now")
                }
            }
        } catch (error) {
            Alert.alert(error)
        }
    }

    const getuserdata = async () => {
        const role = await AsyncStorage.getItem("role");
        const accessToken = await AsyncStorage.getItem("accessToken");
        const refreshtoken = await AsyncStorage.getItem("refreshtoken");
        const eventID = await AsyncStorage.getItem("eventID");

        getEventData(eventID, role);
        seteventid(eventid);
        setrole(role);
        setaccessToken(accessToken);
        setrefreshToken(refreshtoken);
    }

    const Editevent = async () => {

        try {
            const teacherresponse = await fetch("https://localhost.com:3000/update-event-by id", {
                method: "POST",
                body: JSON.stringify({ id: eventid, name:title , date: eventdate, startTime: eventtime, endTime: eventclose, role: role }),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            });

            const eventdata = await teacherresponse.then(data);
            if (eventdata.success) {
                Alert.alert('successfully teacher has updated')
            } else {
                if (eventdata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                } else {
                    Alert.alert('this event cant be updated right now')
                }
            }

        } catch (error) {
            Alert.alert(error)
        }
    }

    const generateRefreshtoken = async (refreshtoken) => {
        try {
            const eventresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
                method: "POST", Authorization: `Bearer ${refreshtoken}`
            }).then((Res) => { return Res.JSON() });

            const eventdata = eventresponse

            if (eventresponse.success) {
                AsyncStorage.setItem("accesstoken", eventdata.accesstoken)
                AsyncStorage.setItem("refreshtoken", eventdata.refreshtoken)
                await Editevent();
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        getuserdata()
    }, [])

    return (

        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>

                  
                    <View style={{ marginTop: 5, marginStart: 5 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 23, marginStart: 15 }}>ID</Text>

                        <TextInput  textColor={colors.text} placeholderTextColor={colors.text} value={eventid} onChangeText={eventiddetails} style={{ width: '88%', borderColor: colors.text, borderWidth: 1, backgroundColor: colors.primary, marginTop: 6, alignSelf: 'center' }}></TextInput>
                    </View>
                    <View style={{ marginTop: 2, marginStart: 5 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 10, marginStart: 15 }}>Title</Text>

                        <TextInput placeholderTextColor={colors.text} value={title}  onChangeText={titledetails} style={{ width: '88%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 6, alignSelf: 'center' }}></TextInput>
                    </View>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 24 }}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpenn(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Event date' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', alignSelf: 'center', }}>{eventdata ? eventdate.toLocaleDateString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={openn}
                            mode='date'
                            date={eventdate}
                            onConfirm={(date) => {
                                setOpenn(false)
                                seteventdate(date)
                                seteventdata(date)
                                console.log("==========>" + date)
                            }}
                            onCancel={() => {
                                setOpenn(false)
                            }}>
                        </DatePicker>

                    </View>


                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 20 }}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpen(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Event start time' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', alignSelf: 'center', }}>{timedata ? eventtime.toLocaleTimeString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={open}
                            mode='time'
                            date={eventtime}
                            onConfirm={(time) => {
                                setOpen(false)
                                seteventtime(time)
                                settimedata(time)
                                console.log("==========>" + time)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}>
                        </DatePicker>

                    </View>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 20 }}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setclose(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Event end time' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', }}>{times ? eventclose.toLocaleTimeString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={close}
                            mode='time'
                            date={eventclose}
                            onConfirm={(time) => {
                                setclose(false)
                                seteventclose(time)
                                settimes(time)
                                console.log("==========>" + time)
                            }}
                            onCancel={() => {
                                setclose(false)
                            }}>
                        </DatePicker>

                    </View>


                    <Button style={{ width: "35%", height: 44, backgroundColor: colors.bg, alignSelf: 'center', marginTop: 13 }} labelStyle={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 13,color:colors.text }}onPress={home}>submit</Button>


                </View>
            </ScrollView>
        </SafeAreaView>

    )
}








