
import React, { useState, useEffect } from 'react';

import { View, ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme ,TextInput,Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

const StaticTable = ({navigation}) => {
  
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
   
  const data= [
    { label: 'Teaching', value: '1' },
    { label: 'Non Teaching', value: '2' },
   
  ];

    const { colors } = useTheme();

   
    // Function to generate rows dynamically
   
    return (
        <SafeAreaView>
            <View style={{ flex:1}}></View>
            
          
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} onChangeText={daydetails} value={day} placeholder='Enter Year' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.b, marginTop: 11, alignSelf: 'center', }}></TextInput>
            <TextInput textColor={colors.text} placeholderTextColor={colors.text} onChangeText={monthdetails} value={month} placeholder='Enter month' style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.b, marginTop: 11, alignSelf: 'center', }}></TextInput>

            <View >
                        <Dropdown
                             style={[style.dropdown, { borderBottomColor: colors.text, borderColor: colors.text }]}
                             placeholderStyle={[style.placeholderStyle, { color: colors.text }]}
                             selectedTextStyle={[style.selectedTextStyle, { color: colors.text }]}
                      
                            inputSearchStyle={style.inputSearchStyle}
                            // iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Staff"
                            searchPlaceholder="Search..."
                            value={section}
                            onChange={item => {
                                setsections(item.value);
                            }}
                        // renderLeftIcon={() => (
                        //     <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
                        // )}
                        />
          
          <Button style={{ width: "43%", height: 48, backgroundColor: colors.bg, alignSelf: 'center',marginTop:9 }} labelStyle={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 16,color:colors.text }}onPress={()=>navigation.navigate('Attendancelist')}>Apply</Button>

            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    dropdown: {

        width: '87%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.7,
        borderColor: 'black',
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
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center', marginStart: 5,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
        marginStart: 6, fontWeight: '500'
    },
    // iconStyle: {
    //     width: 20,
    //     height: 20,
    // },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default StaticTable;