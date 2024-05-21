import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import { RadioButton } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput, useTheme, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Editsection({navigation}) {
    const { colors } = useTheme();

    const [Classvalue, setClassValue] = useState(null);
    const [Teachervalue, setTeacherValue] = useState(null);

    const data = [
        { label: 'LKG', value: '1' },
        { label: 'UKG', value: '2' },
        { label: 'Class 1', value: '3' },
        { label: 'Class 2', value: '4' },
        { label: 'Class 3', value: '5' },
        { label: 'Class 4', value: '6' },
        { label: 'Class 5', value: '7' },
        { label: 'Class 6', value: '8' },
        { label: 'Class 7', value: '9' },
        { label: 'Class 8', value: '10' },
        { label: 'Class 9', value: '11' },
        { label: 'Class 10', value: '12' },

    ];

    const dataa = [
        { label: 'Teacher 1', value: '1' },
        { label: 'Teacher 2', value: '2' },
        { label: 'Teacher 3', value: '3' },
        { label: 'Teacher 4', value: '4' },
        { label: 'Teacher 5', value: '5' },
        { label: 'Teacher 6', value: '6' },
        { label: 'Teacher 7', value: '7' },
        { label: 'Teacher 8', value: '8' },
        { label: 'Teacher 9', value: '9' },
        { label: 'Teacher 10', value: '10' },
    ];

    const [sectionid, setsectionid] = useState("")
    const [accessToken, setaccessToken] = useState("")
    const [refreshtoken, setrefreshToken] = useState("")
    const [role, setrole] = useState("")

    const [strengthcount, setstrengthcount] = useState("")
    const strengthcountdetails = (name) => {
      setstrengthcount(name)
      console.log(name);
    }
    const [sectionname, setsectiondetails] = useState("")
    const sectiondetails = (name) => {
      setsectiondetails(name)
      console.log(name);
    }

    // <Text> Integration  </Text>

    const getSectionData = async (ID) => {
        try {
            const sectionresponse = await fetch("https://localhost.com:3000/getSection-by-id", {
                method: "POST",
                body: JSON.stringify({ user_id: ID }),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            }).then((Res) => { return Res.json() });

            const sectiondata = await sectionresponse.then(data);
            if (sectiondata.success) {
                setsectiondetails(sectiondata.name)
                setstrengthcount(sectiondata.strength)
                setClassValue(sectiondata.className)
                setTeacherValue(sectiondata.teacherName)

            } else {
                if (sectiondata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                } else {
                    Alert.alert('this section cant be updated right now')
                }
            }
        } catch (error) {
            Alert.alert(error)
        }
    }

    const getuserdata = async () => {
        const accessToken = await AsyncStorage.getItem("accessToken");
        const refreshtoken = await AsyncStorage.getItem("refreshtoken");
        const sectionID = await AsyncStorage.getItem("sectionID");
        const role = await AsyncStorage.getItem("role");

        getSectionData(sectionID);
        setsectionid(sectionid);
        setrole(role);
        setaccessToken(accessToken);
        setrefreshToken(refreshtoken);
    }

    const Editsection = async () => {

        try {
            const sectionresponse = await fetch("https://localhost.com:3000/update-section-by id", {
                method: "POST",
                body: JSON.stringify({  id: sectionid, name: sectionname, strength: strengthcount, className: Classvalue, teacherName: Teachervalue ,role:role}),
                Authorization: `Bearer ${accessToken}`,
                headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
            });

            const sectiondata = await sectionresponse.then(data);
            if (sectiondata.success) {
                Alert.alert('successfully section has updated')
            } else {
                if (sectiondata.message == "invalid token") {
                    generateRefreshtoken(refreshtoken);
                } else {
                    Alert.alert('this section cant be updated right now')
                }
            }

        } catch (error) {
            Alert.alert(error)
        }

        const generateRefreshtoken = async (refreshtoken) => {
            try {
                const sectionresponse = await fetch("https://localhost.com:3000/generaterefreshtoken", {
                    method: "POST", Authorization: `Bearer ${refreshtoken}`
                }).then((Res) => { return Res.JSON() });

                const sectiondata = sectionresponse

                if (sectionresponse.success) {
                    AsyncStorage.setItem("accesstoken", sectiondata.accesstoken)
                    AsyncStorage.setItem("refreshtoken", sectiondata.refreshtoken)
                    await Editsection();
                }
            } catch (error) {
            }
        }
    }

    useEffect(() => {
        getuserdata()
    }, [])

        // <Text> Integration  </Text>

    return (

        <View style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'center' }}>

            <Image source={require("./Image/School.jpg")} style={{ height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, marginTop: 30 }}></Image>

            <Text style={{ color: colors.text, fontSize: 20, alignSelf: 'center', marginTop: 10, fontWeight: 'bold' }}>ID:SC1234</Text>

            <View>
                <Dropdown
                    style={[styles.dropdown,{borderBottomColor: colors.text,borderColor: colors.text  }]}
                    placeholderStyle={[styles.placeholderStyle,{color: colors.text}]}
                    selectedTextStyle={[styles.selectedTextStyle,{color:  colors.text}]}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={400}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Class"
                    searchPlaceholder="Search..."
                    value={Classvalue}
                    onChange={item => {
                        setClassValue(item.value);
                    }}
                    renderLeftIcon={() => (
                        <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
                    )}
                />
            </View>

            {/* <Text> Dropdown view above   </Text> */}

            <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={sectiondetails} value={sectionname}placeholder='Section Name' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 30 }}></TextInput>

            <View>
                <Dropdown
                    style={[styles.dropdown,{borderBottomColor: colors.text,borderColor: colors.text  }]}
                    placeholderStyle={[styles.placeholderStyle,{color: colors.text}]}
                    selectedTextStyle={[styles.selectedTextStyle,{color:  colors.text}]}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dataa}
                    search
                    maxHeight={400}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Teacher"
                    searchPlaceholder="Search..."
                    value={Teachervalue}
                    onChange={item => {
                        setTeacherValue(item.value);
                    }}
                    renderLeftIcon={() => (
                        <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
                    )}
                />
            </View>

            {/* <Text> Dropdown view above   </Text> */}

            <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined'onChangeText={strengthcountdetails} value={strengthcount} placeholder='No of students' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 30 }}></TextInput>

            <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.background, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 40 }}onPress={()=>navigation.navigate('Sectiondetails')}>
                EDIT SECTION
            </Button >

            {/* <Text> Button view above   </Text> */}

        </View>

    )
}








const styles = StyleSheet.create({
    dropdown: {

        width: '87%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 50,
        marginTop: 30
    },
    icon: {
        margin: 10,
    },
    placeholderStyle: {
        fontSize: 16,
        height: 50
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

            {/* <Text> Dropdown styles view above   </Text> */}




