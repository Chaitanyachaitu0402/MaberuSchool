
import { StyleSheet, View, Text, Image, Dimensions, ScrollView,Alert,TouchableOpacity,SafeAreaView } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentItem = ({ student, toggleAttendance }) => {
  return (
    <View style={styles.studentItem}>
      <View style={styles.studentInfo}>
        <Text style={[styles.studentId,{color:'#FB9D2F'}]}>ID: {student.id}</Text>
        <Text style={styles.studentName}>{student.name}</Text>
      </View>
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



const StudentList = ({ students, toggleAttendance }) => {
  return (
    <View  >
      {students.map((student) => (
        <StudentItem key={student.id} student={student} toggleAttendance={toggleAttendance} />
      ))}
    </View>
  );
};

const AttendanceScreen = ({navigation}) => {
  const{colors}=useTheme();

  const [students, setStudents] = useState([
    { id: 1333333333, name: 'name1', isPresent: false },
    { id: 23332, name: 'name2', isPresent: false },
    { id: 43333, name: 'name3', isPresent: false },
    { id: 53333, name: 'name4', isPresent: false },
    { id: 64444, name: 'name5', isPresent: false },
    { id: 72222, name: 'name6', isPresent: false },
    { id: 81112, name: 'name7', isPresent: false },
    { id: 93332, name: 'name8', isPresent: false },

  ]);

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{backgroundColor:colors.primary,flex:1,}}>

                     

<View style={{width:'90%',alignSelf:'center',margin:7,backgroundColor:colors.b}}>
<StudentList  students={students} toggleAttendance={toggleAttendance} />

</View>

<Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 55, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 10, margin:10 }} onPress={()=>navigation.navigate('Attendancecard')}>
                        ADD
                    </Button >
                    
    </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};


;





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
  studentInfo: {
    color:'blue'
  },
  studentId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  studentName: {
    fontSize: 18,
    color: '#192f6a',
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
});



export default AttendanceScreen;


