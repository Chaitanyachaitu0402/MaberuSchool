import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image,Alert } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Addbranch({navigation}) {

    const { colors } = useTheme();
    const [Teachervalue, setTeacherValue] = useState(null);
    const data = [
        { label: 'Teacher 1', value: '1' },
        { label: 'Teacher 2', value: '2' },
        { label: 'Teacher 3', value: '3' },
    ];

    const [accessToken, setaccessToken] = useState("")
    const [refreshtoken, setrefreshToken] = useState("")

    const [branchcode, setbranchcodedetails] = useState("")
    const branchcodedetails = (name) => {
        setbranchcodedetails(name)
        console.log(name);
    }
    const [branchname, setbranchnamedetails] = useState("")
    const branchnamedetails = (name) => {
        setbranchnamedetails(name)
        console.log(name);
    }
    const [address, setaddressdetails] = useState("")
    const addressdetails = (name) => {
        setaddressdetails(name)
        console.log(name);
    }
    
    {/* <Text> Integration </Text> */ }

    const getuserdata = async () => {
        const accessToken = await AsyncStorage.getItem("accessToken");
        const refreshtoken = await AsyncStorage.getItem("refreshtoken");
        setaccessToken(accessToken);
        setrefreshToken(refreshtoken);
    }
    const Addbranch = async () => {
        try {
            const branchresponse = await fetch("https://localhost.com:3000/create-branch", {
                method: "POST",
                body: JSON.stringify({ code: branchcode, branchName: branchname, address: address, teacherName: Teachervalue }),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            }).then((Res) => { return Res.json() });

            const branchdata = await branchresponse.then(data);
            if (branchdata.success) {
                Alert.alert('successfully branch has added')
            } else {
                if (branchdata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                } else {
                    Alert.alert('this branch cant be added right now')
                }
            }

        } catch (error) {
            Alert.alert(error)
        }

        const generateRefreshtoken = async (refreshtoken) => {
            try {
                const branchresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
                    method: "POST", Authorization: `Bearer ${refreshtoken}`
                }).then((Res) => { return Res.JSON() });

                const branchdata = branchresponse

                if (branchresponse.success) {
                    AsyncStorage.setItem("accesstoken", branchdata.accesstoken)
                    AsyncStorage.setItem("refreshtoken", branchdata.refreshtoken)
                    await Addbranch();
                }
            } catch (error) {

            }
        }
    }
    useEffect(() => {
        getuserdata()
    }, [])

    {/* <Text> Integration End </Text> */ }

    return (

        <View style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'center' }}>

            <Image source={require("./Image/School.jpg")} style={{ height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, marginTop: 30 }}></Image>

            <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={branchcodedetails} value={branchcode} placeholder='Branch Code' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

            <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={branchnamedetails} value={branchname} placeholder='Branch Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

            <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined'  placeholder='Branch Director' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>


            <TextInput textColor={colors.text} placeholderTextColor={colors.text} multiline={true} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={addressdetails} value={address} placeholder='Address' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20, height: 200, justifyContent: 'center' }}></TextInput>

            <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.background, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 40 }} onPress={()=>navigation.navigate('Branchlist')}>
                ADD BRANCH
            </Button >

            {/* <Text> Button view above  </Text> */}

        </View>
    )
}



{/* <Text> Dropdown styles </Text> */ }