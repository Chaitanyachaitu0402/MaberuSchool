
import { StyleSheet, View, Text, Image, Dimensions, ScrollView,Alert,TouchableOpacity } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentItem = ({ student, toggleAttendance }) => {
 return (
   <View style={styles.studentItem}>
     <Text>{student.name} </Text>
     <TouchableOpacity onPress={() => toggleAttendance(student.id)}>
       <View style={[styles.toggleButton, { backgroundColor: student.isPresent ? 'green' : 'red' }]}>
         <Text style={styles.toggleButtonText}>
           {student.isPresent ? 'Present' : 'Absent'}
         </Text>
       </View>
     </TouchableOpacity>
   </View>
 );
};



const AttendanceScreen = ({navigation}) => {
 

 
const{colors}=useTheme();
const [date, setdate] = useState(new Date())
const [open, setOpen] = useState(false)
const [data, setdata] = useState("")
const dataa = [
  { label: 'Teaching', value: '1' },
  { label: 'Nonteaching', value: '2' },
];

const [leavevalue, setleaveValue] = useState(null);

  return (
    <View style={{backgroundColor:colors.primary,flex:1,}}>

        <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 5 }}>
                        <Icon name='calendar-month-outline' color={colors.bg} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpen(true) }} />
                        <TextInput disabled textColor={colors.text}  placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Select date' style={{ fontSize: 18, width: '80%', backgroundColor: colors.primary, alignSelf: 'center', }}>{data ? date.toLocaleDateString() : ""}</TextInput>

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



                    <View >
                        <Dropdown
                           style={[style.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
                           placeholderStyle={[style.placeholderStyle, { color: colors.text }]}
                           selectedTextStyle={[style.selectedTextStyle, { color: colors.text }]}
                    
                            inputSearchStyle={style.inputSearchStyle}
                             iconStyle={styles.iconStyle}
                            data={dataa}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Teacher List"
                            searchPlaceholder="Search..."
                            value={leavevalue}
                            onChange={item => {
                                setleaveValue(item.value);
                            }}
                        
                        />
                    </View>



<Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 10, marginTop: 30, }}onPress={()=>navigation.navigate('Staffattendancecreates')} >
                        Next
                    </Button >
    </View>
  );
};



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
      marginTop: 20,backgroundColor:'#FFFFFF'
  },
  icon: {
      margin: 10,


  },
  placeholderStyle: {
      fontSize: 16,
      height: 20,
      color: '#000000',
      alignSelf: 'center',
      justifyContent: 'center', margin: 5,
  },
  selectedTextStyle: {
      fontSize: 16,
      color: 'black',
      margin: 6, fontWeight: '500'
  },
   iconStyle: {
       width: 20,
       height: 20,
   },
  inputSearchStyle: {
      height: 40,
      fontSize: 16,margin:5
  },
});







const styles = StyleSheet.create({
 studentItem: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: 10,
   borderBottomWidth: 1,
   borderBottomColor: '#ccc',
   margin: 4,
 },
 toggleButton: {
   width: 80,
   height: 26,
   borderRadius: 5,
   alignItems: 'center',
   justifyContent: 'center',
 },
 toggleButtonText: {
   color: '#FFFFFF',
 },
 presentText: {
   color: 'blue',
 },
 absentText: {
   color: 'red',
 },
});

export default AttendanceScreen;


