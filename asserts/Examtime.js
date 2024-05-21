// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';

// // const App = () => {
// //   const [exams, setExams] = useState([]);
// //   const [examName, setExamName] = useState('');
// //   const [examTime, setExamTime] = useState('');
// //   const [examDay, setExamDay] = useState('');
// //   const [editMode, setEditMode] = useState(false);
// //   const [editId, setEditId] = useState(null);
// //   const [modalVisible, setModalVisible] = useState(false);

// //   const handleAddExam = () => {
// //     if (examName.trim() !== '' && examTime.trim() !== '' && examDay.trim() !== '') {
// //       if (editMode) {
// //         const updatedExams = exams.map(exam =>
// //           exam.id === editId ? { ...exam, name: examName, time: examTime, day: examDay } : exam
// //         );
// //         setExams(updatedExams);
// //         setEditMode(false);
// //         setEditId(null);
// //       } else {
// //         setExams([...exams, { id: Date.now().toString(), name: examName, time: examTime, day: examDay }]);
// //       }
// //       setExamName('');
// //       setExamTime('');
// //       setExamDay('');
// //       setModalVisible(false);
// //     }
// //   };

// //   const handleEditExam = (id, name, time, day) => {
// //     setExamName(name);
// //     setExamTime(time);
// //     setExamDay(day);
// //     setEditMode(true);
// //     setEditId(id);
// //     setModalVisible(true);
// //   };

// //   const handleDeleteExam = id => {
// //     setExams(exams.filter(exam => exam.id !== id));
// //   };

// //   const renderItem = ({ item }) => (
// //     <TouchableOpacity
// //       style={styles.exam}
// //       onPress={() => handleEditExam(item.id, item.name, item.time, item.day)}>
// //       <Text>{item.name}</Text>
// //       <Text>{item.time}</Text>
// //       <Text>{item.day}</Text>
// //       <Button title="Delete" onPress={() => handleDeleteExam(item.id)} />
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Exam Timetable</Text>
// //       <Button title="Add Exam" onPress={() => setModalVisible(true)} />
// //       <FlatList
// //         data={exams.sort((a, b) => a.day.localeCompare(b.day) || a.time.localeCompare(b.time))}
// //         renderItem={renderItem}
// //         keyExtractor={item => item.id}
// //       />
// //       <Modal animationType="slide" transparent={true} visible={modalVisible}>
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
// //             <Text style={styles.modalTitle}>{editMode ? 'Edit Exam' : 'Add Exam'}</Text>
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Enter exam name"
// //               value={examName}
// //               onChangeText={text => setExamName(text)}
// //             />
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Enter exam time"
// //               value={examTime}
// //               onChangeText={text => setExamTime(text)}
// //             />
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Enter exam day"
// //               value={examDay}
// //               onChangeText={text => setExamDay(text)}
// //             />
// //             <Button title={editMode ? 'Update' : 'Add'} onPress={handleAddExam} />
// //             <Button title="Cancel" onPress={() => {setModalVisible(false); setEditMode(false); setEditId(null);}} />
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     marginBottom: 10,
// //     padding: 10,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     borderRadius: 5,
// //   },
// //   exam: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingVertical: 10,
// //     paddingHorizontal: 5,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     borderRadius: 5,
// //     marginVertical: 5,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContent: {
// //     backgroundColor: '#fff',
// //     padding: 20,
// //     borderRadius: 10,
// //     width: '80%',
// //   },
// //   modalTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// // });

// // export default App;






// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';

// const App = () => {
//   const [exams, setExams] = useState([]);
//   const [examName, setExamName] = useState('');
//   const [examTime, setExamTime] = useState('');
//   const [examDate, setExamDate] = useState('');
//   const [examDay, setExamDay] = useState('');
//   const [examSubject, setExamSubject] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleAddExam = () => {
//     if (examName.trim() !== '' && examTime.trim() !== '' && examDate.trim() !== '' && examDay.trim() !== '' && examSubject.trim() !== '') {
//       if (editMode) {
//         const updatedExams = exams.map(exam =>
//           exam.id === editId ? { ...exam, name: examName, time: examTime, date: examDate, day: examDay, subject: examSubject } : exam
//         );
//         setExams(updatedExams);
//         setEditMode(false);
//         setEditId(null);
//       } else {
//         setExams([...exams, { id: Date.now().toString(), name: examName, time: examTime, date: examDate, day: examDay, subject: examSubject }]);
//       }
//       setExamName('');
//       setExamTime('');
//       setExamDate('');
//       setExamDay('');
//       setExamSubject('');
//       setModalVisible(false);
//     }
//   };

//   const handleEditExam = (id, name, time, date, day, subject) => {
//     setExamName(name);
//     setExamTime(time);
//     setExamDate(date);
//     setExamDay(day);
//     setExamSubject(subject);
//     setEditMode(true);
//     setEditId(id);
//     setModalVisible(true);
//   };

//   const handleDeleteExam = id => {
//     setExams(exams.filter(exam => exam.id !== id));
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.exam}
//       onPress={() => handleEditExam(item.id, item.name, item.time, item.date, item.day, item.subject)}>
//       <Text>{item.name}</Text>
//       <Text>{item.time}</Text>
//       <Text>{item.date}</Text>
//       <Text>{item.day}</Text>
//       <Text>{item.subject}</Text>
//       <Button title="Delete" onPress={() => handleDeleteExam(item.id)} />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Exam Timetable</Text>
//       <Button title="Add Exam" onPress={() => setModalVisible(true)} />
//       <FlatList
//         data={exams.sort((a, b) => a.day.localeCompare(b.day) || a.time.localeCompare(b.time))}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//       <Modal animationType="slide" transparent={true} visible={modalVisible}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>{editMode ? 'Edit Exam' : 'Add Exam'}</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter exam name"
//               value={examName}
//               onChangeText={text => setExamName(text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Enter exam time"
//               value={examTime}
//               onChangeText={text => setExamTime(text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Enter exam date"
//               value={examDate}
//               onChangeText={text => setExamDate(text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Enter exam day"
//               value={examDay}
//               onChangeText={text => setExamDay(text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Enter exam subject"
//               value={examSubject}
//               onChangeText={text => setExamSubject(text)}
//             />
//             <Button title={editMode ? 'Update' : 'Add'} onPress={handleAddExam} />
//             <Button title="Cancel" onPress={() => {setModalVisible(false); setEditMode(false); setEditId(null);}} />
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
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   exam: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginVertical: 5,
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
//     borderRadius: 10,
//     width: '80%',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

// export default App;
// ===================================



import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';

const ExamTimetableApp = () => {
  const{colors}=useTheme();
  const [exams, setExams] = useState([]);
  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [examTime, setExamTime] = useState('');
  const [examDay, setExamDay] = useState('');

  const addExam = () => {
    if (examName.trim() === '' || examDate.trim() === '' || examTime.trim() === '' || examDay.trim() === '') {
      return;
    }

    const newExam = {
      id: Math.random().toString(),
      name: examName,
      date: examDate,
      time: examTime,
      day: examDay,
    };

    setExams(prevExams => [...prevExams, newExam]);
    setExamName('');
    setExamDate('');
    setExamTime('');
    setExamDay('');
  };

  const deleteExam = id => {
    setExams(prevExams => prevExams.filter(exam => exam.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exam Timetable</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input,{borderColor:colors.text}]}
          placeholder="Exam Name"
          value={examName}
          onChangeText={text => setExamName(text)}
        />
        <TextInput
          style={[styles.input,{borderColor:colors.text}]}
          placeholder="Exam Date"
          value={examDate}
          onChangeText={text => setExamDate(text)}
        />
        <TextInput
          style={[styles.input,{borderColor:colors.text}]}
          placeholder="Exam Time"
          value={examTime}
          onChangeText={text => setExamTime(text)}
        />
        <TextInput
          style={[styles.input,{borderColor:colors.text}]}
          placeholder="Exam Day"
          value={examDay}
          onChangeText={text => setExamDay(text)}
        />
        <Button  title="Add Exam" onPress={addExam} />
      </View>
      <FlatList
        data={exams}
        renderItem={({ item }) => (
          <View style={[styles.exam,{borderColor:colors.text}]}>
            <Text>{item.date}</Text>
            <Text>{item.day}</Text>
            <Text>{item.name}</Text>
            <Text>{item.time}</Text>

            <Button title="Delete" onPress={() => deleteExam(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 9,columnGap:9
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  exam: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,color:'#FF0000',fontWeight:'600'
  },
});

export default ExamTimetableApp;
