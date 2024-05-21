// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import LinearGradient from 'react-native-linear-gradient';
// import { Button, Card, TextInput, useTheme } from 'react-native-paper'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// const Exampleshimmer = () => {
//     const [isShimmering, setisShimmering] = useState(false);


//     const horizontalview = [{ section: 'Section : A', count: 'No of students : 34', name: 'Class Teacher : Ravi' }, { section: 'Section : B', count: 'No of students : 24', name: 'Class Teacher : Swetha' }, { section: 'Section : C', count: 'No of students : 44', name: 'Class Teacher : Ram' },]
//     const apperancce = (data) => {
//         console.log("data : ", data);
//         return (

//             <Card style={{ width: '100%', height: 100, margin: 4, borderRadius: 10, backgroundColor: colors.primary }}>





//                 <View style={{ justifyContent: 'center', margin: 10 }}>
//                     <Text style={{ color: colors.text, fontSize: 14, margin: 5 }}>{data.item.section}</Text>
//                     <Text style={{ color: colors.text, fontSize: 14, margin: 3 }}>{data.item.count}</Text>
//                     <Text style={{ color: colors.text, fontSize: 14, margin: 3 }}>{data.item.name}</Text>
//                 </View>




//             </Card>


//         )
//     }
//     const { colors } = useTheme();
//     useEffect(() => {
//         const shimmerTimeout = setTimeout(() => {
//             console.log('===================>')
//             setisShimmering(true);
//         }, 3000);

//         return () => clearTimeout(shimmerTimeout);
//     }, []);

//     return (

//         <View style={styles.container}>
//             {isShimmering ? (
//                 <View style={{ backgroundColor: colors.primary, flex: 1 }}>

//                     <View style={{ backgroundColor: colors.background, width: '100%', height: 80, flexDirection: 'row' }}>

//                         <Icon name='arrow-left' color={colors.primary} size={23} style={{ width: 36, height: 36, borderRadius: 18, marginTop: 11, marginStart: 14 }} />
//                         <Text style={{ fontSize: 20, color: colors.primary, marginStart: 5, marginTop: 10, fontWeight: 'bold' }}>Student list</Text>

//                     </View>


//                     <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>
//                 </View>

//             ) : (
//                 <View>
//                     <Card style={{ width: '100%', height: 100, margin: 4, borderRadius: 10, justifyContent: 'center', alignSelf: 'center' }}>


//                         <View style={{ justifyContent: 'center' }}>

//                             <ShimmerPlaceholder
//                                 LinearGradient={LinearGradient}
//                                 gradientColors={['#e1e9ee', '#f0f4f7', '#e1e9ee']}
//                                 visible={isShimmering}
//                                 autoRun={isShimmering}
//                                 style={{ width: "70%", margin: 5 }}>
//                             </ShimmerPlaceholder>
//                             <ShimmerPlaceholder
//                                 style={{ width: "80%", margin: 5 }}
//                                 LinearGradient={LinearGradient}
//                                 gradientColors={['#e1e9ee', '#f0f4f7', '#e1e9ee']}
//                                 visible={isShimmering}
//                                 autoRun={isShimmering}>
//                             </ShimmerPlaceholder>

//                             <ShimmerPlaceholder style={{width: "90%", margin: 5 }}
//                                 LinearGradient={LinearGradient}
//                                 gradientColors={['#e1e9ee', '#f0f4f7', '#e1e9ee']}
//                                 visible={isShimmering}
//                                 autoRun={isShimmering}>
//                             </ShimmerPlaceholder>

//                         </View>


//                     </Card>
//                 </View>

//             )}




//         </View>


//     );
// };

// const styles = StyleSheet.create({
//     container: {

//         padding: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'white'
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',

//     },
//     shimmerContainer: {
//         width: '100%', height: 100, margin: 8, justifyContent: 'center', borderRadius: 7
//     },
//     text: {
//         fontSize: 22,
//         color: 'black',
//         textAlign: 'center'
//     },
// });


// export default Exampleshimmer;



// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import SectionedMultiSelect from 'react-native-sectioned-multi-select';

// const items = [
//   // this is the parent or 'item'
//   {
//     name: 'Fruits',
//     id: 0,
//     // these are the children or 'sub items'
//     children: [
//       {
//         name: 'Apple',
//         id: 10,
//       },
//       {
//         name: 'Strawberry',
//         id: 17,
//       },
//       {
//         name: 'Pineapple',
//         id: 13,
//       },
//       {
//         name: 'Banana',
//         id: 14,
//       },
//       {
//         name: 'Watermelon',
//         id: 15,
//       },
//       {
//         name: 'Kiwi fruit',
//         id: 16,
//       },
//     ],
//   },
// ];

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       selectedItems: [],
//     };
//   }

//   onSelectedItemsChange = (selectedItems) => {
//     this.setState({ selectedItems });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionedMultiSelect
//           items={items}
//           IconRenderer={Icon}
//           uniqueKey="id"
//           subKey="children"
//           selectText="Choose some things..."
//           showDropDowns={true}
//           readOnlyHeadings={true}
//           onSelectedItemsChange={this.onSelectedItemsChange}
//           selectedItems={this.state.selectedItems}
//           styles={{
//             container: styles.sectionedMultiSelectContainer,
//             selectToggle: styles.selectToggle,
//             itemText: styles.itemText,
//           }}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   sectionedMultiSelectContainer: {
//     width: '88%',
//     alignSelf: 'center',
//   },
//   selectToggle: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,width:'66%',borderColor:'black',borderWidth:1
//   },
//   itemText: {
//     fontSize: 18,
//     fontWeight: 'bold',color:'red'
//   },
// });
// ==============================================
// example attendance

// import React, { useState } from 'react';
// import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

// const StudentListScreen = () => {
//   const [students, setStudents] = useState([
//     { id: 1, name: 'John Doe', attendance: false },
//     { id: 2, name: 'Jane Smith', attendance: false },
//     { id: 3, name: 'Alice Johnson', attendance: false },
//     { id: 4, name: 'Bob Brown', attendance: false },
//   ]);

//   const [presentCount, setPresentCount] = useState(0);
//   const [absentCount, setAbsentCount] = useState(0);
//   const [newStudentName, setNewStudentName] = useState('');

//   const toggleAttendance = (id) => {
//     setStudents((prevStudents) =>
//       prevStudents.map((student) => {
//         if (student.id === id) {
//           const updatedStudent = { ...student, attendance: !student.attendance };
//           if (updatedStudent.attendance) {
//             setPresentCount((prevCount) => prevCount + 1);
//             setAbsentCount((prevCount) => prevCount - 1);
//           } else {
//             setPresentCount((prevCount) => prevCount - 1);
//             setAbsentCount((prevCount) => prevCount + 1);
//           }
//           return updatedStudent;
//         }
//         return student;
//       })
//     );
//   };

//   const addStudent = () => {
//     if (newStudentName.trim() !== '') {
//       const newStudentId = students.length + 1;
//       setStudents((prevStudents) => [
//         ...prevStudents,
//         { id: newStudentId, name: newStudentName, attendance: false },
//       ]);
//       setAbsentCount((prevCount) => prevCount + 1);
//       setNewStudentName(''); // Clear the input field after adding the student
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => toggleAttendance(item.id)}>
//       <View style={styles.itemContainer}>
//         <Text>{item.name}</Text>
//         <Text>{item.attendance ? 'Present' : 'Absent'}</Text>
//         <Button
//           title={item.attendance ? 'Mark Absent' : 'Mark Present'}
//           onPress={() => toggleAttendance(item.id)}
//           color={item.attendance ? 'red' : 'green'}
//         />
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View>
//       <FlatList
//         data={students}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter new student name"
//           value={newStudentName}
//           onChangeText={setNewStudentName}
//         />
//         <Button title="Add Student" onPress={addStudent} />
//       </View>
//       <View style={styles.summaryContainer}>
//         <Text>Present: {presentCount}</Text>
//         <Text>Absent: {absentCount}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   input: {
//     flex: 1,
//     marginRight: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   summaryContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//   },
// });

// export default StudentListScreen;
// ================================================================





import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView, FlatList, SafeAreaView, Alert } from 'react-native';

export default function Leavelist(){
    const { colors } = useTheme()
    const horizontalview = [{ date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'Employe id: 1224 ', name: 'Name: kotla.Ramadevi' }, { date: '13-01-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Medical Leave', employe: 'Employe id: 3334 ', name: 'Name: Varahi.Ravukumar' }, { date: '16-03-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'Employe id: 8769 ', name: 'Name: Deva.Prathiba' },{ date: '16-03-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'Employe id: 8769 ', name: 'Name: Deva.Prathiba' }]
    const apperancce = (data) => {
        console.log("data:", data);
        return (
            <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                    <Text style={{ color: colors.text, fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 6 }}>{data.item.text}  </Text>
                    <Icon name='eye' color={colors.text} size={24} style={{ marginTop: 10, alignSelf: 'flex-end' }}> </Icon>

                </View>

                <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold', marginStart: 12, }}>{data.item.employe} </Text>
                <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold', marginStart: 12, }}>{data.item.name} </Text>


                <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', marginStart: 12, marginTop: 7 }}>{data.item.description}</Text>
                <Text style={{ color: colors.text, fontSize: 13, fontWeight: 'normal', marginStart: 12, marginTop: 4, alignSelf: 'flex-end' }}>{data.item.date} </Text>

            </Card>


        )
    }

return(

<View style={{height:Dimensions.get('window').height,bottom:12}}> 
<View style={{ flex: 1, backgroundColor: colors.primary,  }}>

<View style={{ width: '100%', height: 77, backgroundColor: colors.background, flexDirection: 'row', columnGap: 10, justifyContent: 'space-between' }}>

    <View style={{ flexDirection: 'row', columnGap: 8 }}>
        <Icon name='arrow-left' color={colors.primary} size={24} style={{ marginTop: 20, marginStart: 4 }}></Icon>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary, marginTop: 22, marginStart: 4 }}> Leave History</Text>
    </View>

</View>
<Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}> Applied Leave List </Text>

<FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>


</View>


</View>

)





}