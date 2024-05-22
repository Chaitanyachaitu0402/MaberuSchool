import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, useTheme, Button, Menu, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker'

export default function Teacherworkcreate({navigation}) {
    const { colors } = useTheme();
    const [joindate, setjoindate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [joindata, setjoindata] = useState("")

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
    const [Description, setDescription] = useState("")
    const Descriptiondetails = (name) => {
        setDescription(name)
        console.log(name);
    }
   
  
    const [subject, setsubject] = useState("")
    const subjectdetails = (name) => {
        setsubject(name)
        console.log(name);
    }
    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>
                <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={namedetails} value={name} placeholder='Teacher Name' style={{ fontSize: 18, width: '90%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

                    <View>
                        <Dropdown
                            style={[styles.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
                            placeholderStyle={[styles.placeholderStyle, { color: colors.text }]}
                            selectedTextStyle={[styles.selectedTextStyle, { color: colors.text }]}
                     
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
                            style={[styles.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
                            placeholderStyle={[styles.placeholderStyle, { color: colors.text }]}
                            selectedTextStyle={[styles.selectedTextStyle, { color: colors.text }]}
                     
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

                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '90%', flexDirection: 'row', borderRadius: 5, borderColor: colors.text, borderWidth: 1, marginTop: 20 }}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpen(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Submission date' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', }}>{joindata ? joindate.toLocaleDateString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={open}
                            mode='date'
                            date={joindate}
                            onConfirm={(date) => {
                                setOpen(false)
                                setjoindate(date)
                                setjoindata(date)
                                console.log("==========>" + date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}>
                        </DatePicker>

                    </View>
                    
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' onChangeText={subjectdetails} value={subject} placeholder='Subject' style={{ fontSize: 18, width: '90%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}></TextInput>

                    <View style={{ marginTop: 5, marginStart: 5 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 19, marginStart: 7 }}>Description</Text>
                        <TextInput textColor={colors.text} placeholderTextColor={colors.text} multiline={true} value={Description} onChangeText={Descriptiondetails} style={{ width: '88%', minHeight: 100, borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, alignSelf: 'center', marginTop: 6 }}></TextInput>
                    </View>
                    


                    <View style={{width:'90%',alignSelf:'center',margin:7,}}>
                        
                        <View style={{height:7}}>

                        </View>
                        {/* <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 15, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 30, }}onPress={ () => navigation.navigate('Teacherhomeworklist')}>
                        ADD HOMEWORK
                    </Button > */}

<Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 17, color: colors.text, fontWeight: 'bold' }} style={{ width: '52%', height: 55, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 10, margin:9}}onPress={ () => navigation.navigate('Teacherhomeworklist')}>
                        EDIT HOMEWORK
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
