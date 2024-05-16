
// import React, { useState, } from 'react';
// import { View, Text, ScrollView, StyleSheet ,} from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import { useTheme, Button, Modal, } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// const Timetable = () => {

//     const { colors } = useTheme();
//     const [showDialog, setShowDialog] = useState(false);
//     const [Timevalue, setTimeValue] = useState(null);
//     const [Dayvalue, setDayValue] = useState(null);
//     const [Subjectvalue, setSubjectValue] = useState(null);
//     const [timetableData, setTimetableData] = useState([
//         ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//         ['9:00 AM-10:00 AM', '', '', '', '', '', ''],
//         ['10:00 AM-11:00 AM', '', '', '', '', '', ''],
//         ['11:00 AM-12:00 PM', '', '', '', '', '', ''],
//         ['12:00 PM-1:00 PM', '', '', '', '', '', ''],
//         ['1:00 PM-2:00 PM', '', '', '', '', '', ''],
//         ['2:00 PM-3:00 PM', '', '', '', '', '', ''],
//         ['3:00 PM-4:00 PM', '', '', '', '', '', ''],
//         ['4:00 PM-5:00 PM', '', '', '', '', '', ''],
//     ]);
    

//     const timedata = [
//         { label: '9:00-10:00 AM', value: '9:00 AM-10:00 AM' },
//         { label: '10:00-11:00 AM', value: '10:00 AM-11:00 AM' },
//         { label: '11:00-12:00 AM', value: '11:00 AM-12:00 AM' },
//         { label: '12:00-1:00 PM', value: '12:00 PM-1:00 PM' },
//         { label: '1:00-2:00 PM', value: '1:00 PM-2:00 PM' },
//         { label: '2:00-3:00 PM', value: '2:00 PM-3:00 PM' },
//         { label: '3:00-4:00 PM', value: '3:00 PM-4:00 PM' },
//         { label: '4:00-5:00 PM', value: '4:00 PM-5:00 PM' },

//     ];

//     const subjectdata = [
//         { label: 'Telugu', value: 'telugu' },
//         { label: 'Maths', value: 'Maths' },
//         { label: 'English', value: 'English' },
//         { label: 'Science', value: 'Science' },
//         { label: 'Social', value: 'Social' },
//         { label: 'Hindi', value: 'Hindi' },

//     ];

//     const daydata = [
//         { label: 'Mon', value: 'Mon' },
//         { label: 'Tue', value: 'Tue' },
//         { label: 'Wed', value: 'Wed' },
//         { label: 'Thu', value: 'Thu' },
//         { label: 'Fri', value: 'Fri' },
//         { label: 'Sat', value: 'Sat' },
//     ];

//     const handleButtonPress = () => {
//         setShowDialog(true);
//     };

//     const handleSave = () => {
//         if (Timevalue && Dayvalue && Subjectvalue) {
//             const timeIndex = timetableData.findIndex(row => row[0] === Timevalue);
//             const dayIndex = timetableData[0].indexOf(Dayvalue);

//             if (timeIndex !== -1 && dayIndex !== -1) {
//                 const updatedTimetable = [...timetableData];
//                 updatedTimetable[timeIndex][dayIndex] = Subjectvalue;
//                 setTimetableData(updatedTimetable);

//                 setTimeValue(null);
//                 setDayValue(null);
//                 setSubjectValue(null);
//                 setShowDialog(false);
//             } else {
//                 alert("Selected time or day is not found.");
//             }
//         } else {
//             alert("Please select both time, day, and subject before saving.");
//         }
//     };

//     return (

//         <View style={styles.container}>
//             <View style={{ backgroundColor: colors.background, width: '100%', height: 80, flexDirection: 'row',justifyContent:'space-between' }}>
// <View style={{flexDirection:'row'}}>
// <Icon name='arrow-left' color={colors.primary} size={23} style={{ width: 36, height: 36, borderRadius: 18, marginTop: 11, marginStart: 14 }} />
//                  <Text style={{ fontSize: 20, color: colors.primary, marginStart: 5, marginTop: 10, fontWeight: 'bold' }}>Timetable</Text>

// </View>
// <View style={{flexDirection:'row',}}>
// <Icon name='pencil' color={colors.primary} size={26} style={{ width: 36, height: 36, borderRadius: 18, marginTop: 11, marginStart: 14, }}onPress={handleButtonPress} />

// </View>



//             </View>
//             <ScrollView horizontal={true}>
//                 <View style={styles.table}>
//                     {timetableData.map((row, rowIndex) => (
//                         <View key={rowIndex} style={styles.row}>
//                             {row.map((cell, cellIndex) => (
//                                 <View key={cellIndex} style={[styles.cell, cellIndex === 0 && styles.firstCell]}>
//                                     <Text style={styles.cellText}>{cell}</Text>
//                                 </View>
//                             ))}
                            
//                         </View>
//                     ))}
//                 </View>
//             </ScrollView>
//             <Modal
//                 visible={showDialog}
//                 transparent={true}
//                 animationType="fade"
//                 onRequestClose={() => setShowDialog(false)}
//             >
//                 <ScrollView>
//                     <View style={styles.modalContainer}>
//                         <View style={styles.modalContent}>
//                             {/* <Text style={{fontSize:16,color:colors.primary}}>This is a dialog box</Text> */}

//                             <View style={{ marginBottom: 15 }}>
//                                 <Dropdown
//                                     style={styles.dropdown}
//                                     data={timedata}
//                                     labelField="label"
//                                     valueField="value"
//                                     placeholder="Select Time"
//                                     value={Timevalue}
//                                     onChange={item => setTimeValue(item.value)}
//                                 />
//                                   <Dropdown
//                                     style={styles.dropdown}
//                                     data={timedata}
//                                     labelField="label"
//                                     valueField="value"
//                                     placeholder="Select Time"
//                                     value={Timevalue}
//                                     onChange={item => setTimeValue(item.value)}
//                                 />
//                                 <Dropdown
//                                     style={styles.dropdown}
//                                     data={daydata}
//                                     labelField="label"
//                                     valueField="value"
//                                     placeholder="Select Day"
//                                     value={Dayvalue}
//                                     onChange={item => setDayValue(item.value)}
//                                 />
//                                 <Dropdown
//                                     style={styles.dropdown}

//                                     data={subjectdata}
//                                     labelField="label"
//                                     valueField="value"
//                                     placeholder="Select Subject"
//                                     value={Subjectvalue}
//                                     onChange={item => setSubjectValue(item.value)}
//                                 />
//                             </View>
//                             <Button onPress={handleSave} style={{ backgroundColor: colors.bg, height: 40, width: '45%' }} labelStyle={{ color: colors.primary, fontSize: 18, alignSelf: 'center', margin: 6 }}> Save</Button>
//                             <View style={{ height: 10 }}>

//                             </View>

//                             <Button title="Close" onPress={() => setShowDialog(false)} style={{ backgroundColor: colors.primary }} labelStyle={{ color: colors.text, fontSize: 18, alignSelf: 'center', margin: 6 }}> Close</Button>

//                             <View style={{ height: 15 }}></View>
//                         </View>
//                     </View>
//                 </ScrollView>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 14,
//         height: 600,
//     },
//     table: {
//         flexDirection: 'column',
//     },
//     row: {
//         flexDirection: 'row',
//         borderBottomWidth: 1,
//         borderColor: '#ccc',
//     },
//     cell: {
//         flex: 1,
//         padding: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#192f6a', backgroundColor: '#FFFFFF', width: 88,
//     },
//     firstCell: {
//         width: 99, height: 73, backgroundColor: 'pink'  // Adjust the width for the Time column
//     },
//     cellText: {
//         textAlign: 'center', fontSize: 14, color: '#000000'
//     },

//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center', top: 12
//         // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalContent: {
//         backgroundColor: '#a8906d',
//         padding: 20,
//         borderRadius: 10,
//         alignItems: 'center', width: '77%', margin: 10, height: 456, justifyContent: 'center'
//     },
//     dropdown: {
//         width: 200,
//         borderBottomColor: 'black',
//         borderBottomWidth: 0.5,
//         borderColor: 'black',
//         borderWidth: 1,
//         justifyContent: 'center',
//         alignSelf: 'center',
//         height: 50,
//         marginTop: 20, backgroundColor: 'white'
//     },

// });

// export default Timetable;






import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ViewBase } from 'react-native';
import { useTheme, Button, Modal } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Timetable = ({navigation}) => {
    const { colors } = useTheme();
    const [showDialog, setShowDialog] = useState(false);
    const [timetableData, setTimetableData] = useState([
        ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ['9:00 AM-10:00 AM', '', '', '', '', '', ''],
        ['10:00 AM-11:00 AM', '', '', '', '', '', ''],
        ['11:00 AM-12:00 PM', '', '', '', '', '', ''],
        ['12:00 PM-1:00 PM', '', '', '', '', '', ''],
        ['1:00 PM-2:00 PM', '', '', '', '', '', ''],
        ['2:00 PM-3:00 PM', '', '', '', '', '', ''],
        ['3:00 PM-4:00 PM', '', '', '', '', '', ''],
        ['4:00 PM-5:00 PM', '', '', '', '', '', ''],
    ]);

    const timedata = [
        { label: '9:00-10:00 AM', value: '9:00 AM-10:00 AM' },
        { label: '10:00-11:00 AM', value: '10:00 AM-11:00 AM' },
        { label: '11:00-12:00 AM', value: '11:00 AM-12:00 AM' },
        { label: '12:00-1:00 PM', value: '12:00 PM-1:00 PM' },
        { label: '1:00-2:00 PM', value: '1:00 PM-2:00 PM' },
        { label: '2:00-3:00 PM', value: '2:00 PM-3:00 PM' },
        { label: '3:00-4:00 PM', value: '3:00 PM-4:00 PM' },
        { label: '4:00-5:00 PM', value: '4:00 PM-5:00 PM' },
    ];

    const subjectdata = [
        { label: 'Telugu', value: 'Telugu' },
        { label: 'Maths', value: 'Maths' },
        { label: 'English', value: 'English' },
        { label: 'Science', value: 'Science' },
        { label: 'Social', value: 'Social' },
        { label: 'Hindi', value: 'Hindi' },
    ];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const handleButtonPress = () => {
        setShowDialog(true);
    };

    const handleSave = () => {
        // Handle save logic
    };

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: colors.background, width: '100%', height: 50, flexDirection: 'row',alignSelf:'center',justifyContent:'center' }}>
                
                <Text style={{ color: colors.primary, fontSize: 19, fontWeight: 'bold',  margin: 6,}}onPress={handleButtonPress}>ADD </Text>

                    {/* <Icon name='plus' color={colors.primary} size={26} style={{ width: 36, height: 36, borderRadius: 18, marginTop: 11, marginStart: 14 }} onPress={handleButtonPress} /> */}
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.table}>
                    {timetableData.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {row.map((cell, cellIndex) => (
                                <View key={cellIndex} style={[styles.cell, cellIndex === 0 && styles.firstCell]}>
                                    <Text style={styles.cellText}>{cell}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Modal
                visible={showDialog}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowDialog(false)}
            >
                <ScrollView horizontal={true} >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={{ marginBottom: 15 }}>
                                {timedata.map((timeItem, timeIndex) => (
                                    <View key={timeIndex} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                        <Text style={{ fontSize: 18 }}>{timeItem.label}</Text>
                                        {days.map((day, dayIndex) => (
                                          <Dropdown
                                          key={dayIndex}
                                          style={{ width: 100, marginLeft: 10, marginBottom: 10 }} // Add marginBottom to create space between dropdowns
                                          data={subjectdata}
                                          labelField="label"
                                          valueField="value"
                                          placeholder={day}
                                          onChange={(item) => {
                                              const updatedTimetable = [...timetableData];
                                              updatedTimetable[timeIndex + 1][dayIndex + 1] = item.value;
                                              setTimetableData(updatedTimetable);
                                          }}
                                          iconSize={20} // Set the size of the dropdown icon
                                          iconColor={colors.primary} // Set the color of the dropdown icon
                                      />
                                      
                                        ))}
                                    </View>
                                ))}
                            </View>
                            <Button onPress={handleSave} style={{ backgroundColor: colors.bg, height: 40, width: '30%',margin:5 }} labelStyle={{ color: colors.primary, fontSize: 18, alignSelf: 'center', margin: 6 }}> Save</Button>
                            <View style={{ height: 10 }}></View>
                            <Button title="Close" onPress={() => setShowDialog(false)} style={{ backgroundColor: colors.b }} labelStyle={{ color: colors.text, fontSize: 18, alignSelf: 'center', margin: 6 }}> Close</Button>
                            <View style={{ height: 15 }}></View>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
        height: 600,padding:8
    },
    table: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    cell: {
        flex: 1,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#192f6a', backgroundColor: '#FFFFFF', width: 92,
    },
    firstCell: {
        width: 99, height: 73, backgroundColor: 'pink'  // Adjust the width for the Time column
    },
    cellText: {
        textAlign: 'center', fontSize: 15, color: '#000000',
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center', alignSelf:'center',
    },
    
        modalContent: {
            backgroundColor: '#ffffff',
            padding: 10,
            borderRadius: 10,
            alignself: 'center',alignContent:'center',
            width: '89%',
            margin: 10,
            height: 550,columnGap:10,
            justifyContent: 'center',
            flexDirection: 'row', // Align items horizontally
            flexWrap: 'wrap', // Allow content to wrap to the next line if necessary
        },
        
    });
    

export default Timetable;

