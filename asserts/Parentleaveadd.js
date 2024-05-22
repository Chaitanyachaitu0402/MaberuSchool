import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';


export default function Parentleaveadd({navigation}) {
    const { colors } = useTheme();
    const [classes, setclasses] = useState(null);

    const [section, setsections] = useState(null);
    const data1 = [
        { label: 'Class I', value: '1' },
        { label: 'Class II', value: '2' },
        { label: 'Class III', value: '3' },
        { label: 'Class IV', value: '4' },
        { label: 'Class V', value: '5' },
        { label: 'Class VI', value: '6' },
        { label: 'Class VII', value: '7' },
        { label: 'Class VIII', value: '8' },
        { label: 'Class IX', value: '9' },
        { label: 'Class X', value: '10' },
     
      ];
      const dataa = [
                { label: 'Section A', value: '1' },
                { label: 'Section B', value: '2' },
                { label: 'Section C', value: '3' },
                
              ];
    const [leavedate, setleavedate] = useState(new Date())
    const [openn, setOpenn] = useState(false)
    const [leavedata, setleavedata] = useState("")

    const [date, setdate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [data, setdata] = useState("")

    const home=()=>{
        navigation.navigate("Pendingleavedetails")
    }
    return (
        // <SafeAreaView>
            <ScrollView>


                <View style={{ flex: 1, backgroundColor: colors.primary, height:Dimensions.get('window').height}}>

               

                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 18, marginStart: 14, left: 6 }}>Subject</Text>

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 17 }}></TextInput>
                    <TextInput placeholder='Name' textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 17 }} ></TextInput>

                    <View >
    <Dropdown
        style={style.dropdown}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.selectedTextStyle}
        inputSearchStyle={style.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        data={data1}
        search
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder="Select Class"
        searchPlaceholder="Search..."
        value={section}
        onChange={item => {
            setsections(item.value);
        }}
   
    />
</View>

<View >
    <Dropdown
        style={style.dropdown}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.selectedTextStyle}
        inputSearchStyle={style.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        data={dataa}
        search
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder="Select Section"
        searchPlaceholder="Search..."
        value={classes}
        onChange={item => {
           setclasses(item.value);
        }}
   
    />
</View>
                  
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}> Leave Date</Text>

                    <View style={{ flexDirection: 'row', marginStart: 11, margin: 9, right: 10 }}>

                        <View style={{ marginTop: 1, marginStart: 13 }}>

                            <Text style={{ fontSize: 17, color: colors.text, marginTop: 7, marginStart: 14, }}> From</Text>
                            <View style={{ width: '62%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 5, marginStart: 7 }}>
                                <Icon name='calendar-month-outline' color={colors.bg} size={24} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpenn(true) }} />
                                <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='start date' style={{ fontSize: 14, width: '86%', backgroundColor: 'transparent', }}>{leavedata ? leavedate.toLocaleDateString() : ""}</TextInput>

                                <DatePicker
                                    modal
                                    open={openn}
                                    mode='date'
                                    date={leavedate}
                                    onConfirm={(date) => {
                                        setOpenn(false)
                                        setleavedate(date)
                                        setleavedata(date)
                                        console.log("==========>" + date)
                                    }}
                                    onCancel={() => {
                                        setOpenn(false)
                                    }}>
                                </DatePicker>

                            </View>






                        </View>
                        <View style={{ marginTop: 1,  }}>

                            <Text style={{ fontSize: 17, color: colors.text, marginTop: 7, }}>To </Text>
                            <View style={{ width: '62%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 5, }}>
                                <Icon name='calendar-month-outline' color={colors.bg} size={24} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpen(true) }} />
                                <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='start date' style={{ fontSize: 14, width: '86%', backgroundColor: 'transparent', }}>{data ? date.toLocaleDateString() : ""}</TextInput>

                                <DatePicker
                                    modal
                                    open={open}
                                    mode='date'
                                    date={date}
                                    onConfirm={(date) => {
                                        setOpen(false)
                                        setdate(date)
                                        setdata(date)
                                        console.log("==========>" + date)
                                    }}
                                    onCancel={() => {
                                        setOpen(false)
                                    }}>
                                </DatePicker>

                            </View>


                        </View>

                    </View>

                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 8, marginStart: 14, left: 6 }}>Reason</Text>

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined'  multiline={true} style={{ fontSize: 18, width: '88%',height:120, backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 17 }}></TextInput>

                        <Button style={{ width: "43%", height: 48, backgroundColor: colors.bg, alignSelf: 'center',marginTop:9 }} labelStyle={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 16,color:colors.primary }}onPress={home}>Apply</Button>

                </View>
            </ScrollView>

        // </SafeAreaView>

    )
}
const style = StyleSheet.create({
    dropdown: {

        width: '87%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.7,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 57,
        marginTop: 12,backgroundColor:'#ffffff'
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