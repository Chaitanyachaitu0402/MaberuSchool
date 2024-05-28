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
   const [branchname, setbranchname] = useState("")
    const branchnamedetails = (name) => {
      setbranchname(name)
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


  // Inside your React Native component
    const handleGetStarted2 = async () => {
      try {
        const response = await fetch('http://10.0.2.2:3000/class/create_class', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            class_name: classname,
            branch_name:branchname
          })
        });

        if (!response.ok) {
          if (response.status === 401) {
            await handleRefreshToken();
            return;
          }
          throw new Error('Failed to create section. Status: ' + response.status);
        }

        const data = await response.json();

        if (data.success) {
          Alert.alert("Success", "New Class Created Successfully");
          navigation.navigate('Classlist');
        } else {
          Alert.alert("Error", "Failed to create section");
        }
      } catch (error) {
        Alert.alert("Error", error.message);
      }
    };



  {/* <Text> Integration End </Text> */ }

  return (

    <View style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'center' }}>

      <Image source={require("./Image/School.jpg")} style={{ height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, marginTop: 30 }}></Image>

      <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={classnamedetails} value={classname} placeholder='Class Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }} left={<TextInput.Icon icon={'account'} > </TextInput.Icon>}></TextInput>

      <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={branchnamedetails} value={branchname} placeholder='Branch Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }} left={<TextInput.Icon icon={'domain'} > </TextInput.Icon>}></TextInput>

      <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.background, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 40 }} onPress={handleGetStarted2}>
        ADD 
      </Button >

      {/* <Text> Button view above </Text> */}

    </View>

  )
}
