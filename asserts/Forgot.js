import React, { useState } from 'react';
import { View, Text, Image, } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'


export default function Forgot({navigation}) {
    const { colors } = useTheme();
   
    
    return (

        <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center' }}>

            <Image source={require("./Image/School.jpg")} style={{ height: 150, width: 150, borderRadius: 10, justifyContent: 'center', alignSelf: 'center' }}></Image>

            <View style={{ justifyContent: 'center' }}>

                <Text style={{ fontSize: 16, alignSelf: 'center', color: colors.primary, marginTop: 40 }}>Please enter your registered email ID</Text>

                <View style={{ width: '80%', height: 60, alignSelf: 'center', flexDirection: 'row', backgroundColor: colors.primary, borderColor: colors.primary, padding: 1, borderRadius: 25, marginTop: 40 }}>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor='transparent' underlineColor='transparent' placeholder='Email' style={{ fontSize: 18, width: '100%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}></TextInput>
                </View>

                <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 60, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 6, marginTop: 40 }} onPress={()=>navigation.navigate('Otp')}>  NEXT</Button >

                <Text style={{ fontSize: 16, alignSelf: 'center', color: colors.primary, marginTop: 10 }}>I accept the Terms and Conditions</Text>

            </View>

            {/* <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
            }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: colors.primary
                }}>Enter OTP</Text>
                <Text style={{
                    fontSize: 16,
                    color: colors.primary
                }}>Please enter the OTP sent to your phone:</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    {Array(otpLength).fill().map((_, index) => (
                        <TextInput
                            key={index}
                            style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 5,
                                width: 50,
                                height: 50,
                                fontSize: 16,
                                textAlign: 'center',
                                color: colors.text,
                                marginRight: 10,
                                marginTop: 1
                            }}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={(text) => handleChangeText(text, index)}
                            ref={(input) => otpInputs[index] = input}
                        />
                    ))}
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button title='submit' color={'green'} onPress={home}  ></Button>
                </View>

            </View> */}

        </View>
    )
}