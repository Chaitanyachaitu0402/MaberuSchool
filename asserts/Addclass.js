import React, { useState, useEffect } from 'react';
import { View, Image, Alert } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Addclass({navigation}) {
  const home=()=>{
    navigation.navigate("Classlist")
}

  const { colors } = useTheme();

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
  }

  const Addclass = async () => {
    try {
      const classresponse = await fetch("https://localhost.com:3000/create-class", {
        method: "POST",
        body: JSON.stringify({ className: classname }),
        Authorization: `Bearer ${accessToken}`,
        headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
      })

      const classdata = await classresponse.then(data);
      if (classdata.success) {
        Alert.alert('successfully class has added')
      } else {
        if (classdata.message == "invalid token") {
          generateRefreshtoken(refreshtoken);
        } else {
          Alert.alert('this class cant be added right now')
        }
      }
    } catch (error) {
      Alert.alert(error)
    }


    const generateRefreshtoken = async (refreshtoken) => {
      try {
        const classresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
          method: "POST", Authorization: `Bearer ${refreshtoken}`
        }).then((Res) => { return Res.JSON() });

        const classdata = classresponse

        if (classresponse.success) {
          AsyncStorage.setItem("accesstoken", classdata.accesstoken)
          AsyncStorage.setItem("refreshtoken", classdata.refreshtoken)
          await Addclass();
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

      <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={classnamedetails} value={classname} placeholder='Class Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }} left={<TextInput.Icon icon={'account'} > </TextInput.Icon>}></TextInput>

      <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.background, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 40 }} onPress={home}>
        ADD 
      </Button >

      {/* <Text> Button view above </Text> */}

    </View>

  )
}
