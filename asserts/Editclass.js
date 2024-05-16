import React, { useEffect } from 'react';
import { View, Text, Image,Alert } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Editclass({navigation}) {
  const { colors } = useTheme();
  const home=()=>{
    navigation.navigate("Classlist")
}

//   const [classname, setclassname] = useState("")
//   const classnamedetails = (name) => {
//       setclassname(name)
//       console.log(name);
//   }
//   const [accessToken, setaccessToken] = useState("")
//   const [refreshtoken, setrefreshToken] = useState("")
//   const [role, setrole] = useState("")

//   const [classid, setclassid] = useState("")


      {/* <Text> Integration </Text> */ }

//   const getClassData = async (ID) => {
//     try {
//         const classresponse = await fetch("https://localhost.com:3000/getClass-by-id", {
//             method: "POST",
//             body: JSON.stringify({ user_id: ID }),
//             Authorization: `Bearer ${accessToken}`,
//             headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
//         }).then((Res) => { return Res.json() });

//         const classdata = await classresponse.then(data);
//         if (classdata.success) {
//             setname(classdata.name);
            

//         } else {
//             if (classdata.message == "invalid token") {
//                 generateRefreshtoken(refreshtoken);
//             } else {
//                 Alert.alert('this teacher cant be updated right now')
//             }
//         }
//     } catch (error) {
//         Alert.alert(error)
//     }
// }

//   const getuserdata = async () => {
//     const accessToken = await AsyncStorage.getItem("accessToken");
//     const refreshtoken = await AsyncStorage.getItem("refreshtoken");
//     const classID = await AsyncStorage.getItem("classID");
//     const role = await AsyncStorage.getItem("role");

//     getClassData(classID);
//     setclassid(classid)
//     setrole(role);
//     setaccessToken(accessToken);
//     setrefreshToken(refreshtoken);
// }

// const Editclass = async () => {

//   try {
//       const classresponse = await fetch("https://localhost.com:3000/update-class-by id", {
//           method: "POST",
//           body: JSON.stringify({ id: classid, name: classname,role:role}),
//           Authorization: `Bearer ${accessToken}`,
//           headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
//       });

//       const classdata = await classresponse.then(data);
//       if (classdata.success) {
//           Alert.alert('successfully class has updated')
//       } else {
//           if (classdata.message == "invalid token") {
//               generateRefreshtoken(refreshtoken);
//           } else {
//               Alert.alert('this class cant be updated right now')
//           }
//       }

//   } catch (error) {
//       Alert.alert(error)
//   }

//   const generateRefreshtoken = async (refreshtoken) => {
//       try {
//           const classresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
//               method: "POST", Authorization: `Bearer ${refreshtoken}`
//           }).then((Res) => { return Res.JSON() });

//           const classdata = classresponse

//           if (classresponse.success) {
//               AsyncStorage.setItem("accesstoken", classdata.accesstoken)
//               AsyncStorage.setItem("refreshtoken", classdata.refreshtoken)
//               await Editclass();
//           }
//       } catch (error) {
//       }
//   }
// }

// useEffect(() => {
//         getuserdata()
//     }, [])

//     {/* <Text> Integration End </Text> */ }


  return (
    <View style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'center' }}>

      <Image source={require("./Image/School.jpg")} style={{ height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, marginTop: 30 }}></Image>

      <Text style={{ color: colors.text, fontSize: 20, alignSelf: 'center', marginTop: 10, fontWeight: 'bold' }}>ID:CL1234</Text>

      <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined'  placeholder='Class Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>


      <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.background, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 50 }}onPress={home}> EDIT CLASS
      </Button >

            {/* <Text> Button view above  </Text> */}

    </View>
  )
}
