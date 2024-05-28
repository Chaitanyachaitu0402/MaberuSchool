import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, SafeAreaView, ScrollView,Alert } from 'react-native';
import { Card, useTheme, Button, Menu, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';

export default function Createfee({navigation}) {
    const { colors } = useTheme();

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
        { label: 'Section A', value: '1' },
        { label: 'Section B', value: '2' },
        { label: 'Section C', value: '3' },
    ];
    const [classvalue, setClassValue] = useState(null);
    const [Sectionvalue, setSectionValue] = useState(null);


    const [admission, setadmission] = useState("")
    const admissioniddetails = (name) => {
        setadmission(name)
        console.log(name);
    }
    const [admission2, setadmission2] = useState("")
        const transportdetails = (name) => {
            setadmission2(name)
            console.log(name);
        }
    const [amount, setamount] = useState("")
    const amountdetails = (name) => {
        setamount(name)
        console.log(name);
    }
    const [amount2, setamount2] = useState("")
        const tuitiondetails = (name) => {
            setamount2(name)
            console.log(name);
        }
    const [amounts, setamounts] = useState("")
    const amountsdetails = (name) => {
        setamounts(name)
        console.log(name);
    }
    const [amounts2, setamounts2] = useState("")
        const setstationarydetails = (name) => {
            setamounts2(name)
            console.log(name);
        }




    const [id, setid] = useState("")
        const iddetails = (name) => {
            setid(name)
            console.log(name);
        }

        const [classname, setclassdetails] = useState("")
        const classdetails = (name) => {
        setclassdetails(name)
        console.log(name);
        }

          const [sectionname, setsectiondetails] = useState("")
               const sectiondetails = (name) => {
                setsectiondetails(name)
                 console.log(name);
                 }
const [name, setstudentdetails] = useState("")
               const studentdetails = (name) => {
                setstudentdetails(name)
                 console.log(name);
                 }

const handleGetStarted2 = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/fees/create_fees', {
                method: 'POST',
                body: JSON.stringify({
                    admission_number:id,
                    student_name:name,
                    class:classname,
                    section:sectionname,
                    tution_fees:admission,
                    transport_fees:amount,
                    stationary_fees:amounts,
                    tution_fees2:admission2,
                    transport_fees2:amount2,
                    stationary_fees2:amounts2

                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            console.log("done2", response)
            if (!response.ok) {
                throw new Error('Failed to details. Status: ' + response.status);
            }
            const data = await response.json();
            console.log("Fees details created ===> ", data)
            if (data.success) {
                // Show alert box
                Alert.alert("Student Fee Details Created Successfully");
                // Navigate to Sectiondetails screen
                navigation.navigate('Feesadd');
            } else {
                Alert.alert("Error in creating the student details");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={iddetails} value={id} placeholder='Registration Id' style={{ fontSize: 18, width: '89%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={studentdetails} value={name} placeholder='Student Name' style={{ fontSize: 18, width: '89%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>


                     <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={classdetails} value={classname} placeholder='Class Name' style={{ fontSize: 18, width: '89%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

                     <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={sectiondetails} value={sectionname} placeholder='Section Name' style={{ fontSize: 18, width: '89%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>




                    <View style={{width:'90%',alignSelf:'center',margin:7,}}>
                    <Text style={{ fontSize: 20,    color: colors.bg,fontWeight:'600',marginTop:6 }}>Firsterm fees details</Text>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6}}>
<Text style={{ fontSize: 19,    color: colors.text }}>Tuition Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={admissioniddetails} value={admission} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6}}>
<Text style={{ fontSize: 19,    color: colors.text }}>Transport Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={amountdetails} value={amount} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6}}>
<Text style={{ fontSize: 19,    color: colors.text }}>Stationary Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={amountsdetails} value={amounts} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>


                    </View>

                    <View style={{width:'90%',alignSelf:'center',margin:7,marginTop:7}}>
                    <Text style={{ fontSize: 20,    color: colors.bg,fontWeight:'600' }}>Second fees details</Text>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6}}>
<Text style={{ fontSize: 19,    color: colors.text }}>Tuition Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={transportdetails} value={admission2} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6}}>
<Text style={{ fontSize: 19,    color: colors.text }}>Transport Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={tuitiondetails} value={amount2} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6}}>
<Text style={{ fontSize: 19,    color: colors.text }}>Stationary Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={setstationarydetails} value={amounts2} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>


<Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 50, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 30, }} onPress={handleGetStarted2}>
                        ADD 
                    </Button >

                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    dropdown: {

        width: '89%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.7,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 57,
        marginTop: 20,
    },
    icon: {
        margin: 10,


    },
    placeholderStyle: {
        fontSize: 16,
        height: 20,
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center', marginStart: 5,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
        marginStart: 6, fontWeight: '500'
    },
   
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
