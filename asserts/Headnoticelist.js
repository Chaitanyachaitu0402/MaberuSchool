import { View, Text, Image, Dimensions, FlatList, StyleSheet,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';



export default function Headnoticelist ()  {

  const { colors } = useTheme()
  const [accessToken, setaccessToken] = useState("")
  const [refreshtoken, setrefreshToken] = useState("")
  const [role, setrole] = useState("")
  const [noticeData, setnoticeData] = useState([])

  const horizontalview = [{ name: 'principal', date: '11-01-2023, 09:15 AM', description: 'School Anniversary celebrations in next month', text: '2days ago' }, { name: 'principal', date: '19-03-2023, 10:15AM', description: 'Pongal Holidays from sundat to saturday', text: '3days ago' }, { name: 'principal', date: '22-03-2023, 11:15AM', description: 'Childrens sport meet conducted in tuesday', text: '5days ago' }, { name: 'principal', date: '11-01-2023, 09:15 AM', description: 'Annual exams start from next weak ', text: '6days ago' }]
  const apperancce = (data) => {
    console.log("data:", data);

    return (


      <Card style={{ width: '95%',  alignSelf: 'center', backgroundColor: 'white', margin:9, padding: 5 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
          <Text style={{ color: colors.background, fontSize: 18, fontWeight: 'bold', marginStart: 9, marginTop: 5 }}>{data.item.name} </Text>
        </View>

        <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginStart: 12, marginTop: 6 }}>{data.item.description} </Text>
        <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal', marginStart: 12, marginTop: 17 }}>{data.item.date} </Text>

        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', columnGap: 4, marginRight: 3 }}>
          <Icon name='clock-outline' color={colors.text} size={17} style={{ marginTop: 4, alignSelf: 'flex-end', bottom: 15 }}></Icon>
          <Text style={{ color: colors.text, fontSize: 14, alignSelf: 'flex-end', bottom: 15 }}>{data.item.text} </Text>
        </View>

      </Card>

    )
  }


  // const getNoticeListData = async (noticeCode, role) => {
  //   try {
  //     const noticelistresponse = await fetch("https://localhost.com:3000/get-all-Noticelist", {
  //       method: "POST",
  //       body: JSON.stringify({ noticeCode: noticeCode, role: role }),
  //       Authorization: `Bearer ${accessToken}`,
  //       headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
  //     }).then((Res) => { return Res.json() });

  //     const noticelistdata = await noticelistresponse.then(data);
  //     if (noticelistdata.success) {
  //       setnoticeData(noticelistdata.response)
  //       setTimeout(() => {
  //         console.log('=========================>')
  //         setisShimmering(true);
  //       }, 3000);

  //     } else {
  //       if (noticelistdata.message == "invalid token") {
  //         generateRefreshtoken(refreshtoken);
  //       } else {
  //         Alert.alert("this noticelist can't be updated right now")
  //       }
  //     }
  //   } catch (error) {

  //   }
  // }

  // const getuserdata = async () => {
  //   const accessToken = await AsyncStorage.getItem("accessToken");
  //   const refreshtoken = await AsyncStorage.getItem("refreshtoken");
  //   const noticeCode = await AsyncStorage.getItem("noticecode");
  //   setaccessToken(accessToken);
  //   setrefreshToken(refreshtoken);
  //   setrole(role);
  //   getNoticeListData(noticeCode, role);
  // }


  // useEffect(() => {
  //   getuserdata()
  // }, [])






  return (
    



        <View style={{ backgroundColor: colors.primary, flex: 1,}}>

        



          <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>
        </View>


    


  )
}



