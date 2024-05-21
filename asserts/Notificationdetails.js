import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Alert } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Notificationsdetails(){


    {/* <Text>----Flatlist appearance----</Text> */ }

    const horizontalview = [{ number: '01', name: 'Conducting a Excursion Tour', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit.', time: '11-01-2023, 09:15AM', day: '2days ago' }]
    const apperancce = (data) => {
        console.log("data : ", data);
        return (
            <Card style={{ width: '100%', height: 150, margin: 4, borderRadius: 10, backgroundColor: colors.primary }}>


                <View style={{ flexDirection: 'row' }}>

                    <View>
                        <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >

                            <Text style={{ color: colors.primary, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{data.item.number}</Text>
                        </Card>
                    </View>

                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: colors.text, fontSize: 17, margin: 5, fontWeight: 'bold' }}>{data.item.name}</Text>
                        <Text style={{ color: colors.text, fontSize: 14, margin: 3, width: Dimensions.get('window').width / 1.4, }}>{data.item.description}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginStart: 16 }}>
                    <View>
                        <Text style={{ color: colors.text, fontSize: 14, marginStart: 16, marginTop: 4 }}>{data.item.time}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', columnGap: 4, marginRight: 3 }}>
                        <Icon name='clock-outline' color={colors.text} size={20} style={{ marginTop: 6, alignSelf: 'flex-end', }}></Icon>
                        <Text style={{ color: colors.text, fontSize: 14, marginTop: 0, alignSelf: 'flex-end', }}>{data.item.day}</Text>
                    </View>

                </View>



            </Card>
        )
    }

    {/* <Text>----Flatlist appearance----</Text> */ }

    const { colors } = useTheme();

    // const [role, setrole] = useState("")
    // const [accessToken, setaccessToken] = useState("")
    // const [refreshtoken, setrefreshToken] = useState("")
    // const [notificationid, setnotificationid] = useState("")
    // const [notificationdetailsData, setnotificationdetailsData] = useState([])

    {/* <Text>----Integration----</Text> */ }

    // const getNotificationData = async (ID, role) => {
    //     try {
    //         const notificationresponse = await fetch("https://localhost.com:3000/getNotification-by-id", {
    //             method: "POST",
    //             body: JSON.stringify({ user_id: ID, role: role }),
    //             Authorization: `Bearer ${accessToken}`,
    //             headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
    //         }).then((Res) => { return Res.json() });

    //         const notificationdata = await notificationresponse.then(data);
    //         if (notificationdata.success) {
    //             setnotificationdetailsData(notificationdetailsData.response)
    //             setTimeout(() => {
    //                 console.log('=========================>')
    //                 setisShimmering(true);
    //             }, 3000);
    //             setRoleValue(notificationdata.role)

    //         } else {
    //             if (notificationdata.message == "invalid token") {
    //                 generateRefreshtoken(refreshtoken);
    //             } else {
    //                 Alert.alert('this notification cant be updated right now')
    //             }
    //         }
    //     } catch (error) {
    //         Alert.alert(error)
    //     }
    // }

    // const getuserdata = async () => {
    //     const role = await AsyncStorage.getItem("role");
    //     const accessToken = await AsyncStorage.getItem("accessToken");
    //     const refreshtoken = await AsyncStorage.getItem("refreshtoken");
    //     const notificationID = await AsyncStorage.getItem("notificationID");

    //     getNotificationData(notificationID, role);
    //     setrole(role);
    //     setnotificationid(notificationid);
    //     setaccessToken(accessToken);
    //     setrefreshToken(refreshtoken);
    // }

    // const Notification = async () => {

    //     try {
    //         const notificationresponse = await fetch("https://localhost.com:3000/update-notification-by id", {
    //             method: "POST",
    //             body: JSON.stringify({ id: notificationid, role: role }),
    //             Authorization: `Bearer ${accessToken}`,
    //             headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
    //         });

    //         const notificationdata = await notificationresponse.then(data);
    //         if (notificationdata.success) {
    //             Alert.alert('successfully notification has updated')
    //         } else {
    //             if (notificationdata.message == "invalid token") {
    //                 generateRefreshtoken(refreshtoken);
    //             } else {
    //                 Alert.alert('this notification cant be updated right now')
    //             }
    //         }

    //     } catch (error) {
    //         Alert.alert(error)
    //     }

    //     const generateRefreshtoken = async (refreshtoken) => {
    //         try {
    //             const notificationresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
    //                 method: "POST", Authorization: `Bearer ${refreshtoken}`
    //             }).then((Res) => { return Res.JSON() });

    //             const notificationdata = notificationresponse

    //             if (notificationresponse.success) {
    //                 AsyncStorage.setItem("accesstoken", notificationdata.accesstoken)
    //                 AsyncStorage.setItem("refreshtoken", notificationdata.refreshtoken)
    //                 await Notification();
    //             }
    //         } catch (error) {
    //         }
    //     }
    // }

    // useEffect(() => {
    //     getuserdata()
    // }, [])

    {/* <Text>----Integration----</Text> */ }
    setTimeout(() => {
        console.log('=========================>')
        setisShimmering(true);
    }, 2000);

    return (

        <View style={{ backgroundColor: colors.primary, flex: 1}}>


                <View style={{ backgroundColor: colors.primary, flex: 1, }}>

                    {/* <View style={{ backgroundColor: colors.background, width: '100%', height: 80, flexDirection: 'row' }}>
                        <Icon name='arrow-left' color={colors.primary} size={23} style={{ width: 36, height: 36, borderRadius: 18, marginTop: 11, marginStart: 14 }} />
                        <Text style={{ fontSize: 20, color: colors.primary, marginStart: 5, marginTop: 10, fontWeight: 'bold' }}>Notification Details</Text>
                    </View> */}

                    {/* <Text>----Flatlist view----</Text> */}

                    <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>

                    {/* <Text>----Flatlist view----</Text> */}

                </View>



            {/* <Text>----Shimmer style view above----</Text> */}

        </View>
    );
};



{/* <Text>----Shimmer styles above----</Text> */ }


