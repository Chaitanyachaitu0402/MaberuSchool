import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, useTheme, Button } from 'react-native-paper'

export default  Otp = ({ navigation }) => {
    const { colors } = useTheme();
    const [otp, setOtp] = useState('');
    const otpInputs = [];
    const otpLength = 6;

    const handleChangeText = (text, index) => {
        otpInputs[index] = text;

        if (text.length === 1 && index < otpLength - 1) {
            otpInputs[index + 1].focus();
        } else if (text.length === 0 && index > 0) {
            otpInputs[index - 1].focus();
        }
        const enteredOtp = otpInputs.join('');
        setOtp(enteredOtp);
    };
    
    return (

        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background
        }}>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                justifyContent: 'center',
                alignSelf: 'center',
                color: colors.primary
            }}>Enter OTP</Text>

            <Text style={{
                fontSize: 20,
                marginBottom: 10,
                color: colors.primary,marginTop:10
            }}>Please enter the OTP sent to your mail:</Text>
            
            <View style={{
                flexDirection: 'row',marginTop:15
            }}>
                {Array(otpLength).fill().map((_, index) => (
                    <TextInput
                        key={index}
                        style={{
                           
                            borderRadius:0,
                            width: 50,
                            height: 50,
                            fontSize: 20,
                            textAlign: 'center',
                            color: colors.text,
                            marginRight: 10,
                            marginTop: 1,
                        }}
                        maxLength={1}
                        keyboardType="number-pad"
                        onChangeText={(text) => handleChangeText(text,index)}
                        ref={(input) => otpInputs[index] = input}
                    />
                ))}
            </View>
            
            <View style={{ marginTop: 10}}>
                <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 20, color: colors.text, fontWeight: 'bold' }} style={{ width: '40%', height: 50, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 6, marginTop: 40 }}onPress={()=>navigation.navigate('Confirmpass')}>SUBMIT </Button >
            </View>

        </View>
    );
};







