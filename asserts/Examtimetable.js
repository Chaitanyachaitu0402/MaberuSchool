
// import React, { useState, useEffect } from 'react';
//  import { View, Text, StyleSheet, FlatList, Dimensions,Image, SafeAreaView, ScrollView } from 'react-native';
// import { Card, useTheme, Button, Menu } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import LinearGradient from 'react-native-linear-gradient';

// export default function Feesview  ({navigation})  {
//     const{colors}=useTheme();

//   return (
//     <SafeAreaView>
//         <ScrollView >
//         <View style={{margin:5,backgroundColor:colors.primary,flex:1,}}> 
//                     <Image source={require("./Image/School.jpg")} style={{ width: "30%", height: 99, marginStart: 5, alignSelf: 'center', margin: 6 }}></Image>

//      <Text style={{fontSize:24,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Student Fees Information </Text>
//  <View style={{marginTop:5}}>

//       <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Name:John </Text>
//       <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Section:A</Text>
//       <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Class:II</Text>
//       </View>


//     <View style={{ flexDirection: 'column',borderWidth: 1 ,  borderColor: 'black',margin: 4,borderRadius:5}}>

//       <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 57,backgroundColor:colors.background}}>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.primary,fontWeight:'bold',fontSize:17}}>Date</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.primary,fontWeight:'bold',fontSize:17}}>Day</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,height: '',color:colors.primary,fontWeight:'bold',fontSize:17}}>Subject</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,height: '',color:colors.primary,fontWeight:'bold',fontSize:17}}>Timing</Text>

//       </View>

//       <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: 'black', height: 46,}}>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Registration Fee</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2500</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2700</Text>

//       </View>





//       <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 46,}}>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Tuition Fee</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>4000</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>4300</Text>
//       </View>

//       <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 46,}}>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Stationary Fee</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2200</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2350</Text>
//       </View>

//       <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: colors.text, height: 46,}}>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Transport Fee</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2000</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>2300</Text>
//       </View>

//       <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1,  borderBottomColor: colors.text, height: 46,}}>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Sports Fee</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>3200</Text>
//         <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>3400</Text>
//       </View>

//     </View>
//     </View>

//         </ScrollView>
//     </SafeAreaView>

//   );
// };

// // 







import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, useTheme, Button, Menu, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';

export default function Createfee() {
    const { colors } = useTheme();

    const data = [
        { label: 'LKG', value: '1' },
        { label: 'UKG', value: '2' },
        { label: 'Class 1', value: '3' },
        { label: 'Class 2', value: '4' },
        { label: 'Class 3', value: '5' },
        { label: 'Class 4', value: '6' },
        { label: 'Class 5', value: '7' },
        { label: 'Class 6', value: '8' },
        { label: 'Class 7', value: '9' },
        { label: 'Class 8', value: '10' },
        { label: 'Class 9', value: '11' },
        { label: 'Class 10', value: '12' },

    ];
    const dataa = [
        { label: 'Section A', value: '1' },
        { label: 'Section B', value: '2' },
        { label: 'Section C', value: '3' },
    ];
    const [classvalue, setClassValue] = useState(null);
    const [Sectionvalue, setSectionValue] = useState(null);


    return (
        <SafeAreaView>
            <ScrollView >

                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>
                    <Image source={require("./Image/School.jpg")} style={{ width: "30%", height: 99, marginStart: 5, alignSelf: 'center', margin: 6 }}></Image>

                    <Text style={{ fontSize: 24, color: colors.background, fontWeight: 'bold', alignSelf: 'center' }}>Exam Timetable </Text>


                    <View>
                        <Dropdown
                            style={[styles.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
                            placeholderStyle={[styles.placeholderStyle, { color: colors.text }]}
                            selectedTextStyle={[styles.selectedTextStyle, { color: colors.text }]}

                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Class"
                            searchPlaceholder="Search..."
                            value={classvalue}
                            onChange={item => {
                                setClassValue(item.value);
                            }}

                        />
                    </View>
                    <View>
                        <Dropdown
                            style={[styles.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
                            placeholderStyle={[styles.placeholderStyle, { color: colors.text }]}
                            selectedTextStyle={[styles.selectedTextStyle, { color: colors.text }]}

                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={dataa}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Section"
                            searchPlaceholder="Search..."
                            value={Sectionvalue}
                            onChange={item => {
                                setSectionValue(item.value);
                            }}

                        />
                    </View>
                    <View style={{ height: 14 }} >
                    </View >

                    <View style={{ flexDirection: 'column', borderWidth: 1, borderColor: 'black', borderRadius: 5, width: '96%', alignSelf: 'center' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.text, height: 57, backgroundColor: colors.background }}>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 8, color: colors.primary, fontWeight: 'bold', fontSize: 17 }}>Date</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.primary, fontWeight: 'bold', fontSize: 17 }}>Day</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, height: '', color: colors.primary, fontWeight: 'bold', fontSize: 17 }}>Subject</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, height: '', color: colors.primary, fontWeight: 'bold', fontSize: 17 }}>Timing</Text>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.text, height: 46, }}>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>02/04/2024</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>Monday</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>Social</Text>

                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>10:00AM</Text>
                        </View>




                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.text, height: 46, }}>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>03/04/2024</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>Tuesday</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>Physics</Text>

                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>10:00AM</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.text, height: 46, }}>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>04/04/2024</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>wednesday</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>Science</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>10:00AM</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.text, height: 46, }}>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>05/04/2024</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>thursday</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>Telugu</Text>

                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>10:00AM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.text, height: 46, }}>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>06/04/2024</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>Friday</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>Hindi</Text>

                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>10:00AM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.text, height: 46, }}>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>07/04/2024</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>saturday</Text>
                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>Maths</Text>

                            <Text style={{ flex: 1, textAlign: 'center', padding: 10, color: colors.text }}>10:00AM</Text>
                        </View>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    dropdown: {

        width: '89%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.7,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 57,
        marginTop: 20,
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
