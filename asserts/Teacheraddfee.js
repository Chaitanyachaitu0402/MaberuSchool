import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, useTheme, Button, Menu, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default function Createfee() {
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

    const [name, setname] = useState("")
    const namedetails = (name) => {
        setname(name)
        console.log(name);
    }
    const [admission, setadmission] = useState("")
    const admissiondetails = (name) => {
        setadmission(name)
        console.log(name);
    }
    const [amount, setamount] = useState("")
    const amountdetails = (name) => {
        setamount(name)
        console.log(name);
    }
    const [amounts, setamounts] = useState("")
    const amountsdetails = (name) => {
        setamounts(name)
        console.log(name);
    }
    const [tuition, settuition] = useState("")
    const tuitiondetails = (name) => {
        settuition(name)
        console.log(name);
    }
    const [id, setid] = useState("")
    const iddetails = (name) => {
        setid(name)
        console.log(name);
    }
    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>
                <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={namedetails} value={name} placeholder='Student Name' style={{ fontSize: 18, width: '90%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>
                <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={iddetails} value={id} placeholder='Student Id' style={{ fontSize: 18, width: '90%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

                    <View>
                        <Dropdown
                             style={[style.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
                             placeholderStyle={[style.placeholderStyle, { color: colors.text }]}
                             selectedTextStyle={[style.selectedTextStyle, { color: colors.text }]}
                      
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Class"
                            searchPlaceholder="Search..."
                            value={classvalue}
                            onChange={item => {
                                setClassValue(item.value);
                            }}

                        />
                    </View>
                    <View>
                        <Dropdown
                             style={[style.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
                             placeholderStyle={[style.placeholderStyle, { color: colors.text }]}
                             selectedTextStyle={[style.selectedTextStyle, { color: colors.text }]}
                      
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={dataa}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Section"
                            searchPlaceholder="Search..."
                            value={Sectionvalue}
                            onChange={item => {
                                setSectionValue(item.value);
                            }}

                        />
                    </View>

                    <View style={{width:'90%',alignSelf:'center',margin:7,}}>
                        
                        <View style={{height:7}}>

                        </View>
                    <Text style={{ fontSize: 23,    color: colors.bg,fontWeight:'600',marginTop:6 }}>Fees details</Text>

<View style={{width:'93%',alignSelf:'center',}}>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6,alignSelf:'center'}}>
<Text style={{ fontSize: 21,    color: colors.text }}>Tuition Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={tuitiondetails} value={tuition} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6,alignSelf:'center'}}>
<Text style={{ fontSize: 21,    color: colors.text }}>Transport Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={amountdetails} value={amount} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6,alignSelf:'center'}}>
<Text style={{ fontSize: 21,    color: colors.text }}>Stationary Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={amountsdetails} value={amounts} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>

<View style={{flexDirection:'row',width:'90%',columnGap:7,justifyContent:'space-between',margin:6,alignSelf:'center'}}>
<Text style={{ fontSize: 21,    color: colors.text }}>Admission Fees</Text>
<TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={admissiondetails} value={admission} placeholder='Amount' style={{ fontSize: 18, width: '43%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center',height:40  }}></TextInput>

</View>




</View>

<Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 50, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 30, }}onPress={ () => navigation.navigate('Sectiondetails')}>
                        ADD FEES 
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
