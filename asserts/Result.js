// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
// import { Card, useTheme, Button, Menu } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import LinearGradient from 'react-native-linear-gradient';

// export default function Result() {
//     const{colors}=useTheme();
//   return (
//     <View style={{flex:1,backgroundColor:colors.primary,alignSelf:'center',width:'100%'}}>
//       <Text style={{fontSize:24,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Student Exam Result </Text>
// <View style={{marginTop:5}}>

//       <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Name:John </Text>
//       <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Section:A</Text>
//       <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Class:II</Text>
//       </View>


// <View style={{margin:5,}}>

// <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Class:II</Text>
// <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Class:II</Text>
// <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Class:II</Text>



// </View>










//     </View>
//   )
// }

import React, { useState, useEffect } from 'react';
 import { View, Text, StyleSheet, FlatList, Dimensions,Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, useTheme, Button, Menu ,TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';

const Table = ({navigation}) => {

  const [leavevalue, setleaveValue] = useState(null);

    const data = [
        { label: 'Quaterly', value: '1' },
        { label: 'HalfYeary', value: '2' },
        { label: 'Annally', value: '3' },
       
    ];

    const{colors}=useTheme();

  return (
    <SafeAreaView>
      <ScrollView>

    
    <View style={{margin:5,backgroundColor:colors.primary,flex:1}}> 
                    <Image source={require("./Image/School.jpg")} style={{ width: "30%", height: 99, marginStart: 5, alignSelf: 'center', margin: 6 }}></Image>

     <Text style={{fontSize:24,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Student Exam Result </Text>
 <View style={{marginTop:5}}>

      <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Name:John </Text>
      <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Section:A</Text>
      <Text style={{fontSize:16,color:colors.background,fontWeight:'bold',alignSelf:'center'}}>Class:II</Text>
      </View>

      <View >
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            // iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select section"
                            searchPlaceholder="Search..."
                            value={leavevalue}
                            onChange={item => {
                                setleaveValue(item.value);
                            }}
                       
                        />
                    </View>
    <View style={{ flexDirection: 'column',borderWidth: 1 ,  borderColor: 'black',margin: 8,borderRadius:5}}>
        
      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: 'black', height: 57,backgroundColor:colors.bg}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.primary,fontWeight:'bold',fontSize:17}}>Subject</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.primary,fontWeight:'bold',fontSize:17}}>Marks</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.primary,fontWeight:'bold',fontSize:17}}>%percent</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,height: '',color:colors.primary,fontWeight:'bold',fontSize:17}}>Grade</Text>

      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: 'black', height: 62,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Maths</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>89</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>89%</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>A</Text>

      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: 'black', height: 62,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Social</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>91</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>91%</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>A</Text>
      </View>
    
      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: 'black', height: 62,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Hindi</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>78</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>78%</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>A</Text>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: 'black', height: 62,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Science</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>67</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>67%</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>B</Text>
      </View>


      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: 'black', height: 62,}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>Telugu</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>77</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>77%</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text}}>B</Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 1, borderBottomColor: 'black', height: 62,backgroundColor:'#F9F7F9'}}>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text,fontWeight:'bold',fontSize:19,}}>Total</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text,fontWeight:'bold'}}>770</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text,fontWeight:'bold'}}>77%</Text>
        <Text style={{flex: 1, textAlign: 'center', padding: 10,color:colors.text,fontWeight:'bold'}}>B</Text>
      </View>

    </View>
    </View>
    </ScrollView>
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({

  dropdown: {

      width: '87%',
      borderBottomColor: 'black',
      borderBottomWidth: 0.5,
      borderColor: 'black',
      borderWidth: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      height: 50,
      marginTop: 20
  },
  icon: {
      margin: 10,
  },
  placeholderStyle: {
      fontSize: 16,
      height: 20,
      color: 'black',
      alignSelf: 'center',
      justifyContent: 'center',margin:7
  },
  selectedTextStyle: {
      fontSize: 19,
      color: 'black',margin:5

  },
  iconStyle: {
      width: 20,
      height: 20,
  },
  inputSearchStyle: {
      height: 40,
      fontSize: 16,
  },
});

export default Table;
