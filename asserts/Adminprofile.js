import React, { useEffect } from 'react';
import { View, Text, Image, } from 'react-native'
import { useTheme, Card, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
  const { colors } = useTheme();
  
  const home=()=>{
    navigation.navigate("Admineditprofile")
}
  {/* <Text> Integration </Text> */ }

  const Profile = async () => {
    const employee_id = AsyncStorage.getItem("employeeid")
    AsyncStorage.getItem("employeeID");
    AsyncStorage.getItem("employeename");
    AsyncStorage.getItem("employeemailid");
    AsyncStorage.getItem("employeephone");

    try {
      const emploginresponse = await fetch("https://localhost.com:3000/get-user-by-userId", {
        method: "POST",
        body: JSON.stringify({ id: employee_id }),
      }).then((Res) => { return Res.JSON() });
      const empdata = emploginresponse
      if (emploginresponse.success) {
        empdata
      } else {
        Alert.alert('Credentials not found')
      }

    } catch (error) {

    }
  }

  useEffect(() => {
    Profile();
  }, [])

  {/* <Text> Integration End </Text> */ }


  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>

      <View style={{ backgroundColor: colors.background, height: 150, width: '100%', borderBottomRightRadius: 44, borderBottomLeftRadius: 44 }}>

       
        <View style={{ alignSelf: 'center', marginTop: 50 }}>
          <Card style={{ width: 100, height: 100, borderRadius: 20, marginTop: 20, marginStart: 15 }}>
            <Image source={require("./Image/profilepic.jpg")} resizeMode='cover' style={{ height: "100%", width: '100%', justifyContent: 'center', borderRadius: 20, alignSelf: 'center', marginTop: 0 }}></Image>
          </Card>
        </View>

        <Text style={{ color: colors.text, fontSize: 20, fontWeight: 'bold', marginTop: 20, alignSelf: 'center' }}>Elementary High School</Text>
        <Text style={{ color: colors.text, fontSize: 18, marginTop: 5, alignSelf: 'center' }}>User</Text>
        <Text style={{ color: colors.text, fontSize: 18, marginTop: 5, alignSelf: 'center' }}>user@gmail.com</Text>
        <Text style={{ color: colors.text, fontSize: 18, marginTop: 5, alignSelf: 'center' }}>9876543210</Text>

        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center' }}>
          <Text style={{ color: colors.text, fontSize: 18, marginTop: 5, alignSelf: 'center' }}>Years of Experience :</Text>
          <Text style={{ color: colors.text, fontSize: 18, marginTop: 5, alignSelf: 'center' }}>10</Text>
        </View>

        <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 6, marginTop: 70 }}onPress={home} >
          Edit Profile
        </Button >

      </View>

    </View>
  )
}

