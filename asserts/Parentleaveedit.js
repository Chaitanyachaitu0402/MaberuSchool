import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';


export default function Parentleaveadd({navigation}) {
    const { colors } = useTheme();
    const [classes, setclasses] = useState(null);

    const [section, setsections] = useState(null);
    const data1 = [
        { label: 'Class I', value: '1' },
        { label: 'Class II', value: '2' },
        { label: 'Class III', value: '3' },
        { label: 'Class IV', value: '4' },
        { label: 'Class V', value: '5' },
        { label: 'Class VI', value: '6' },
        { label: 'Class VII', value: '7' },
        { label: 'Class VIII', value: '8' },
        { label: 'Class IX', value: '9' },
        { label: 'Class X', value: '10' },

      ];
      const dataa = [
                { label: 'Section A', value: '1' },
                { label: 'Section B', value: '2' },
                { label: 'Section C', value: '3' },

              ];
    const [leavedate, setleavedate] = useState(new Date())
    const [openn, setOpenn] = useState(false)
    const [leavedata, setleavedata] = useState("")

    const [date, setdate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [data, setdata] = useState("")


    const [id, setid] = useState("")
            const iddetails = (name) => {
                setid(name)
                console.log(name);
            }

    const [name, setname] = useState("")
            const namedetails = (name) => {
                setname(name)
                console.log(name);
            }

const [classname, setclass] = useState("")
            const classdetails = (name) => {
                setclass(name)
                console.log(name);
            }

const [sectionname, setsection] = useState("")
            const sectiondetails = (name) => {
                setsection(name)
                console.log(name);
            }

const [reasonname, setreason] = useState("")
            const reasondetails = (name) => {
                setreason(name)
                console.log(name);
            }

    const home=()=>{
        navigation.navigate("Pendingleavedetails")
    }

    const handleGetStarted2 = async () => {
                    try {
                        const response = await fetch('http://10.0.2.2:3000/student-leaves/update-student-leave', {
                            method: 'POST',
                            body: JSON.stringify({
                                name:name,
                                student_id:id,
                                class:classname,
                                section:sectionname,
                                from:leavedate,
                                to:date,
                                reason:reasonname
                            }),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                        });

                        console.log("done2", response)
                        if (!response.ok) {
                            throw new Error('Failed to details. Status: ' + response.status);
                        }
                        const data = await response.json();
                        console.log("Student Leave details created ===> ", data)
                        if (data.success) {
                            // Show alert box
                            Alert.alert("Your Leave has been Submitted");
                            // Navigate to Sectiondetails screen
                            navigation.navigate('Pendingleavedetails');
                        } else {
                            Alert.alert("Error in creating the student details");
                        }
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                };

    return (
        // <SafeAreaView>
            <ScrollView>


                <View style={{ flex: 1, backgroundColor: colors.primary, height:Dimensions.get('window').height}}>



                   <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={iddetails} value={id} placeholder='Admission Id' style={{ fontSize: 18, width: '89%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>
                   <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={namedetails} value={name} placeholder='Name' style={{ fontSize: 18, width: '89%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>
                   <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={classdetails} value={classname} placeholder='Class' style={{ fontSize: 18, width: '89%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>
                   <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={sectiondetails} value={sectionname} placeholder='Section' style={{ fontSize: 18, width: '89%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>




                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}> Leave Date</Text>

                    <View style={{ flexDirection: 'row', marginStart: 11, margin: 9, right: 10 }}>

                        <View style={{ marginTop: 1, marginStart: 13 }}>

                            <Text style={{ fontSize: 17, color: colors.text, marginTop: 7, marginStart: 14, }}> From</Text>
                            <View style={{ width: '62%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 5, marginStart: 7 }}>
                                <Icon name='calendar-month-outline' color={colors.bg} size={24} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpenn(true) }} />
                                <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='start date' style={{ fontSize: 14, width: '86%', backgroundColor: 'transparent', }}>{leavedata ? leavedate.toLocaleDateString() : ""}</TextInput>

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






                        </View>
                        <View style={{ marginTop: 1,  }}>

                            <Text style={{ fontSize: 17, color: colors.text, marginTop: 7, }}>To </Text>
                            <View style={{ width: '62%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 5, }}>
                                <Icon name='calendar-month-outline' color={colors.bg} size={24} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpen(true) }} />
                                <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='start date' style={{ fontSize: 14, width: '86%', backgroundColor: 'transparent', }}>{data ? date.toLocaleDateString() : ""}</TextInput>

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


                        </View>

                    </View>

                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 8, marginStart: 14, left: 6 }}>Reason</Text>

                    <TextInput onChangeText={reasondetails} value={reasonname} textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined'  multiline={true} style={{ fontSize: 18, width: '88%',height:120, backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 17 }}></TextInput>

                        <Button style={{ width: "43%", height: 48, backgroundColor: colors.bg, alignSelf: 'center',marginTop:9 }} labelStyle={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 16,color:colors.primary }} onPress={handleGetStarted2}>Save</Button>

                </View>
            </ScrollView>

        // </SafeAreaView>

    )
}
const style = StyleSheet.create({
    dropdown: {

        width: '87%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.7,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 57,
        marginTop: 12,backgroundColor:'#ffffff'
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

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});