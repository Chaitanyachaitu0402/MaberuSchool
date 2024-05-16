import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions, } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';

export default function Review() {
  const [Sectionvalue, setSectionValue] = useState(null);
  const dataa = [
    { label: 'Teacher', value: '1' },
    { label: 'Headmaster', value: '2' },
    { label: 'Principal', value: '3' },
  ];

  const { colors } = useTheme();
  return (
    <SafeAreaView>
<ScrollView>

      <View style={{ flex: 1, backgroundColor: colors.primary,height:Dimensions.get('window').height }}>
        <View style={{ width: '100%', height: 80, backgroundColor: colors.background, flexDirection: 'row', columnGap: 14 }}>
          <Icon name='arrow-left' color={colors.primary} size={24} style={{ marginTop: 24, marginStart: 5 }}></Icon>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primary, marginTop: 23 }}>Review </Text>
        </View>
<View style={{margin:7}}>

        <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.text,margin:2  }}>Student Name: Dhanunjay </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.text,margin:2  }}>Class: VI </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.text,margin:2  }}>Section: A </Text>

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
            maxHeight={500}
            labelField="label"
            valueField="value"
            placeholder="Send To"
            searchPlaceholder="Search..."
            value={Sectionvalue}
            onChange={item => {
              setSectionValue(item.value);
            }}
          // renderLeftIcon={() => (
          //     <Icon style={styles.icon} color="black" name="safety-goggles" size={20} />
          // )}
          />
        </View>
        <TextInput textColor={colors.text}  placeholderTextColor={colors.text} placeholder='Description'multiline={true} style={{ width: '87%',minHeight: 125, borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>

        <View style={{ marginTop: 14 }}>
                        <Button style={{ width: "43%", height: 48, backgroundColor: colors.bg, alignSelf: 'center' }} labelStyle={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 16, color: colors.primary }}>Send</Button>

                    </View>
      </View>
      </ScrollView>

    </SafeAreaView>

  )
}

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
  // iconStyle: {
  //     width: 20,
  //     height: 20,
  // },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});






