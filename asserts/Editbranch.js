import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Editbranch({navigation}) {

    const { colors } = useTheme();
   
    const home=()=>{
        navigation.navigate("Branchlist")
    }
    

    // const [branchid, setbranchid] = useState("")
    // const [accessToken, setaccessToken] = useState("")
    // const [refreshtoken, setrefreshToken] = useState("")
    // const [role, setrole] = useState("")

    // const [branchcode, setbranchcodedetails] = useState("")
    // const branchcodedetails = (name) => {
    //     setbranchcodedetails(name)
    //     console.log(name);
    // }
    // const [branchname, setbranchnamedetails] = useState("")
    // const branchnamedetails = (name) => {
    //     setbranchnamedetails(name)
    //     console.log(name);
    // }
    // const [address, setaddressdetails] = useState("")
    // const addressdetails = (name) => {
    //     setaddressdetails(name)
    //     console.log(name);
    // }

    // // <Text> Integration  </Text>

    // const getBranchData = async (ID) => {
    //     try {
    //         const branchresponse = await fetch("https://localhost.com:3000/getBranch-by-id", {
    //             method: "POST",
    //             body: JSON.stringify({ user_id: ID }),
    //             Authorization: `Bearer ${accessToken}`,
    //             headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
    //         }).then((Res) => { return Res.json() });

    //         const branchdata = await branchresponse.then(data);
    //         if (branchdata.success) {
    //             setname(branchdata.name);
    //             setaddressdetails(branchdata.address);
    //             setbranchnamedetails(branchdata.branchName);
    //             setTeacherValue(branchdata.teacherName);

    //         } else {
    //             if (branchdata.message == "invalid token") {
    //                 generateRefreshtoken(refreshtoken);
    //             } else {
    //                 Alert.alert('this teacher cant be updated right now')
    //             }
    //         }
    //     } catch (error) {
    //         Alert.alert(error)
    //     }
    // }

    // const getuserdata = async () => {
    //     const accessToken = await AsyncStorage.getItem("accessToken");
    //     const refreshtoken = await AsyncStorage.getItem("refreshtoken");
    //     const branchID = await AsyncStorage.getItem("branchID");
    //     const role = await AsyncStorage.getItem("role");

    //     getBranchData(branchID);
    //     setbranchid(branchid);
    //     setrole(role);
    //     setaccessToken(accessToken);
    //     setrefreshToken(refreshtoken);
    // }

    // const Editbranch = async () => {

    //     try {
    //         const branchresponse = await fetch("https://localhost.com:3000/update-branch-by id", {
    //             method: "POST",
    //             body: JSON.stringify({id:branchid, code: branchcode, branchName: branchname, address: address, teacherName: Teachervalue,role:role }),
    //             Authorization: `Bearer ${accessToken}`,
    //             headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
    //         });

    //         const branchdata = await branchresponse.then(data);
    //         if (branchdata.success) {
    //             Alert.alert('successfully branch has updated')
    //         } else {
    //             if (branchdata.message == "invalid token") {
    //                 generateRefreshtoken(refreshtoken);
    //             } else {
    //                 Alert.alert('this branch cant be updated right now')
    //             }
    //         }

    //     } catch (error) {
    //         Alert.alert(error)
    //     }

    //     const generateRefreshtoken = async (refreshtoken) => {
    //         try {
    //             const branchresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
    //                 method: "POST", Authorization: `Bearer ${refreshtoken}`
    //             }).then((Res) => { return Res.JSON() });

    //             const branchdata = branchresponse

    //             if (branchresponse.success) {
    //                 AsyncStorage.setItem("accesstoken", branchdata.accesstoken)
    //                 AsyncStorage.setItem("refreshtoken", branchdata.refreshtoken)
    //                 await Editbranch();
    //             }
    //         } catch (error) {
    //         }
    //     }
    // }

    // useEffect(() => {
    //     getuserdata()
    // }, [])

    // <Text> Integration End  </Text>

    return (

        <View style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'center' }}>

            <Image source={require("./Image/School.jpg")} style={{ height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, marginTop: 30 }}></Image>

            <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' placeholder='Branch ID' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

            <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' placeholder='Branch Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

            <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' placeholder='Director Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>


            <TextInput textColor={colors.text} placeholderTextColor={colors.text} multiline={true} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined'  placeholder='Address' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20, height: 200, justifyContent: 'center' }}></TextInput>

            <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.background, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 40 }}onPress={home}>
                EDIT BRANCH
            </Button >

            {/* <Text> Button view above  </Text> */}

        </View>
    )
}



