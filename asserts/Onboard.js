import { View, Text, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme, Card } from 'react-native-paper';


export default function Onboard({ navigation }) {

    const { colors } = useTheme();

// const home=()=>{
//     navigation.navigate("schooldrawer")
// }
  const home = async () => {
    navigation.navigate("Login")
  }


  const home2 = async () => {
    navigation.navigate("schooldrawer2")
  }
  const home3 = async () => {
    navigation.navigate("schooldrawer3")
  }
  const home4 = async () => {
    navigation.navigate("schooldrawer4")
  }
  
    return (

        <View style={{ flex: 1, backgroundColor:colors.background}}>

            <Image source={require("./Image/School.jpg")} style={{ width: '40%', height: 120, alignSelf: 'center', marginTop: 30, justifyContent: 'center', borderRadius: 11 }}></Image>

            <View style={{ flexDirection: 'row', marginTop: 35, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 10,right:9 }}>
                <Card style={{ width: "40%", height: 130, marginStart: 13 }}onPress={home4}>
                    <Card.Cover source={require("./Image/parent.png")} style={{ width: "40%", height: 60, alignSelf: "center", marginTop: 9 }}></Card.Cover>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', marginTop: 13,color:colors.text}}>Parent App</Text>
                </Card>

                <Card style={{ width: "40%", height: 130, marginStart: 13 }}onPress={home3}>
                    <Card.Cover source={require("./Image/teacher.png")} style={{ width: "40%", height: 60, alignSelf: "center", marginTop: 9 }}>
                    </Card.Cover>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', marginTop: 13 ,color:colors.text}}>Teacher App</Text>
                </Card>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 34, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 10,right:9 }}>
                <Card style={{ width: "40%", height: 130, marginStart: 13 }}onPress={home} >
                    <Card.Cover source={require("./Image/principal.png")} style={{ width: "40%", height: 60, alignSelf: "center", marginTop: 9 }}></Card.Cover>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', marginTop: 13 ,color:colors.text}}>Principal App</Text>
                </Card>

                <Card style={{ width: "40%", height: 130, marginStart: 13 }} onPress={home2}>
                    <Card.Cover source={require("./Image/head.png")} style={{ width: "40%", height: 60, alignSelf: "center", marginTop: 9 }}>
                    </Card.Cover>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', marginTop: 13 ,color:colors.text}}>Headmaster App</Text>
                </Card>
            </View>


        </View>
    )
}




