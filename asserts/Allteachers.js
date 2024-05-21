import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme, Menu } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Teacherlist({ navigation }) {
    const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

    const openMenu = (index) => setVisibleMenuIndex(index);
    const closeMenu = () => setVisibleMenuIndex(null);

    {/* <Text>----Flatlist apperance----</Text> */ }

    const horizontalview5 = [{ number: '01', name: 'NAME: Ravi', id: 'ID NO : 12345', section: 'SECTION : A', Class: 'CLASS : IV', subject: 'SUBJECT : Hindi' }, { number: '02', name: 'NAME: Leela', id: 'ID NO : 27896', section: 'SECTION : B', Class: 'CLASS : II', subject: 'SUBJECT : Telugu' }, { number: '03', name: 'NAME: Vamsi', id: 'ID NO : 98765', section: 'SECTION : C', Class: 'CLASS : III', subject: 'SUBJECT : English' }, { number: '04', name: 'NAME: Rahul', id: 'ID NO : 12334', section: 'SECTION : A', Class: 'CLASS : III', subject: 'SUBJECT : Physics' }, { number: '05', name: 'NAME: Swetha', id: 'ID NO : 12344', section: 'SECTION : C', Class: 'CLASS : II', subject: 'SUBJECT : Sanskrit' }, { number: '06', name: 'NAME: Praneeth', id: 'ID NO : 12332', section: 'SECTION : B', Class: 'CLASS : IV', subject: 'SUBJECT : Maths' }, { number: '07', name: 'NAME: Lakshmi', id: 'ID NO : 12346', section: 'SECTION : A', Class: 'CLASS : III', subject: 'SUBJECT : Chemistry' }, { number: '08', name: 'NAME: Rajesh', id: 'ID NO : 12333', section: 'SECTION : C', Class: 'CLASS : IV', subject: 'SUBJECT : Telugu' }, { number: '09', name: 'NAME: Ramu', id: 'ID NO : 12112', section: 'SECTION : C', Class: 'CLASS : IV', subject: 'SUBJECT : English' }, { number: '10', name: 'NAME: Harika', id: 'ID NO : 12421', section: 'SECTION : B', Class: 'CLASS : IV', subject: 'SUBJECT : Maths' },]

    const apperancce = (data, index) => {
        const isMenuVisible = visibleMenuIndex === index;

        return (

            <Card style={{ width: '93%', margin: 8, borderRadius: 10, backgroundColor: colors.primary, alignSelf: 'center' }} onPress={() => navigation.navigate('Teacherdetails')}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >

                            <Text style={{ color: colors.primary, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{data.item.number}</Text>

                        </Card>

                        <View style={{ justifyContent: 'center' }}>

                            <Text style={{ color: colors.text, fontSize: 16, margin: 5 }}>{data.item.name}</Text>
                            <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>{data.item.id}</Text>
                            <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>{data.item.section}</Text>
                            <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>{data.item.Class}</Text>

                            <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>{data.item.subject}</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', margin: 5 }}>

                        <Menu
                            visible={isMenuVisible}
                            onDismiss={closeMenu}
                            anchor={<Icon name='dots-vertical' size={26} onPress={() => openMenu(index)} />}
                        >
                            <Menu.Item title="Edit" onPress={() => navigation.navigate("Editstaff")} />
                            <Menu.Item title="Delete" />
                        </Menu>

                    </View>



                </View>


            </Card>
        )
    }

    {/* <Text>----Flatlist apperance----</Text> */ }


    const { colors } = useTheme();
    // const [accessToken, setaccessToken] = useState("")
    // const [refreshtoken, setrefreshToken] = useState("")
    // const [role, setrole] = useState("")
    // const [branchCode, setbranchCode] = useState("")
    // const [teacherData, setteacherDataa] = useState([])

    // {/* <Text>----Integration----</Text> */ }

    // const getTeacherListData = async (branchCode, role) => {
    //     try {
    //         const teacherlistresponse = await fetch("https://localhost.com:3000/get-all-Teacherlist", {
    //             method: "POST",
    //             body: JSON.stringify({ branchCode: branchCode, role: role }),
    //             Authorization: `Bearer ${accessToken}`,
    //             headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
    //         }).then((Res) => { return Res.json() });

    //         const teacherlistdata = await teacherlistresponse.then(data);
    //         if (teacherlistdata.success) {
    //             setteacherDataa(teacherlistdata.response)
    //             setTimeout(() => {
    //                 console.log('=========================>')
    //                 setisShimmering(true);
    //             }, 3000);

    //         } else {
    //             if (teacherlistdata.message == "invalid token") {
    //                 generateRefreshtoken(refreshtoken);
    //             } else {
    //                 Alert.alert('this teacherlist cant be updated right now')
    //             }
    //         }

    //     } catch (error) {
    //         Alert.alert(error)
    //     }
    // }

    // const getuserdata = async () => {
    //     const accessToken = await AsyncStorage.getItem("accessToken");
    //     const refreshtoken = await AsyncStorage.getItem("refreshtoken");
    //     const teacherCode = await AsyncStorage.getItem("teacherCode");
    //     setbranchCode(branchCode);
    //     setaccessToken(accessToken);
    //     setrefreshToken(refreshtoken);
    //     setrole(role);
    //     getTeacherListData(teacherCode, role);
    // }

    // useEffect(() => {
    //     getuserdata()
    // }, [])

    {/* <Text>----Integrtaion----</Text> */ }

    return (



        <View style={{ backgroundColor: colors.primary, flex: 1 }}>



            {/* <Text>----Flatlist view----</Text> */}

            <FlatList
                data={horizontalview5}
                renderItem={({ item, index }) => apperancce({ item }, index)}
                contentContainerStyle={{
                    width: Dimensions.get('window').width
                }}
            />
            {/* <Text>----Flatlist view----</Text> */}

        </View>


    );
}



