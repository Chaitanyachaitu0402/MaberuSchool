import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({navigation}) {
  const { colors } = useTheme();

  const Userlogin = async () => {
    navigation.navigate("schooldrawer")

  const [admission, setadmission] = useState("")
  const admissiondetails = (name) => {
    setadmission(name)
    console.log(name);
  }


  const [classname, setclassname] = useState("")
  const classnamedetails = (name) => {
    setclassname(name)
    console.log(name);
  }

  const [accessToken, setaccessToken] = useState("")
  const [refreshtoken, setrefreshToken] = useState("")


  {/* <Text> Integration </Text> */ }

  const getuserdata = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    const refreshtoken = await AsyncStorage.getItem("refreshtoken");
    setaccessToken(accessToken);
    setrefreshToken(refreshtoken);


    try {
      const userresponse = await fetch("https://localhost.com:3000/create-user", {
        method: "POST",
        body: JSON.stringify({ admission: admission, password: password, }),
        Authorization: `Bearer ${accessToken}`,
        headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
      }).then((Res) => { return Res.json() });

      const userdata = await userresponse.then(data);
      if (userdata.success) {
        Alert.alert('successfully userlogin has added')
        navigation.navigate("Notificationdetails")
      } else {
        if (userdata.message == "invalid token") {
          generateRefreshtoken(refreshtoken);
        } else {
          Alert.alert('this user cant be added right now')
        }
      }

    } catch (error) {
      Alert.alert(error)
    }
  }

  const generateRefreshtoken = async (refreshtoken) => {
    try {
      const userresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
        method: "POST", Authorization: `Bearer ${refreshtoken}`
      }).then((Res) => { return Res.JSON() });

      const userdata = userresponse
      if (userresponse.success) {
        AsyncStorage.setItem("accesstoken", userdata.accesstoken)
        AsyncStorage.setItem("refreshtoken", userdata.refreshtoken)
        await Userlogin();
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    getuserdata()
  }, [])
}
  {/* <Text> Integration End </Text> */ }

  return (

    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center' }}>

      <Image source={require("./Image/School.jpg")} style={{ height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', borderRadius: 10 }}></Image>


      <View style={{ width: '80%', height: 60, alignSelf: 'center', flexDirection: 'row', backgroundColor: colors.primary, borderColor: colors.primary, padding: 1, borderRadius: 25, marginTop: 40 }}>
        <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor='transparent' underlineColor='transparent' placeholder='Admission /Register id'  style={{ fontSize: 18, width: '100%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}></TextInput>
      </View>


      <View style={{ width: '80%', height: 60, alignSelf: 'center', flexDirection: 'row', backgroundColor: colors.primary, borderColor: colors.primary, padding: 1, borderRadius: 25, marginTop: 20 }}>
        <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor='transparent' underlineColor='transparent' placeholder='Password' style={{ fontSize: 18, width: '100%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}></TextInput>
      </View>

      <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 6, marginTop: 40 }} onPress={Userlogin}>
        SIGN IN
      </Button >


      {/* <Text> Button view above </Text> */}

      {/* <Text style={{ fontSize: 16, color: colors.primary, marginTop: 20, alignSelf: 'center' }}onPress={()=>navigation.navigate('Forgot')}>Forgot Password ? touch Here </Text> */}

    </View>
  )
}




