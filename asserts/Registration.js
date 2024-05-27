import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ActivityIndicator, Alert, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { TextInput, useTheme, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [motheroccupation, setmotheroccupation] = useState('');
  const [password, setPassword] = useState('');
  const [mother, setmother] = useState('');
  const [fatheroccupation, setfatheroccupation] = useState('');
  const [father, setfather] = useState('');
  const [Branch, setBranch] = useState('');
  const [date, setdate] = useState('');
  const [rollnumber, setrollnumber] = useState('');
  const [name, setname] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [birthdate, setbirthdate] = useState(new Date())
    const [openn, setOpenn] = useState(false)
    const [birthdata, setbirthdata] = useState("")


  return (
    <SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.loginText}>Creat Account</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value={name}
            onChangeText={setname}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Full Name'
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={rollnumber}
            onChangeText={setrollnumber}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Roll Number'
            style={styles.textInput}
          />
        </View>

        <View style={{ justifyContent: 'center', alignSelf: 'center', width: '90%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1,backgroundColor:colors.primary}}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpenn(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Date of birth' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', }}>{birthdata ? birthdate.toLocaleDateString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={openn}
                            mode='date'
                            date={birthdate}
                            onConfirm={(date) => {
                                setOpenn(false)
                                setbirthdate(date)
                                setbirthdata(date)
                                console.log("==========>" + date)
                            }}
                            onCancel={() => {
                                setOpenn(false)
                            }}>
                        </DatePicker>
                    </View>


        <View style={styles.inputContainer}>
          <TextInput
            value={Branch}
            onChangeText={setBranch}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Branch Name'
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={father}
            onChangeText={setfather}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Father Name'
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={fatheroccupation}
            onChangeText={setfatheroccupation}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Father Occupation'
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={mother}
            onChangeText={setmother}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Mother Name'
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={motheroccupation}
            onChangeText={setmotheroccupation}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Mother Occupation'
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Mobile Number'
            style={styles.textInput}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#4146B5" style={styles.loadingIndicator} />
        ) : (
          <Button
            buttonColor={colors.bg}
            labelStyle={styles.buttonLabel}
            style={styles.button}
          >
            Register
          </Button>
        )}
      </View>
        </ScrollView>
    </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,backgroundColor:"#192f6a",height:Dimensions.get('window').height
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderRadius: 10,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center',margin:10
  },
  inputContainer: {
    width: '90%',
    height: 46,
    flexDirection: 'row',
    padding: 1,margin:8,alignSelf:'center'
  },
  textInput: {
    fontSize: 18,
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  button: {
    width: '40%',
    height: 42,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 6,margin:5
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loadingIndicator: {
    marginTop: 40,
  },
});
