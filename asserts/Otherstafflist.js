import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView ,Dimensions} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme,Menu } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Teacherlist({navigation}){
    const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

    const openMenu = (index) => setVisibleMenuIndex(index);
    const closeMenu = () => setVisibleMenuIndex(null);
  
    {/* <Text>----Flatlist apperance----</Text> */ }

    const horizontalview5 = [{ number: '01', name: 'NAME: M.Dhamodar', id: 'ID NO : 12345',role:'Role : Clerk' }, { number: '02', name: 'NAME: L.Damini', id: 'ID NO : 7642',role:'Role : peons' },{ number: '03', name: 'NAME: N.Ramusri', id: 'ID NO : 44575',role:'Role : peons' }, { number: '04', name: 'NAME: J.Bhanu', id: 'ID NO : 17775',role:'Role : librarian' },{ number: '05', name: 'NAME: P.Neelamma', id: 'ID NO : 86324',role:'Role : librarian' },{ number: '05', name: 'NAME: V.jogesh', id: 'ID NO : 10045',role:'role : Cleaning staff' },{ number: '07', name: 'NAME: n.Gopalamma', id: 'ID NO : 54325',role:'Role : Human Resource manager' },]

   const apperancce = (data, index) => {
     const isMenuVisible = visibleMenuIndex === index;
            
        return (

            <Card style={{ width: '93%',  margin: 8, borderRadius: 10, backgroundColor: colors.primary,alignSelf:'center' }}onPress={()=>navigation.navigate('Otherstaffdetails')}>


                <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>

<View style={{flexDirection:'row'}}>

                        <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >
                            
                            <Text style={{ color: colors.primary, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{data.item.number}</Text>
                        
                        </Card>

                    <View style={{ justifyContent: 'center' }}>
                  
                        <Text style={{ color: colors.text, fontSize: 16, margin: 5 }}>{data.item.name}</Text>
                        <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>{data.item.id}</Text>
                        <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>{data.item.role}</Text>

                    </View>

                    </View>

                    <View style={{flexDirection:'row',margin:5}}>

                    <Menu
            visible={isMenuVisible}
            onDismiss={closeMenu}
            anchor={<Icon name='dots-vertical' size={26} onPress={() => openMenu(index)} />}
          >
            <Menu.Item title="Edit" onPress={() => navigation.navigate("Editteacher")} />
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
                width:Dimensions.get('window').width}}
          />
                    {/* <Text>----Flatlist view----</Text> */}

                </View>


    );
}



