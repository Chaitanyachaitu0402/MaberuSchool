
// import React, { useState, useEffect } from 'react';

// import { View, ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';
// import { useTheme ,TextInput} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Dropdown } from 'react-native-element-dropdown';
// import DatePicker from 'react-native-date-picker';

// const StaticTable = () => {
   
//     const [leavevalue, setleaveValue] = useState(null);
//     const [sections, setsections] = useState(null);
//     const [day, setday] = useState("")
//     const daydetails = (name) => {
//         setday(name)
//         console.log(name);
//     }
//     const [month, setmonth] = useState("")

//     const monthdetails = (name) => {
//       setmonth(name)
//       console.log(name);
//   }
//     const dataa = [
//       { label: 'Class I', value: '1' },
//       { label: 'Class II', value: '2' },
//       { label: 'Class III', value: '3' },
//       { label: 'Class IV', value: '4' },
//       { label: 'Class V', value: '5' },
//       { label: 'Class VI', value: '6' },
//       { label: 'Class VII', value: '7' },
//       { label: 'Class VIII', value: '8' },
//       { label: 'Class IX', value: '9' },
//       { label: 'Class X', value: '10' },
    
//     ];
//     const section = [
//         { label: 'Section A', value: '1' },
//         { label: 'Section B', value: '2' },
//         { label: 'Section C', value: '3' },
       
//       ];
//     const { colors } = useTheme();

//     const cellStyle = (content) => {
//         if (content === 'P') {
//             return styles.presentCell;
//         } else if (content === 'A') {
//             return styles.absentCell;
//         } else {
//             return styles.cell;
//         }
//     };

//     // Function to generate rows dynamically
//     const generateRows = (totalRows) => {
//         const rows = [];
//         for (let i = 0; i < totalRows; i++) {
//             rows.push(
//                 <View key={i} style={{ height: 30 }}>
//                     <Text style={[styles.cell, styles.rowHeader]}> {i + 2}</Text>
//                     <Text style={cellStyle('P')}>P</Text>
//                     <Text style={cellStyle('P')}>P</Text>
//                     <Text style={cellStyle('A')}>A</Text>
//                     <Text style={cellStyle('P')}>P</Text>
//                     <Text style={cellStyle('P')}>P</Text>
//                     <Text style={cellStyle('P')}>P</Text>
//                     <Text style={cellStyle('P')}>P</Text>
//                     <Text style={cellStyle('P')}>P</Text>
//                     <Text style={cellStyle('P')}>P</Text>
//                     <Text style={cellStyle('P')}>P</Text>

//                 </View>
//             );
//         }
//         return rows;
//     };

//     return (
//         <SafeAreaView>
//             <View style={{ height: 44 }}></View>
            

//                     <View >
//                         <Dropdown
//                             style={style.dropdown}
//                             placeholderStyle={style.placeholderStyle}
//                             selectedTextStyle={style.selectedTextStyle}
//                             inputSearchStyle={style.inputSearchStyle}
//                             // iconStyle={styles.iconStyle}
//                             data={dataa}
//                             search
//                             maxHeight={400}
//                             labelField="label"
//                             valueField="value"
//                             placeholder="Select Class"
//                             searchPlaceholder="Search..."
//                             value={leavevalue}
//                             onChange={item => {
//                                 setleaveValue(item.value);
//                             }}
//                         // renderLeftIcon={() => (
//                         //     <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
//                         // )}
//                         />
//                     </View>

//                     <View >
//                         <Dropdown
//                             style={style.dropdown}
//                             placeholderStyle={style.placeholderStyle}
//                             selectedTextStyle={style.selectedTextStyle}
//                             inputSearchStyle={style.inputSearchStyle}
//                             // iconStyle={styles.iconStyle}
//                             data={sections}
//                             search
//                             maxHeight={400}
//                             labelField="label"
//                             valueField="value"
//                             placeholder="Select Section"
//                             searchPlaceholder="Search..."
//                             value={section}
//                             onChange={item => {
//                                 setsections(item.value);
//                             }}
//                         // renderLeftIcon={() => (
//                         //     <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
//                         // )}
//                         />
//                     </View>
//                     <TextInput textColor={colors.text} placeholderTextColor={colors.text} onChangeText={daydetails} value={day} placeholder='Enter Year' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.b, marginTop: 11, alignSelf: 'center', }}></TextInput>
//             <TextInput textColor={colors.text} placeholderTextColor={colors.text} onChangeText={monthdetails} value={month} placeholder='Enter month' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.b, marginTop: 11, alignSelf: 'center', }}></TextInput>

//             <View style={styles.container}>
           

//                 <ScrollView horizontal={true}>
//                     <View>
//                         {/* Static column */}
//                     </View>
//                     <View>
//                         {/* Static column */}
//                         <Text style={[styles.cell, styles.columnHeader]}>Names</Text>
//                         <Text style={styles.cell}>name1</Text>
//                         <Text style={styles.cell}>name2</Text>
//                         <Text style={styles.cell}>name3</Text>
//                         <Text style={styles.cell}>name4</Text>
//                         <Text style={styles.cell}>name5</Text>
//                         <Text style={styles.cell}>name6</Text>
//                         <Text style={styles.cell}>name7</Text>
//                         <Text style={styles.cell}>name8</Text>
//                         <Text style={styles.cell}>name9</Text>
//                         <Text style={styles.cell}>name10</Text>

//                     </View>
//                 </ScrollView>
//                 <ScrollView vertical={true} horizontal={true}>
//                     {/* Static row */}
//                     <View style={{ height: 37 }}>
//                         <Text style={[styles.cell, styles.rowHeader]}>1</Text>
//                         <Text style={cellStyle('A')}>A</Text>
//                         <Text style={cellStyle('P')}>P</Text>
//                         <Text style={cellStyle('P')}>P</Text>
//                         <Text style={cellStyle('P')}>P</Text>
//                         <Text style={cellStyle('P')}>P</Text>
//                         <Text style={cellStyle('P')}>P</Text>
//                         <Text style={cellStyle('A')}>A</Text>
//                         <Text style={cellStyle('P')}>P</Text>
//                         <Text style={cellStyle('A')}>A</Text>
//                         <Text style={cellStyle('P')}>P</Text>

//                     </View>
//                     {/* Generate additional rows */}
//                     {generateRows(29)}
//                 </ScrollView>
//             </View>
//         </SafeAreaView>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         width: '94%',
//         alignSelf: 'center',margin:7
//     },
//     cell: {
//         borderWidth: 1,
//         borderColor: '#ffffff',
//         padding: 10,color:'#ffffff',
//         fontSize: 14,width:144,height:40,backgroundColor:'#192f6a'
//     },
//     columnHeader: {
//         fontWeight: 'bold',
//         borderWidth: 1,
//         backgroundColor: 'green',
//         fontSize: 15 // background color for column headers
//     },
//     rowHeader: {
//         fontWeight: 'bold',
//         borderWidth: 1,
//         backgroundColor: '#192f6a',
//         fontSize: 20,
//         color: 'white', // background color for row headers
//         height: 46, // height of row
//         textAlign: 'center', // center text vertically
//         lineHeight: 30 // align text vertically
//     },
//     presentCell: {
//         backgroundColor: 'white',
//         height: 39,
//         borderColor: 'black',
//         borderWidth: 1,
//         textAlign: 'center',
//         color: 'green',
//         fontSize: 16,
//         fontWeight: '700'
//     },
//     absentCell: {
//         backgroundColor: '#ffffff',
//         height: 40,
//         borderColor: 'black',
//         borderWidth: 1,
//         textAlign: 'center',
//         color: 'red',
//         fontSize: 16,
//         fontWeight: '700'
//     },
// });
// const style = StyleSheet.create({
//     dropdown: {

//         width: '87%',
//         borderBottomColor: 'black',
//         borderBottomWidth: 0.7,
//         borderColor: 'black',
//         borderWidth: 1,
//         justifyContent: 'center',
//         alignSelf: 'center',
//         height: 57,
//         marginTop: 20,backgroundColor:'#d0d9d2'
//     },
//     icon: {
//         margin: 10,


//     },
//     placeholderStyle: {
//         fontSize: 16,
//         height: 20,
//         color: 'black',
//         alignSelf: 'center',
//         justifyContent: 'center', marginStart: 5,
//     },
//     selectedTextStyle: {
//         fontSize: 16,
//         color: 'black',
//         marginStart: 6, fontWeight: '500'
//     },
//     // iconStyle: {
//     //     width: 20,
//     //     height: 20,
//     // },
//     inputSearchStyle: {
//         height: 40,
//         fontSize: 16,
//     },
// });

// export default StaticTable;







import React, { useState, useEffect } from 'react';

import { View, ScrollView, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useTheme ,TextInput,Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

const StaticTable = ({navigation}) => {
     const [classes, setclasses] = useState(null);

        const [section, setsections] = useState(null);

    const [day, setday] = useState("")
    const daydetails = (name) => {
        setday(name)
        console.log(name);
    }
    const [month, setmonth] = useState("")
const monthdetails = (name) => {
      setmonth(name)
      console.log(name);
  }

  const data = [
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

    const { colors } = useTheme();

 



    return (
            <View style={{flex:1,backgroundColor:colors.primary,height:Dimensions.get('window').height}}>

            
          
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} onChangeText={daydetails} value={day} placeholder='Enter Year' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.b, marginTop: 11, alignSelf: 'center', }}></TextInput>
            <TextInput textColor={colors.text} placeholderTextColor={colors.text} onChangeText={monthdetails} value={month} placeholder='Enter month' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.b, marginTop: 11, alignSelf: 'center', }}></TextInput>

            <View >
                        <Dropdown
                            style={style.dropdown}
                            placeholderStyle={style.placeholderStyle}
                            selectedTextStyle={style.selectedTextStyle}
                            inputSearchStyle={style.inputSearchStyle}
                            // iconStyle={styles.iconStyle}
                            data={data}
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
           

           
                    <Button style={{ width: "43%", height: 48, backgroundColor: colors.bg, alignSelf: 'center',marginTop:9 }} labelStyle={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 16,color:colors.text }}onPress={()=>navigation.navigate('Attendancelist')}>Apply</Button>

            </View>

    );
};
export default StaticTable;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '94%',
        alignSelf: 'center',margin:7
    },
    cell: {
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 10,color:'#ffffff',
        fontSize: 14,width:144,height:40,backgroundColor:'#192f6a'
    },
    columnHeader: {
        fontWeight: 'bold',
        borderWidth: 1,
        backgroundColor: 'green',
        fontSize: 15 // background color for column headers
    },
    rowHeader: {
        fontWeight: 'bold',
        borderWidth: 1,
        backgroundColor: '#192f6a',
        fontSize: 20,
        color: '#ffffff', // background color for row headers
        height: 46, // height of row
        textAlign: 'center', // center text vertically
        lineHeight: 30 // align text vertically
    },
    presentCell: {
        backgroundColor: '#ffffff',
        height: 39,
        borderColor: '#000000',
        borderWidth: 1,
        textAlign: 'center',
        color: 'green',
        fontSize: 16,
        fontWeight: '700'
    },
    absentCell: {
        backgroundColor: '#ffffff',
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        textAlign: 'center',
        color: 'red',
        fontSize: 16,
        fontWeight: '700'
    },
});
const style = StyleSheet.create({
    dropdown: {

        width: '87%',
        borderBottomColor: '#000000',
        borderBottomWidth: 0.7,
        borderColor: '#000000',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 57,
        marginTop: 12,backgroundColor:'#d0d9d2'
    },
    icon: {
        margin: 10,


    },
    placeholderStyle: {
        fontSize: 16,
        height: 20,
        color: '#000000',
        alignSelf: 'center',
        justifyContent: 'center', marginStart: 5,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#000000',
        marginStart: 6, fontWeight: '500'
    },
   
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

