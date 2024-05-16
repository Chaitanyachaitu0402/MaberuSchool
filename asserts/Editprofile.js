// import React, { useEffect, useState } from 'react'

// import { View, Text, Image, Dimensions, } from 'react-native'
// import { useTheme, Button, TextInput } from 'react-native-paper'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// export default function Editprofile({navigation}) {
//   const { colors } = useTheme();
//   const home=()=>{
//     navigation.navigate("schooldrawer")
// }
//   const [schoolname, setschoolname] = useState("")
//   const schoolnamedetails = (name) => {
//     setschoolname(name)
//     console.log(name);
//   }
//   const [username, setusername] = useState("")
//   const usernamedetails = (name) => {
//     setusername(name)
//     console.log(name);
//   }
//   const [email, setemail] = useState("")
//   const emaildetails = (name) => {
//     setemail(name)
//     console.log(name);
//   }
//   const [phonenumber, setphonenumber] = useState("")
//   const phonenumberdetails = (name) => {
//     setphonenumber(name)
//     console.log(name);
//   }

//   {/* <Text>Integration</Text> */ }

//   const Editprofile = async () => {
//     const userid = AsyncStorage.getItem("userid");
//     const accessToken = AsyncStorage.getItem("accessToken");
//     const refreshtoken = AsyncStorage.getItem("refreshtoken");

//     try {
//         const userresponse = await fetch("https://localhost.com:3000/get-user-by-userId", {
//             method: "POST",
//             body: JSON.stringify({  id:userid, mailID: email,name: username, phoneNumber: phonenumber }),
//             Authorization: `Bearer ${accessToken}`,
//             headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
//         }).then((Res) => { return Res.json() });

//         const userdata = await userresponse.then(data);
//         if (userdata.success) {
//             Alert.alert('successfully Updated')
//         } else {
//             if (userdata.message == "invalid token") {
//                 generateRefreshtoken(refreshtoken);
//             } else {
//                 Alert.alert('Unsuccessfull')
//             }
//         }

//     } catch (error) {
//         Alert.alert(error)
//     }
// }

// const generateRefreshtoken = async (refreshtoken) => {
//     try {
//         const userresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
//             method: "POST", Authorization: `Bearer ${refreshtoken}`
//         }).then((Res) => { return Res.JSON() });

//         const userdata = userresponse

//         if (userresponse.success) {
//             AsyncStorage.setItem("accesstoken", userdata.accesstoken)
//             AsyncStorage.setItem("refreshtoken", userdata.refreshtoken)
//             await Editprofile();
//         }

//     } catch (error) {

//     }

// }

//   {/* <Text>Integration</Text> */ }

//   return (

//     <View style={{ flex: 1, backgroundColor: colors.primary }}>

//       <View style={{ backgroundColor: colors.background, height: 150, width: '100%', borderBottomRightRadius: 44, borderBottomLeftRadius: 44 }}>


//         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//           <Image source={require("./Image/profilepic.jpg")} resizeMode='cover' style={{ height: 100, width: 100, justifyContent: 'center', borderRadius: 90, alignSelf: 'center', marginTop: 40, }}></Image>
//           <Icon name='camera-outline' color={colors.primary} size={18} style={{ position: 'absolute', top: 100, right: Dimensions.get('window').width / 2.8, backgroundColor: colors.background, borderRadius: 10, padding: 5 }} />
//         </View>

//         <Text style={{ color: colors.text, fontSize: 20, fontWeight: 'bold', marginTop: 20, marginStart: 10 }}>Personal Details</Text>

//         <View style={{ width: '90%', height: 49, alignSelf: 'center', flexDirection: 'row', backgroundColor: colors.primary, borderColor: colors.text, padding: 1, borderRadius: 25, marginTop: 40, borderWidth: 1 }}>
//           <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor='transparent' underlineColor='transparent' onChangeText={schoolnamedetails} value={schoolname} placeholder='School Name' style={{ fontSize: 18, width: '100%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}></TextInput>
//         </View>

//         <View style={{ width: '90%', height: 49, alignSelf: 'center', flexDirection: 'row', backgroundColor: colors.primary, borderColor: colors.text, padding: 1, borderRadius: 25, marginTop: 25, borderWidth: 1 }}>
//           <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor='transparent' underlineColor='transparent' onChangeText={usernamedetails} value={username} placeholder='User Name' style={{ fontSize: 18, width: '100%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}></TextInput>
//         </View>

//         <View style={{ width: '90%', height: 49, alignSelf: 'center', flexDirection: 'row', backgroundColor: colors.primary, borderColor: colors.text, padding: 1, borderRadius: 25, marginTop: 25, borderWidth: 1, shadowOffset: { width: 100, height: 100 }, shadowRadius: 10, shadowColor: "red" }}>
//           <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor='transparent' underlineColor='transparent' onChangeText={emaildetails} value={email} placeholder='Email' style={{ fontSize: 18, width: '100%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }} keyboardType='email-address'></TextInput>
//         </View>

//         <View style={{ width: '90%', height: 49, alignSelf: 'center', flexDirection: 'row', backgroundColor: colors.primary, borderColor: colors.text, padding: 1, borderRadius: 25, marginTop: 25, borderWidth: 1 }}>
//           <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor='transparent' underlineColor='transparent' onChangeText={phonenumberdetails} value={phonenumber} placeholder='Phone Number' style={{ fontSize: 18, width: '100%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }} keyboardType='number-pad'></TextInput>
//         </View>

//         <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 6, marginTop: 70 }}onPress={home}>
//           Save
//         </Button >

//         {/* <Text> Button view above </Text> */}


//       </View>

//     </View>
//   )
// }




import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, FlatList,ImageBackground } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'react-native-image-picker';

export default function Student() {
    const { colors } = useTheme();

    const [fileUris, setfileUris] = useState("");
    const [filename, setfilename] = useState("");
    const [filetype, setfiletype] = useState("");
    let option1 = {
        title: 'select image',
        mediaType: 'mixed'
    };

    const AddPick = () => {
        ImagePicker.launchImageLibrary(option1, (res) => {
            if (res.didCancel) {
                Alert.alert('User cancelled image picker');
            } else if (res.error) {
                Alert.alert('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                Alert.alert('User tapped custom button: ', res.customButton);
                Alert.alert(res.customButton);
            } else {
                // Use res.uri directly as the source for FastImage
                setfileUris(res.assets[0]["uri"]);
                setfilename(res.assets[0]["fileName"]);
                setfiletype(res.assets[0]["type"]);
                // uploadimage(res.assets[0]["uri"], res.assets[0]["fileName"], res.assets[0]["type"])
            }
        });
    }


    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height, }}>

                    <View style={{ width: '90%', backgroundColor: colors.background, columnGap: 14, height: 270, alignSelf: 'center', margin: 7, borderRadius: 9 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>


                        </View >

                        {/* <Image source={require("./Image/boyy.jpg")} style={{ width: '26%', height: 100, alignSelf: 'center', justifyContent: 'center', borderRadius: 88, marginStart: 7, marginTop: 8 }}></Image> */}
                        <ImageBackground resizeMode='stretch' source={{ uri: fileUris ? (fileUris): ('https://www.thestatesman.com/wp-content/uploads/2019/10/mahesh-babu.jpg')}} style={{ width: 100, height: 100,marginTop: 22, alignSelf: 'center', justifyContent: 'center',}}>
                        <Icon name='camera-enhance-outline' color={colors.text} size={24} style={{ position:'relative',alignSelf:'center' }} onPress={AddPick} />
                    </ImageBackground>
                    
        <Text style={{ color: colors.primary, fontSize: 18, marginTop: 5, alignSelf: 'center' }}>Pratap</Text>
        <Text style={{ color: colors.primary, fontSize: 18, marginTop: 5, alignSelf: 'center' }}>user@gmail.com</Text>
        <Text style={{ color: colors.primary, fontSize: 18, marginTop: 5, alignSelf: 'center' }}>9876543210</Text>



                    </View>

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} placeholder='Name'  style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} placeholder='Mobile number'  style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} placeholder='Email'  style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} placeholder='Address' multiline={true} style={{ width: '87%',height:77, borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>

                    <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 6, marginTop: 70 }} >
          SAVE
        </Button >

                </View>


            </ScrollView>

        </SafeAreaView>

    )
}

