
import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Alert } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { Text, Image, Dimensions, ScrollView } from 'react-native'
import { useTheme, Card, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Noticeadd({ navigation }){
   
    const home=()=>{
        navigation.navigate("schooldrawer3")
    }
    
    const { colors } = useTheme();

    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (key) => {
        setCheckedItems({ ...checkedItems, [key]: !checkedItems[key] });
    };

    const [role, setrole] = useState("")
    const [accessToken, setaccessToken] = useState("")
    const [refreshtoken, setrefreshToken] = useState("")
    
    const [noticeid, setnoticeid] = useState("")
    const noticeiddetails = (name) => {
        setnoticeid(name)
        console.log(name);
    }

    const [Name, setName] = useState("")
    const setNamedetails = (name) => {
        setName(name)
        console.log(name);

    }
    const [Description, setDescription] = useState("")
    const Descriptiondetails = (name) => {
        setDescription(name)
        console.log(name);
    }
    const [Note, setNote] = useState("")
    const Notedetails = (name) => {
        setNote(name)
        console.log(name);
    }

    const getNoticeData = async (ID, role) => {
        try {
            const noticeresponse = await fetch("https://localhost.com:3000/get-notice-by-id", {
                method: "POST",
                body: JSON.stringify({ noticeID: ID, role: role }),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            })

            const noticedata = await noticeresponse.then(data);
            if (noticedata.success) {
                setName(noticedata.response.name);
                setDescription(noticedata.response.description);
                setNote(noticedata.response.note);
                setnoticeid(noticedata.response.id)

            } else {
                if (noticedata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                } else {
                    Alert.alert('this notice cant be updated right now')
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
        const noticeID = await AsyncStorage.getItem("noticeID");

        getNoticeData(noticeID, role);
        setnoticeid(noticeid);
        setrole(role);
        setaccessToken(accessToken);
        setrefreshToken(refreshtoken);
    }

    const Editnotice = async () => {

        try {
            const noticeresponse = await fetch("https://localhost.com:3000/update-notice-by id", {
                method: "POST",
                body: JSON.stringify({ name: Name, id: noticeid,role: role, description: Description, note: Note }),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            });

            const noticedata = await noticeresponse.then(data);
            if (noticedata.success) {
                Alert.alert('successfully notice has updated')
            } else {
                if (noticedata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                    
                    navigation.navigate('login')

                } else {
                    Alert.alert("this notice can't be updated right now")
                }
            }

        } catch (error) {
            Alert.alert(error)
        }
    }

    const generateRefreshtoken = async (refreshtoken) => {
        try {
            const noticeresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
                method: "POST", Authorization: `Bearer ${refreshtoken}`
            }).then((Res) => { return Res.JSON() });

            const noticedata = noticeresponse

            if (noticeresponse.success) {
                AsyncStorage.setItem("accesstoken", noticedata.accesstoken)
                AsyncStorage.setItem("refreshtoken", noticedata.refreshtoken)
                await Editnotice();
            }else{
                
            }
        } catch (error) {
        }
    }


    useEffect(() => {
        getuserdata()
    }, [])

    return (
        <ScrollView>

            <SafeAreaView>


                <View style={{ backgroundColor: colors.primary, flex: 1,height:900 }}>


                    {/* <View style={{ width: '100%', height: 77, backgroundColor: colors.background, flexDirection: 'row', columnGap: 14 }}>
                        <Icon name='arrow-left' color={colors.primary} size={24} style={{ marginTop: 20 }}></Icon>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primary, marginTop: 23 }}>Edit information</Text>
                    </View> */}

                 


                    <View style={{ marginTop: 5, marginStart: 5 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 23, marginStart: 7 }}>Title</Text>

                        <TextInput  textColor={colors.text} placeholderTextColor={colors.text} value={Name} onChangeText={setNamedetails} style={{ width: '88%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 6, alignSelf: 'center' }}>

                        </TextInput>
                    </View>

                    <View style={{ marginTop: 5, marginStart: 5 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 19, marginStart: 7 }}>Description</Text>
                        <TextInput textColor={colors.text} placeholderTextColor={colors.text} multiline={true} value={Description} onChangeText={Descriptiondetails} style={{ width: '88%', minHeight: 100, borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, alignSelf: 'center', marginTop: 6 }}></TextInput>
                    </View>

                    
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 23, marginStart: 9 }}>Send to:</Text>


                    <View style={{margin:2}}>
                       
                        <Checkbox.Item
                            label="Parents"
                            status={checkedItems['checkbox2'] ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange('checkbox2')}
                            color={colors.background}
                            mode='android'

                        />

                   


                        <Button style={{ width: "55%", height: 48, backgroundColor: colors.bg, alignSelf: 'center' }} labelStyle={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 13,color:colors.primary }}onPress={home}>submit</Button>



                    </View>



                </View>
            </SafeAreaView>
        </ScrollView>

    );
};




