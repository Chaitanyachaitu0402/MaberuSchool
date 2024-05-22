import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Leaveedit({ navigation }) {

    const [Sectionvalue, setSectionValue] = useState(null);
    const { colors } = useTheme();

    const home = () => {
        navigation.navigate("Teacherpendingleave")
    }
    const [leavedate, setleavedate] = useState(new Date())
    const [openn, setOpenn] = useState(false)
    const [leavedata, setleavedata] = useState("")

    const [date, setdate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [data, setdata] = useState("")

    const [leaveid, setleaveid] = useState("")
    const leaveiddetails = (name) => {
        setleaveid(name)
        console.log(name);
    }

    const [Days, setDays] = useState("")
    const setDaysdetails = (name) => {
        setDays(name)
        console.log(name);
    }

    const [Reason, setReason] = useState("")
    const setReasondetails = (name) => {
        setReason(name)
        console.log(name);
    }
    const [role, setrole] = useState("")
    const [accessToken, setaccessToken] = useState("")
    const [refreshtoken, setrefreshToken] = useState("")


    const dataa = [
        { label: 'Casual leave', value: '1' },
        { label: 'Medical leave', value: '2' },
        { label: 'general leave', value: '3' },
    ];

    const getLeaveData = async (ID, role) => {
        try {
            const leaveresponse = await fetch("https://localhost.com:3000/get-Leave-by-id", {
                method: "POST",
                body: JSON.stringify({ user_id: ID, role: role }),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            }).then((Res) => { return Res.json() });

            const leavedata = await leaveresponse.then(data);
            if (leavedata.success) {
                setDays(leavedata.response.days)
                setReason(leavedata.response.reason)
                setleaveid(leavedata.response.id)
                setleavedate(leavedata.response.startDate)
                setdate(leavedata.response.endDate)
                setSectionValue(leavedata.response.type)

            } else {
                if (leavedata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);

                } else {
                    Alert.alert("this leave can't be updated right now")
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
        const leaveID = await AsyncStorage.getItem("leaveID");

        getLeaveData(leaveID, role);
        setleaveid(leaveid);
        setrole(role);
        setaccessToken(accessToken);
        setrefreshToken(refreshtoken);
    }

    const Editleave = async () => {

        try {
            const leaveresponse = await fetch("https://localhost.com:3000/update-teacher-by id", {
                method: "POST",
                body: JSON.stringify({ id: leaveid, days: Days, reason: Reason, role: role, type: Sectionvalue, startDate: leavedate, endDate: date, }),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            });

            const leavedata = await leaveresponse.then(data);
            if (leavedata.success) {
                Alert.alert('successfully leae has updated')
            } else {
                if (leavedata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                } else {
                    Alert.alert("this leave can't be updated right now")
                }
            }

        } catch (error) {
            Alert.alert(error)
        }

        const generateRefreshtoken = async (refreshtoken) => {
            try {
                const leaveresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
                    method: "POST", Authorization: `Bearer ${refreshtoken}`
                }).then((Res) => { return Res.JSON() });

                const leavedata = leaveresponse

                if (leaveresponse.success) {
                    AsyncStorage.setItem("accesstoken", leavedata.accesstoken)
                    AsyncStorage.setItem("refreshtoken", leavedata.refreshtoken)
                    await Editleave();
                }
            } catch (error) {
            }
        }
    }


    useEffect(() => {
        getuserdata()
    }, [])


    return (

        <SafeAreaView>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: colors.primary, }}>


                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}>Leave ID:</Text>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} value={leaveid} onChangeText={leaveiddetails} style={{ width: '84%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>

                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}>Apply Leave Type</Text>

                    <View >
                        <Dropdown
                            style={[styles.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
                            placeholderStyle={[styles.placeholderStyle, { color: colors.text }]}
                            selectedTextStyle={[styles.selectedTextStyle, { color: colors.text }]}

                            inputSearchStyle={styles.inputSearchStyle}
                            // iconStyle={styles.iconStyle}
                            data={dataa}
                            search
                            maxHeight={500}
                            labelField="label"
                            valueField="value"
                            placeholder="Apply Leave Type"
                            searchPlaceholder="Search..."
                            value={Sectionvalue}
                            onChange={item => {
                                setSectionValue(item.value);
                            }}
                        // renderLeftIcon={() => (
                        //     <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
                        // )}
                        />
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}> Leave Date</Text>

                    <Text style={{ fontSize: 16, color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}> From</Text>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 14 }}>
                        <Icon name='calendar-month-outline' color={colors.bg} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpenn(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Start date' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', alignSelf: 'center', }}>{leavedata ? leavedate.toLocaleDateString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={openn}
                            mode='date'
                            date={leavedate}
                            onConfirm={(date) => {
                                setOpenn(false)
                                setleavedate(date)
                                setleavedata(date)
                                console.log("==========>" + date)
                            }}
                            onCancel={() => {
                                setOpenn(false)
                            }}>
                        </DatePicker>

                    </View>


                    <Text style={{ fontSize: 16, color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}> To</Text>


                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 10 }}>
                        <Icon name='calendar-month-outline' color={colors.bg} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpen(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='End date' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', alignSelf: 'center', }}>{data ? date.toLocaleDateString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={open}
                            mode='date'
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setdate(date)
                                setdata(date)
                                console.log("==========>" + date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}>
                        </DatePicker>

                    </View>

                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 18, marginStart: 14, left: 6 }}>Number Of Days</Text>

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} value={Days} onChangeText={setDaysdetails} style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>

                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}>Enter Reason</Text>

                    <View style={{ marginTop: 5, marginStart: 5 }}>
                        <TextInput textColor={colors.text} placeholderTextColor={colors.text} multiline={true} value={Reason} onChangeText={setReasondetails} style={{ marginTop: 8, width: '87%', minHeight: 100, borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, alignSelf: 'center', }}></TextInput>
                    </View>

                    {/* <View style={{ marginTop: 11 }}>
                        <Button style={{ width: "43%", height: 48, backgroundColor: colors.bg, alignSelf: 'center' }} labelStyle={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 16, color: colors.primary }} onPress={home}>Update Leave</Button>
                    </View> */}
 <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 17, color: colors.text, fontWeight: 'bold' }} style={{ width: '52%', height: 55, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 10, margin:9}} onPress={home}>
                        SUBMIT
                    </Button >
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}
const styles = StyleSheet.create({
    dropdown: {

        width: '84%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.7,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 57,
        marginTop: 20,
    },
    icon: {
        margin: 10,

    },
    placeholderStyle: {
        fontSize: 16,
        height: 20,
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center', marginStart: 5,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
        marginStart: 6, fontWeight: '500'
    },
    // iconStyle: {
    //     width: 20,
    //     height: 20,
    // },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
