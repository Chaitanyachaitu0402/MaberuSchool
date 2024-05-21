
import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions } from 'react-native'
import { TextInput, useTheme, Button, } from 'react-native-paper'
import { RadioButton, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Addstudent({navigation}) {
    const home=()=>{
        navigation.navigate("Sectiondetails")
    }
    const [gender, setgender] = useState(" ");
    const { colors } = useTheme();

    const [Classvalue, setClassValue] = useState(null);
    const [Sectionvalue, setSectionValue] = useState(null);
    const [Branchvalue, setBranchValue] = useState(null);

    const [joindate, setjoindate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [joindata, setjoindata] = useState("")

    const [birthdate, setbirthdate] = useState(new Date())
    const [openn, setOpenn] = useState(false)
    const [birthdata, setbirthdata] = useState("")

    const branchdata = [
        { label: 'Branch 1', value: '1' },
        { label: 'Branch 2', value: '2' },
        { label: 'Branch 3', value: '3' },
    ];

    const data = [
        { label: 'LKG', value: '1' },
        { label: 'UKG', value: '2' },
        { label: 'Class 1', value: '3' },
        { label: 'Class 2', value: '4' },
        { label: 'Class 3', value: '5' },
        { label: 'Class 4', value: '6' },
        { label: 'Class 5', value: '7' },
        { label: 'Class 6', value: '8' },
        { label: 'Class 7', value: '9' },
        { label: 'Class 8', value: '10' },
        { label: 'Class 9', value: '11' },
        { label: 'Class 10', value: '12' },

    ];

    const dataa = [
        { label: 'Section A', value: '1' },
        { label: 'Section B', value: '2' },
        { label: 'Section C', value: '3' },
    ];

    const [studentid, setstudentid] = useState("")
    const [accessToken, setaccessToken] = useState("")
    const [role, setrole] = useState("")
    const [refreshtoken, setrefreshToken] = useState("")

    const [admission, setadmission] = useState("")
    const admissioniddetails = (name) => {
        setadmission(name)
        console.log(name);
    }
    const [mothername, setmothername] = useState("")
    const mothernamedetails = (name) => {
        setmothername(name)
        console.log(name);
    }
    const [motheroccupation, setmotheroccupation] = useState("")
    const occupationdetails = (name) => {
        setmotheroccupation(name)
        console.log(name);
    }
    const [fathername, setfathername] = useState("")
    const fathernamedetails = (name) => {
        setfathername(name)
        console.log(name);
    }
    const [fatheroccupation, setfatheroccupation] = useState("")
    const occupationdetailss = (name) => {
        setfatheroccupation(name)
        console.log(name);
    }
    const [mobilenumber, setmobilenumberdetails] = useState("")
    const mobilenumberdetails = (name) => {
        setmobilenumberdetails(name);
        console.log(name);
    }
    const [relation, setrelationdetails] = useState("")
    const relationdetails = (name) => {
        setrelationdetails(name)
        console.log(name);
    }
    const [relationmobilenumber, setrelationmobilenumberdetails] = useState("")
    const relationmobilenumberdetails = (name) => {
        setrelationmobilenumberdetails(name)
        console.log(name);
    }
    const [address, setaddressdetails] = useState("")
    const addressdetails = (name) => {
        setaddressdetails(name)
        console.log(name);
    }

    {/* <Text> Integration </Text> */ }

    const getStudentData = async (ID) => {
        try {
            const studentresponse = await fetch("https://localhost.com:3000/getStudent-by-id", {
                method: "POST",
                body: JSON.stringify({ user_id: ID }),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            }).then((Res) => { return Res.json() });

            const studentdata = await studentresponse.then(data);
            if (studentdata.success) {
                setname(studentdata.name);
                setbirthdate(studentdata.birth);
                setjoindate(studentdata.join);
                setgender(studentdata.gender);
                setmothername(studentdata.mother);
                setmotheroccupation(studentdata.motherOccupation)
                setfathername(studentdata.father);
                setfatheroccupation(studentdata.fatherOccupation)
                setmobilenumberdetails(studentdata.mobilenumber);
                setrelationdetails(studentdata.relation);
                setrelationmobilenumberdetails(studentdata.relationMobileNumber);
                setaddressdetails(studentdata.address);
                setClassValue(studentdata.class);
                setSectionValue(studentdata.section);
                setBranchValue(studentdata.branch);


            } else {
                if (studentdata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                } else {
                    Alert.alert('this student cant be updated right now')
                }
            }

        } catch (error) {
            Alert.alert(error)
        }
    }

    const getuserdata = async () => {
        const accessToken = await AsyncStorage.getItem("accessToken");
        const refreshtoken = await AsyncStorage.getItem("refreshtoken");
        const studentid = await AsyncStorage.getItem("studentID");
        const role = await AsyncStorage.getItem("role");

        getStudentData(studentid,role);
        setstudentid(studentid);
        setrole(role);

        setaccessToken(accessToken);
        setrefreshToken(refreshtoken);
    }
    const Editstudent = async () => {

        try {
            const studentresponse = await fetch("https://localhost.com:3000/update-student-by id", {
                method: "POST",
                body: JSON.stringify({ id: studentid, name: name, gender: gender, birth: birthdate, join: joindate, mother: mothername, motherOccupation: motheroccupation, father: fathername, fatherOccupation: fatheroccupation, mobileNumber: mobilenumber, relation: relation, mobile: relationmobilenumber, address: address, branch: Branchvalue, section: Sectionvalue,class:Classvalue ,role:role}),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            });

            const studentdata = await studentresponse.then(data);
            if (studentdata.success) {
                Alert.alert('successfully student has updated')
            } else {
                if (teacherdata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                } else {
                    Alert.alert('this student cant be updated right now')
                }
            }

        } catch (error) {
            Alert.alert(error)
        }

        const generateRefreshtoken = async (refreshtoken) => {
            try {
                const studentresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
                    method: "POST", Authorization: `Bearer ${refreshtoken}`
                }).then((Res) => { return Res.JSON() });

                const studentdata = studentresponse

                if (studentresponse.success) {
                    AsyncStorage.setItem("accesstoken", studentdata.accesstoken)
                    AsyncStorage.setItem("refreshtoken", studentdata.refreshtoken)
                    await Editstudent();
                }
            } catch (error) {
            }
        }
    }

    useEffect(() => {
        getuserdata()
    }, [])

    {/* <Text> Integration </Text> */ }

    return (

        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'center' }}>

                    <Image source={require("./Image/School.jpg")} style={{ height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, marginTop: 30 }}></Image>
                    <Text style={{ color: colors.text, fontSize: 20, alignSelf: 'center', marginTop: 10, fontWeight: 'bold' }}>ID:ST1234</Text>

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' placeholder='Student Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

                    <View style={{ width: '87%', height: 60, backgroundColor: 'transparent', marginTop: 20, justifyContent: 'center', alignSelf: 'center', borderColor: colors.text, borderWidth: 1 }}>

                        <View>
                            <RadioButton.Group value={gender} onValueChange={(gender) => { setgender(gender) }}>

                                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 13, columnGap: 35 }}>
                                    <Text style={{ color: colors.text, fontSize: 20 }}>Gender</Text>

                                    <View style={{ flexDirection: 'row', }}>
                                        <RadioButton value='male' color='black'></RadioButton>
                                        <Text style={{ textAlign: 'center', color: colors.text, fontSize: 20 }}>Male</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', }}>
                                        <RadioButton value='female' color='black'></RadioButton>
                                        <Text style={{ textAlign: 'center', color: colors.text, fontSize: 20 }}>Female</Text>
                                    </View>
                                </View>
                            </RadioButton.Group>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderRadius: 5, borderColor: colors.text, borderWidth: 1, marginTop: 20 }}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpenn(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Date of birth' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', }}>{birthdata ? birthdate.toLocaleDateString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={openn}
                            mode='date'
                            date={birthdate}
                            onConfirm={(date) => {
                                setOpenn(false)
                                setbirthdate(date)
                                setbirthdata(date)
                                console.log("==========>" + date)
                            }}
                            onCancel={() => {
                                setOpenn(false)
                            }}>
                        </DatePicker>

                    </View>

                    {/* <Text> Datepicker views above </Text> */}

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={admissioniddetails} value={admission} placeholder='Admission ID' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderRadius: 5, borderColor: colors.text, borderWidth: 1, marginTop: 20 }}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpen(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Date of Joining' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', }}>{joindata ? joindate.toLocaleDateString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={open}
                            mode='date'
                            date={joindate}
                            onConfirm={(date) => {
                                setOpen(false)
                                setjoindate(date)
                                setjoindata(date)
                                console.log("==========>" + date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}>
                        </DatePicker>

                    </View>

                    {/* <Text> Datepicker views above </Text> */}

                    <View>
                        <Dropdown
                    style={[styles.dropdown,{borderBottomColor: colors.text,borderColor:colors.text  }]}
                    placeholderStyle={[styles.placeholderStyle,{color:colors.text}]}
                    selectedTextStyle={[styles.selectedTextStyle,{color:colors.text}]}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={branchdata}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Branch"
                            searchPlaceholder="Search..."
                            value={Branchvalue}
                            onChange={item => {
                                setBranchValue(item.value);
                            }}
                            renderLeftIcon={() => (
                                <Icon style={styles.icon} color={colors.text} name="safety-goggles" size={20} />
                            )}
                        />
                    </View>

                    {/* <Text> Dropdown views above </Text> */}

                    <View>
                        <Dropdown
                    style={[styles.dropdown,{borderBottomColor: colors.text,borderColor: colors.text  }]}
                    placeholderStyle={[styles.placeholderStyle,{color: colors.text}]}
                    selectedTextStyle={[styles.selectedTextStyle,{color:colors.text}]}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Class"
                            searchPlaceholder="Search..."
                            value={Classvalue}
                            onChange={item => {
                                setClassValue(item.value);
                            }}
                            renderLeftIcon={() => (
                                <Icon style={styles.icon} color={colors.text} name="safety-goggles" size={20} />
                            )}
                        />
                    </View>

                    {/* <Text> Dropdown views above </Text> */}

                    <View>
                        <Dropdown
                    style={[styles.dropdown,{borderBottomColor: colors.text,borderColor:colors.text  }]}
                    placeholderStyle={[styles.placeholderStyle,{color:colors.text}]}
                    selectedTextStyle={[styles.selectedTextStyle,{color:colors.text}]}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={dataa}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Section"
                            searchPlaceholder="Search..."
                            value={Sectionvalue}
                            onChange={item => {
                                setSectionValue(item.value);
                            }}
                            renderLeftIcon={() => (
                                <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
                            )}
                        />
                    </View>

                    {/* <Text> Dropdown views above </Text> */}

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={mothernamedetails} value={mothername} placeholder='Mother Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={occupationdetails} value={motheroccupation} placeholder='Mother Occcupation' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={fathernamedetails} value={fathername} placeholder='Father Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={occupationdetailss} value={fatheroccupation} placeholder='Father Occupation' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={mobilenumberdetails} value={mobilenumber} placeholder='Mobile Number' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

                    <Card style={{ width: '87%', height: 180, marginTop: 20, alignSelf: 'center' }}>

                        <Text style={{ color: colors.text, fontSize: 16, marginStart: 10, fontWeight: 'bold', marginTop: 6 }}>Emergency Contact</Text>
                        <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={relationdetails} value={relation} placeholder='Relation' style={{ fontSize: 18, width: '96%', backgroundColor: 'transparent', borderRadius: 5, marginTop: 10, marginStart: 7 }}></TextInput>
                        <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={relationmobilenumberdetails} value={relationmobilenumber} placeholder='Mobile Number' style={{ fontSize: 18, width: '96%', backgroundColor: 'transparent', borderRadius: 5, marginTop: 10, marginStart: 7 }}></TextInput>

                    </Card>

                    {/* <Text> Card views above </Text> */}

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} multiline={true} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={addressdetails} value={address} placeholder='Address' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20, height: 200, justifyContent: 'center' }}></TextInput>

                    <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 30, }}onPress={home}>
                        EDIT STUDENT
                    </Button >

                    {/* <Text> Button views above </Text> */}


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    dropdown: {

        width: '87%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 50,
        marginTop: 30
    },
    icon: {
        margin: 10,
    },
    placeholderStyle: {
        fontSize: 16,
        height: 20,
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',

    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

{/* <Text> Dropdown style above </Text> */ }

