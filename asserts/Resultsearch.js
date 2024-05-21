import React, { useState, useEffect } from 'react';
 import { View, Text, StyleSheet, FlatList, Dimensions,Image,SafeAreaView,ScrollView } from 'react-native';
import { Card, useTheme, Button, Menu,TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import Examsresult from './Examsresult';

export default function Resultsearch({navigation}) {
    
    const horizentalview = [{date:'Rani',status:'Pass',marks:'77%'},{date:'Dillesh',status:'Pass',marks:'55%'},{date:'Regina',status:'Fail',marks:'55%'},{date:'Suresh',status:'Pass',marks:'55%'},{date:'jilani',status:'Pass',marks:'77%'},{date:'Neeriskhana',status:'Pass',marks:'87%'},{date:'dhanush',status:'Pass',marks:'83%'},{date:'Indu',status:'Pass',marks:'88%'},{date:'Rani',status:'Pass',marks:'77%'},{date:'geetha',status:'Pass',marks:'77%'},{date:'gayatri',status:'Pass',marks:'77%'},{date:'madhavi',status:'Pass',marks:'87%'},{date:'mukesh',status:'Pass',marks:'91%'},{date:'Raju',status:'Pass',marks:'77%'}]
    const apperance=(data)=>{
     console.log("data:",data) 
     
     return(
        <View style={{flexDirection:'row',margin:10,justifyContent:'space-between',columnGap:4,flex:1,alignSelf:'center'}}>
<Text style={{fontSize:18,color:colors.text,flex:1}}>{data.item.date}</Text>
<Text style={{fontSize:18,color:colors.text,flex:1}}>{data.item.marks}</Text>

<View>
            {(() => {
              switch (data.item.status) {
                case 'Pass':
                  return <Text style={{ color: "#008000", fontWeight: 'bold', fontSize: 18 }}>Pass</Text>;
                case 'Fail':
                  return <Text style={{ color: "#FF0000", fontWeight: 'bold', fontSize: 18 }}>Fail</Text>;
                default:
                  return <Text style={{ color: "#000000", fontWeight: 'bold', fontSize: 18 }}></Text>;

              }
            })()}
          </View>


        </View>

     
     )
    }



    const{colors}=useTheme();
    const [Teachervalue, setTeacherValue] = useState(null);
    const [leavevalue, setleaveValue] = useState(null);

    const data = [
        { label: 'I', value: '1' },
        { label: 'II', value: '2' },
        { label: 'III', value: '3' },
        { label: 'IV', value: '3' },
        { label: 'V', value: '3' },
        { label: 'VI', value: '3' },
        { label: 'VII', value: '3' },
        { label: 'VIII', value: '3' },

    ];
    const dataa = [
        { label: 'A', value: '1' },
        { label: 'B', value: '2' },
        { label: 'C', value: '3' },
    ];

  

  return (
<SafeAreaView>
    <ScrollView>

   
    <View style={{flex:1,backgroundColor:colors.primary}}>
      <View>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={400}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Class"
                    searchPlaceholder="Search..."
                    value={Teachervalue}

                    onChange={item => {
                        setTeacherValue(item.value);
                    }}
                  
                />
            </View>

            <View >
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            // iconStyle={styles.iconStyle}
                            data={dataa}
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
                        // renderLeftIcon={() => (
                        //     <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
                        // )}
                        />
                    </View>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text}  placeholder='Student id' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>

 <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,width:'93%',alignSelf:'center'}}>
 <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.bg, marginTop: 23 }}>Name</Text>
 <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.bg, marginTop: 23 }}>percentage</Text>
 <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.bg, marginTop: 23 }}>Status </Text>

    </View>  
<FlatList data={horizentalview} renderItem={apperance} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>






  </View>
  </ScrollView>
</SafeAreaView> 
  )
}
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