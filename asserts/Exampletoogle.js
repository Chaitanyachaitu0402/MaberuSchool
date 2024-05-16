// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions, SafeAreaView } from 'react-native'
// import { useTheme} from 'react-native-paper'


// const  Exampletoogle=()=> {
//     const { colors } = useTheme();
//         const [isEnabled, setIsEnabled] = useState(false);

//         const toggleSwitch = () => {
//           setIsEnabled(previousState => !previousState);
//         };


//     return (

//         <ScrollView>

//             <View style={{ flex: 1, backgroundColor: colors.primary, height: 1000 }}>

//                 <View style={styles.container}>
//                     <TouchableOpacity onPress={toggleSwitch} style={[styles.toggleButton, { backgroundColor: isEnabled ? 'green' : 'red' }]}>
//                         <Text style={styles.buttonText}>{isEnabled ? 'Enabled' : 'Disabled'}</Text>
//                     </TouchableOpacity>
//                 </View>

//             </View>

//         </ScrollView>
//     )
// }
// export default Exampletoogle;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     text: {
//       fontSize: 20,
//       marginBottom: 20,
//     },
//     toggleButton: {
//       padding: 10,
//       borderRadius: 20,
//     },
//     buttonText: {
//       color: 'white',
//       fontWeight: 'bold',
//     },
//   });



// import React, { useState } from 'react';
// import { View, Switch, Text, StyleSheet } from 'react-native';

// const ToggleeSwitch = () => {
//   const [isPresent, setIsPresent] = useState(false);

//   const toggleSwitch = () => {
//     setIsPresent(previousState => !previousState);
//   };

//   return (
//     <View>

//       <View style={styles.container}>
//         <Text style={styles.label}>{isPresent ? 'Present' : 'Absent'}:</Text>
//         <Switch
//           trackColor={{ false: "red", true: "blue" }}
//           thumbColor={isPresent ? "#f4f3f4" : "#f4f3f4"}
//           ios_backgroundColor="#3e3e3e"
//           onValueChange={toggleSwitch}
//           value={isPresent}
//         />
//       </View>

//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 25,
//     paddingVertical: 20,
//   },
//   label: {
//     fontSize: 16,

//   },
// });

// export default ToggleeSwitch;







// marks added code start


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, FlatList, TextInput, Button, ScrollView } from 'react-native';

// const App = () => {
//   const [students, setStudents] = useState([]);
//   const [newStudentName, setNewStudentName] = useState('');
//   const [newMathScore, setNewMathScore] = useState('');
//   const [newScienceScore, setNewScienceScore] = useState('');
//   const [newHistoryScore, setNewHistoryScore] = useState('');
//   const [newExamType, setNewExamType] = useState('');

//   useEffect(() => {
//     // Fetch student data from an API or local storage
//     const fetchData = async () => {
//       // Simulating fetching data from an API
//       const response = await fetch('https://api.example.com/students');
//       const data = await response.json();
//       setStudents(data);
//     };

//     fetchData();
//   }, []);

//   const addStudent = () => {
//     const newStudent = {
//       name: newStudentName,
//       exams: [
//         { type: newExamType, scores: { math: parseInt(newMathScore), science: parseInt(newScienceScore), history: parseInt(newHistoryScore) } }
//       ]
//     };
//     setStudents([...students, newStudent]);
//     setNewStudentName('');
//     setNewMathScore('');
//     setNewScienceScore('');
//     setNewHistoryScore('');
//     setNewExamType('');
//   };

//   const calculatePercentageAndGrade = (scores) => {
//     const totalMarks = scores.math + scores.science + scores.history;
//     const percentage = (totalMarks / 3).toFixed(2);
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

//   const renderStudentItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text style={styles.name}>{item.name}</Text>
//       {item.exams.map((exam, index) => (
//         <View key={index}>
//           <Text>Exam Type: {exam.type}</Text>
//           <Text>Math Score: {exam.scores.math}</Text>
//           <Text>Science Score: {exam.scores.science}</Text>
//           <Text>History Score: {exam.scores.history}</Text>
//           <Text>Total Percentage: {calculatePercentageAndGrade(exam.scores).percentage}%</Text>
//           <Text>Grade: {calculatePercentageAndGrade(exam.scores).grade}</Text>
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Student Exam Results</Text>
//       <ScrollView>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             value={newStudentName}
//             onChangeText={setNewStudentName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Math Score"
//             value={newMathScore}
//             onChangeText={setNewMathScore}
//             keyboardType="numeric"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Science Score"
//             value={newScienceScore}
//             onChangeText={setNewScienceScore}
//             keyboardType="numeric"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="History Score"
//             value={newHistoryScore}
//             onChangeText={setNewHistoryScore}
//             keyboardType="numeric"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Exam Type"
//             value={newExamType}
//             onChangeText={setNewExamType}
//           />
//           <Button title="Add Student" onPress={addStudent} />
//         </View>
//         <Text style={styles.subHeader}>Students List</Text>
//         <FlatList
//           data={students}
//           renderItem={renderStudentItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   subHeader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     marginTop: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default App;


// marks added code end.








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



import React, { useState } from 'react';
import { View, Text, Button, ProgressBarAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { ProgressBar } from 'react-native-paper'
import DocumentPicker from 'react-native-document-picker';

const VideoUploadScreen = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });

      console.log(result);

      setSelectedFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        console.error('Error picking video file:', err);
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.warn('file selected');
      return;
    }

    const apiUrl = 'YOUR_UPLOAD_API_ENDPOINT';

    const data = new FormData();
    data.append('video', {
      uri: selectedFile.uri,
      type: selectedFile.type,
      name: selectedFile.name,
    });

    const response = await fetch(apiUrl, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const responseData = await response.json();

    console.log('Upload success', responseData);
    // Handle success
  };

  return (
    <View>
      <Button title="Pick Video" onPress={handleFilePick} />
      {selectedFile && <Text>Selected File: {selectedFile.name}</Text>}
      <Button title="Upload Video" onPress={handleUpload} />
      <ProgressBar styleAttr="Horizontal" indeterminate={false} progress={progress / 100} />
      <Text>{progress.toFixed(2)}% Uploaded</Text>
    </View>
  );
};

export default VideoUploadScreen;


