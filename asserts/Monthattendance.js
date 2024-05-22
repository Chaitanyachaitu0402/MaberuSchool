// // import { StyleSheet, View, Text, Image, Dimensions, ScrollView,Alert,TouchableOpacity,FlatList } from 'react-native';
// // import { useTheme, Card, Button, TextInput } from 'react-native-paper';
// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import React, { useState, useEffect } from 'react';
// // import { Dropdown } from 'react-native-element-dropdown';
// // import DatePicker from 'react-native-date-picker';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // export default function Staffattendanceview() {

// //     const horizentalview = [{date:'01-03-2024',status:'Present'},{date:'02-03-2024',status:'Present'},{date:'03-03-2024',status:'Absent'},{date:'04-03-2024',status:'Present'},{date:'05-03-2024',status:'Absent'},{date:'06-03-2024',status:'Present'},{date:'07-03-2024',status:'Present'},{date:'08-03-2024',status:'Present'},{date:'09-03-2024',status:'Present'},{date:'10-03-2024',status:'Present'},{date:'11-03-2024',status:'Present'},{date:'12-03-2024',status:'Present'},{date:'13-03-2024',status:'Present'},{date:'14-03-2024',status:'Present'},{date:'15-03-2024',status:'Present'},{date:'16-03-2024',status:'Present'},{date:'17-03-2024',status:'Present'},{date:'18-03-2024',status:'Present'},{date:'19-03-2024',status:'Present'},{date:'20-03-2024',status:'Present'}]
// //     const apperance=(data)=>{
// //      console.log("data:",data) 

// //      return(
// //         <View style={{flexDirection:'row',margin:10,justifyContent:'space-between',columnGap:4}}>
// // <Text style={{fontSize:18,color:colors.text}}>{data.item.date}</Text>

// // <View>
// //             {(() => {
// //               switch (data.item.status) {
// //                 case 'Present':
// //                   return <Text style={{ color: "#008000", fontWeight: 'bold', fontSize: 18 }}>Present</Text>;
// //                 case 'Absent':
// //                   return <Text style={{ color: "#FF0000", fontWeight: 'bold', fontSize: 18 }}>Absent</Text>;
// //                 default:
// //                   return <Text style={{ color: "#000000", fontWeight: 'bold', fontSize: 18 }}></Text>;

// //               }
// //             })()}
// //           </View>


// //         </View>
// //      )
// //     }

// //     const {colors}=useTheme();
// //     const [day, setday] = useState("")
// //     const daydetails = (name) => {
// //         setday(name)
// //         console.log(name);
// //     }
// //     const [leavevalue, setleaveValue] = useState(null);

// //     const dataa = [
// //         { label: 'January', value: '1' },
// //         { label: 'February', value: '2' },
// //         { label: 'March', value: '3' },
// //         { label: 'April', value: '3' },
// //         { label: 'May', value: '3' },
// //         { label: 'June', value: '3' },
// //         { label: 'July', value: '3' },
// //         { label: 'August', value: '3' },
// //         { label: 'September', value: '3' },
// //         { label: 'October', value: '3' },
// //         { label: 'November', value: '3' },
// //         { label: 'December', value: '3' },

// //     ];
// //     const data = [
// //         { label: 'name1', value: '1' },
// //         { label: 'Name2', value: '2' },
// //         { label: 'Name3', value: '3' },

// //     ];
// //   return (
// //     <View style={{flex:1,backgroundColor:colors.primary}}>
// //                     <Text style={{ fontSize: 21, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6,width:'88%',alignSelf:'center' }}>Name:L.Dheeraj</Text>

// //                     <TextInput textColor={colors.text} placeholderTextColor={colors.text} onChangeText={daydetails} value={day} placeholder='Enter Year' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.b, marginTop: 11, alignSelf: 'center', }}></TextInput>

// //                           <View >
// //                         <Dropdown
// //                             style={styles.dropdown}
// //                             placeholderStyle={styles.placeholderStyle}
// //                             selectedTextStyle={styles.selectedTextStyle}
// //                             inputSearchStyle={styles.inputSearchStyle}
// //                             // iconStyle={styles.iconStyle}
// //                             data={dataa}
// //                             search
// //                             maxHeight={400}
// //                             labelField="label"
// //                             valueField="value"
// //                             placeholder="Select Month"
// //                             searchPlaceholder="Search..."
// //                             value={leavevalue}
// //                             onChange={item => {
// //                                 setleaveValue(item.value);
// //                             }}
// //                         // renderLeftIcon={() => (
// //                         //     <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
// //                         // )}
// //                         />
// //                     </View>



// //                     <FlatList data={horizentalview} renderItem={apperance} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>



// //     </View>
// //   )
// // }


// // const styles = StyleSheet.create({
// //     dropdown: {

// //         width: '87%',
// //         borderBottomColor: 'black',
// //         borderBottomWidth: 0.7,
// //         borderColor: 'black',
// //         borderWidth: 1,
// //         justifyContent: 'center',
// //         alignSelf: 'center',
// //         height: 57,
// //         marginTop: 20,backgroundColor:'#d0d9d2'
// //     },
// //     icon: {
// //         margin: 10,


// //     },
// //     placeholderStyle: {
// //         fontSize: 16,
// //         height: 20,
// //         color: 'black',
// //         alignSelf: 'center',
// //         justifyContent: 'center', marginStart: 5,
// //     },
// //     selectedTextStyle: {
// //         fontSize: 16,
// //         color: 'black',
// //         marginStart: 6, fontWeight: '500'
// //     },
// //     // iconStyle: {
// //     //     width: 20,
// //     //     height: 20,
// //     // },
// //     inputSearchStyle: {
// //         height: 40,
// //         fontSize: 16,
// //     },
// // });








// // import React, { useState } from 'react';
// // import { Calendar, LocaleConfig } from 'react-native-calendars';

// // const App = () => {
// //   const [selected, setSelected] = useState('');
// //   const [markedDates, setMarkedDates] = useState({});

// //   const handleDayPress = (day) => {
// //     const selectedDate = day.dateString;
// //     const updatedMarkedDates = { ...markedDates };

// //     // Toggle selection of the date
// //     if (updatedMarkedDates[selectedDate]) {
// //       delete updatedMarkedDates[selectedDate];
// //     } else {
// //       updatedMarkedDates[selectedDate] = { selected: true, marked: true, selectedDotColor: 'orange' };
// //     }

// //     setSelected(selectedDate);
// //     setMarkedDates(updatedMarkedDates);
// //   };

// //   return (
// //     <Calendar
// //       onDayPress={handleDayPress}
// //       markedDates={markedDates}
// //     />
// //   );
// // };

// // export default App;







import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, TouchableOpacity, FlatList } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Calendar } from 'react-native-calendars';

export default function App() {
  const [month, setmonth] = useState(null);

  const dataa = [
    { label: 'January', value: '1' },
    { label: 'February', value: '2' },
    { label: 'March', value: '3' },
    { label: 'April', value: '3' },
    { label: 'May', value: '3' },
    { label: 'June', value: '3' },
    { label: 'July', value: '3' },
    { label: 'August', value: '3' },
    { label: 'September', value: '3' },
    { label: 'October', value: '3' },
    { label: 'November', value: '3' },
    { label: 'December', value: '3' },

  ];

  const selectedDate = {"2024-04-03": {"customStyles": {"container":  {
    backgroundColor: 'red', // Background color for selected date
    borderRadius: 16, // Border radius for rounded corners
  }, "text": {
            color: 'white', // Text color for selected date
          }}, "marked": true, "selected": true}, "2024-04-20": {"customStyles": {"container":  {
            backgroundColor: 'red', // Background color for selected date
            borderRadius: 16, // Border radius for rounded corners
          }, "text": {
            color: 'white', // Text color for selected date
          }}, "marked": true, "selected": true}, "2024-04-10": {"customStyles": {"container":  {
            backgroundColor: 'red', // Background color for selected date
            borderRadius: 16, // Border radius for rounded corners
          }, "text": {
            color: 'white', // Text color for selected date
          }}, "marked": true, "selected": true}, "2024-04-15": {"customStyles": {"container":  {
            backgroundColor: 'red', // Background color for selected date
            borderRadius: 16, // Border radius for rounded corners
          }, "text": {
            color: 'white', // Text color for selected date
          }}, "marked": true, "selected": true}}

  const { colors } = useTheme();
  const [selected, setSelected] = useState('');
  const [markedDates, setMarkedDates] = useState({});

  const [day, setday] = useState("")
  const daydetails = (name) => {
    setday(name)
    console.log(name);
  }
  const [id, setid] = useState("")
  const iddetails = (name) => {
    setid(name)
    console.log(name);
  }
  const handleDayPress = (day) => {
    const selectedDate = day.dateString;
    const updatedMarkedDates = { ...markedDates };
    console.log("updatedMarkedDates ========>", markedDates)
    // Toggle selection of the date
    // "2024-04-10": {"customStyles": {"container": [Object], "text": [Object]}, "marked": true, "selected": true}
    if (updatedMarkedDates[selectedDate]) {
      delete updatedMarkedDates[selectedDate];
    } else {
      updatedMarkedDates[selectedDate] = {
        selected: true,
        marked: true,
        // Add custom styles for selected dates
        customStyles: {
          container: {
            backgroundColor: 'red', // Background color for selected date
            borderRadius: 16, // Border radius for rounded corners
          },
          text: {
            color: 'white', // Text color for selected date
          },
        },
      };
    }

    setSelected(selectedDate);
    setMarkedDates(updatedMarkedDates);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <TextInput textColor={colors.text} placeholderTextColor={colors.text} onChangeText={daydetails} value={day} placeholder='Enter Year' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.b, marginTop: 11, alignSelf: 'center', }}></TextInput>
      <TextInput textColor={colors.text} placeholderTextColor={colors.text} onChangeText={iddetails} value={id} placeholder='Enter Id' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.b, marginTop: 11, alignSelf: 'center', }}></TextInput>

      <View >
        <Dropdown
                             style={[styles.dropdown,{borderBottomColor: colors.text,borderColor: colors.text  }]}
                             placeholderStyle={[styles.placeholderStyle,{color: colors.text}]}
                             selectedTextStyle={[styles.selectedTextStyle,{color:  colors.text}]}
         
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.Iconstyle}
          data={dataa}
          search
          maxHeight={400}
          labelField="label"
          valueField="value"
          placeholder="Select Month"
          searchPlaceholder="Search..."
          value={month}
          onChange={item => {
            setmonth(item.value);
          }}

        />
      </View>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: '#808080',
          height: 350, top: 10
        }}
        theme={{
          backgroundColor: colors.primary,
          calendarBackground: colors.primary,
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#FF0000',
          selectedDayTextColor: 'white',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#808080',
        }}
        onDayPress={handleDayPress}
        markedDates={selectedDate}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  dropdown: {

    width: '87%',
    borderBottomColor: 'black',
    borderBottomWidth: 0.7,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 57,
    marginTop: 20, backgroundColor: '#d0d9d2'
  },
  Icon: {
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
  Iconstyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});








