// import { View, Text, ScrollView, SafeAreaView, Alert, Image, TouchableOpacity, Dimensions } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { TextInput, Button, useTheme, Card } from 'react-native-paper'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


// export default function Menubar({ navigation }) {

//     const { colors } = useTheme();

//     const product = () => {
//         navigation.navigate("Demoproductdetails")
//       }
//       const drawermenu = () => {
//         navigation.toggleDrawer();
//     }

//     return (
//         <SafeAreaView>

//             <ScrollView>

//                 <View style={{ flex: 1, backgroundColor: colors.background, height: Dimensions.get('window').height }} >

//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.primary }}>

//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

//                             <View>
//                                 <Card style={{ width: 90, height: 90, elevation: 90, borderRadius: 100, marginTop: 20, marginStart: 15 }} onPress={drawermenu}>
//                                     <Image source={require("./Image/profilepic.jpg")} resizeMode='cover' style={{ height: "100%", width: '100%', justifyContent: 'center', borderRadius: 7, alignSelf: 'center', marginTop: 0 }}></Image>
//                                 </Card>
//                             </View>

//                             <View>

//                                 <Text style={{ color: colors.background, fontSize: 20, marginTop: 20, marginStart: 20, fontWeight: 'bold' }}>Robert Joe</Text>

//                                 <View style={{ flexDirection: 'row', marginTop: 10 }}>
//                                     <Icon name='mail' color={colors.background} size={25} style={{ height: 36, borderRadius: 18, marginStart: 18 }} />
//                                     <Text style={{ marginStart: 10, color: colors.background }}>user@gmail.com</Text>
//                                 </View>

//                                 <View style={{ flexDirection: 'row' }}>
//                                     <Icon name='phone-outline' color={colors.background} size={25} style={{ height: 36, borderRadius: 18, marginStart: 18 }} />
//                                     <Text style={{ marginStart: 10, color: colors.background }}>1234567890</Text>
//                                 </View>

//                             </View>
//                         </View>
//                     </View>


//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='home' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Home</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='school' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Branches</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='dots-grid' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Class</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='account-group' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Teachers</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='account-group' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Headmasters</Text>
//                         </View>

//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='account-group' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Students</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='timetable' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Timetables</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='bell' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Notifications</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='calendar-month' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Events</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='account' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Profile</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'center' }}>

//                         <View style={{ width: '85%', flexDirection: 'row' }}>
//                             <Icon name='power' color={colors.primary} size={25} style={{ width: "10%", height: 36, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', marginStart: 10, marginTop: 10 }} />
//                             <Text style={{ width: "90%", fontSize: 15, color: colors.primary, marginStart: 10, marginTop: 12, textAlignVertical: 'center' }}>Log out</Text>
//                         </View>
//                         <Icon name='chevron-right' color={colors.primary} size={28} style={{ width: "15%", height: "100%", textAlign: 'center', verticalAlign: 'bottom' }} />

//                     </TouchableOpacity>

//                 </View>
//             </ScrollView>
//         </SafeAreaView>

//     )
// }







// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';

// const MarksScreen = () => {
//   const [marksList, setMarksList] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [newMark, setNewMark] = useState('');
//   const [grade, setGrade] = useState('');
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const grades = ['A', 'B', 'C', 'D', 'F'];

//   const addMark = () => {
//     if (subject.trim() === '') {
//       alert('Please enter subject name');
//       return;
//     }
    
//     if (newMark.trim() === '' || isNaN(newMark)) {
//       alert('Please enter a valid mark');
//       return;
//     }

//     const newMarksList = [...marksList, { subject, mark: parseFloat(newMark), grade }];
//     setMarksList(newMarksList);
//     setSubject('');
//     setNewMark('');
//     setGrade('');
//   };

//   const toggleModal = () => {
//     setIsModalVisible(!isModalVisible);
//   };

//   const selectGrade = (selectedGrade) => {
//     setGrade(selectedGrade);
//     toggleModal();
//   };

//   const calculatePercentage = () => {
//     const totalMarks = marksList.reduce((total, item) => total + item.mark, 0);
//     const percentage = (totalMarks / (marksList.length * 100)) * 100;
//     return isNaN(percentage) ? 0 : percentage.toFixed(2);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={[styles.input, { flex: 1, marginRight: 10 }]}
//           placeholder="Enter Subject"
//           value={subject}
//           onChangeText={setSubject}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Mark"
//           keyboardType="numeric"
//           value={newMark}
//           onChangeText={setNewMark}
//         />
//         <TouchableOpacity
//           style={styles.gradeButton}
//           onPress={toggleModal}>
//           <Text>{grade !== '' ? grade : 'Select Grade'}</Text>
//         </TouchableOpacity>
//         <Button
//           title="Add Mark"
//           onPress={addMark}
//         />
//       </View>
      
//       <View style={styles.marksContainer}>
//         <Text style={styles.heading}>Marks:</Text>
//         <FlatList
//           data={marksList}
//           renderItem={({ item }) => (
//             <Text style={styles.markItem}>{`${item.subject}: ${item.mark} (${item.grade})`}</Text>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//         <Text style={styles.percentage}>Percentage: {calculatePercentage()}%</Text>
//       </View>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isModalVisible}
//         onRequestClose={toggleModal}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             {grades.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.modalItem}
//                 onPress={() => selectGrade(item)}>
//                 <Text>{item}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     paddingHorizontal: 10,
//     height: 40,
//   },
//   gradeButton: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     paddingHorizontal: 10,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   marksContainer: {
//     flex: 1,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   markItem: {
//     marginBottom: 5,
//   },
//   percentage: {
//     marginTop: 10,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//   },
//   modalItem: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
// });

// export default MarksScreen;








// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';

// const ExamResultView = () => {
//   // Dummy exam results data
//   const [examResults, setExamResults] = useState([
//     {
//       studentName: 'John Doe',
//       subjects: [
//         { name: 'Mathematics', score: 85 },
//         { name: 'Science', score: 78 },
//         { name: 'History', score: 90 },
//         // Add more subjects as needed
//       ],
//     },

//     // {
//     //   studentName: 'Jane Smith',
//     //   subjects: [
//     //     { name: 'Mathematics', score: 72 },
//     //     { name: 'Science', score: 85 },
//     //     { name: 'History', score: 80 },
//     //     // Add more subjects as needed
//     //   ],
//     // },
//     // Add more students as needed
//   ]);

//   // Function to calculate percentage and grade
//   const calculatePercentageAndGrade = (score) => {
//     let percentage = (score / 100) * 100;
//     let grade = '';

//     if (percentage >= 90) {
//       grade = 'A+';
//     } else if (percentage >= 80) {
//       grade = 'A';
//     } else if (percentage >= 70) {
//       grade = 'B';
//     } else if (percentage >= 60) {
//       grade = 'C';
//     } else if (percentage >= 50) {
//       grade = 'D';
//     } else {
//       grade = 'F';
//     }

//     return { percentage, grade };
//   };

//   // Function to render exam result table for each student
//   const renderExamResultTable = (student) => (
//     <View key={student.studentName} style={styles.tableContainer}>
//       <Text style={styles.tableHeader}>{student.studentName}</Text>
//       <View style={styles.table}>
//         {/* Render column headers */}
//         <View style={styles.row}>
//           <Text style={styles.headerCell}>Subject</Text>
//           <Text style={styles.headerCell}>Score</Text>
//           <Text style={styles.headerCell}>Percentage</Text>
//           <Text style={styles.headerCell}>Grade</Text>
//         </View>
//         {/* Render each subject's exam result */}
//         {student.subjects.map((subject, index) => (
//           <View key={index} style={styles.row}>
//             <Text style={styles.cell}>{subject.name}</Text>
//             <Text style={styles.cell}>{subject.score}</Text>
//             <Text style={styles.cell}>({calculatePercentageAndGrade(subject.score).percentage}%)</Text>
//             <Text style={styles.cell}>{calculatePercentageAndGrade(subject.score).grade}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Student Exam Results</Text>
//       {/* Render exam result tables for each student */}
//       {examResults.map(renderExamResultTable)}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   tableContainer: {
//     marginBottom: 40,
//   },
//   tableHeader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   row: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   headerCell: {
//     flex: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     backgroundColor: '#f2f2f2',
//   },
//   cell: {
//     flex: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     textAlign: 'center',
//   },
// });

// export default ExamResultView;





import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const ExamResultView = () => {
  // Dummy exam results data
  const [examResults, setExamResults] = useState([
    {
      studentName: 'John Doe',
      subjects: [
        { name: 'Mathematics', score: 85 },
        { name: 'Science', score: 78 },
        { name: 'History', score: 90 },
        { name: 'Hindi', score: 66 },
        { name: 'Telugu', score: 44 },

        // Add more subjects as needed
      ],
    },
    // {
    //   studentName: 'Jane Smith',
    //   subjects: [
    //     { name: 'Mathematics', score: 72 },
    //     { name: 'Science', score: 85 },
    //     { name: 'History', score: 80 },
    //     // Add more subjects as needed
    //   ],
    // },
    // Add more students as needed
  ]);

  // Function to calculate percentage and grade
  const calculatePercentageAndGrade = (score) => {
    let percentage = (score / 100) * 100;
    let grade = '';

    if (percentage >= 90) {
      grade = 'A+';
    } else if (percentage >= 80) {
      grade = 'A';
    } else if (percentage >= 70) {
      grade = 'B';
    } else if (percentage >= 60) {
      grade = 'C';
    } else if (percentage >= 50) {
      grade = 'D';
    } else {
      grade = 'F';
    }

    return { percentage, grade };
  };

  // Function to calculate total score, percentage, and grade for each student
  const calculateTotalScoreAndGrade = (subjects) => {
    let totalScore = subjects.reduce((acc, curr) => acc + curr.score, 0);
    let totalPercentage = (totalScore / (subjects.length * 100)) * 100;
    let totalGrade = calculatePercentageAndGrade(totalPercentage).grade;

    return { totalScore, totalPercentage, totalGrade };
  };

  // Function to render exam result table for each student
  const renderExamResultTable = (student) => {
    const { totalScore, totalPercentage, totalGrade } = calculateTotalScoreAndGrade(student.subjects);

    return (
      <View key={student.studentName} style={styles.tableContainer}>
        <Text style={styles.tableHeader}>{student.studentName}</Text>
        <View style={styles.table}>
          {/* Render column headers */}
          <View style={styles.row}>
            <Text style={styles.headerCell}>Subject</Text>
            <Text style={styles.headerCell}>Score</Text>
            <Text style={styles.headerCell}>Percentage</Text>
            <Text style={styles.headerCell}>Grade</Text>
          </View>
          {/* Render each subject's exam result */}
          {student.subjects.map((subject, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{subject.name}</Text>
              <Text style={styles.cell}>{subject.score}</Text>
              <Text style={styles.cell}>({calculatePercentageAndGrade(subject.score).percentage}%)</Text>
              <Text style={styles.cell}>{calculatePercentageAndGrade(subject.score).grade}</Text>
            </View>
          ))}
          {/* Render total row */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.totalCell]}>Total</Text>
            <Text style={[styles.cell, styles.totalCell]}>{totalScore}</Text>
            <Text style={[styles.cell, styles.totalCell]}>({totalPercentage.toFixed(2)}%)</Text>
            <Text style={[styles.cell, styles.totalCell]}>{totalGrade}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Student Exam Results</Text>
      {/* Render exam result tables for each student */}
      {examResults.map(renderExamResultTable)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tableContainer: {
    marginBottom: 40,
  },
  tableHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  totalCell: {
    fontWeight: 'bold',
  },
});

export default ExamResultView;




















