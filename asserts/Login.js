import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { TextInput, useTheme, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Login() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://10.0.2.2:3000/user/login-user', {
        email,
        password
      });

      if (response.data.success) {
        const { role } = response.data;
        setIsLoading(false);

        if (role === 'admin') {
          navigation.navigate('schooldrawer'); // Navigate to admin screen
        } else {
          navigation.navigate('schooldrawer'); // Example navigation for non-admin users
        }
      } else {
        setIsLoading(false);
        Alert.alert('Login Failed', response.data.message || 'Invalid email or password');
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
      console.error('Login error:', error);
    }
  };

  return (
    <ImageBackground source={require('./Image/loginbg.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('./Image/School.jpg')} style={styles.logo} />
        <Text style={styles.loginText}>Effortless Attendance, Enhanced Education</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            textContentType='emailAddress'
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Email'
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            textContentType='password'
            secureTextEntry={true}
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Password'
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
            onPress={handleSignIn}
          >
            SIGN IN
          </Button>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 120,
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderRadius: 10,
  },
  loginText: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 30,
    marginTop: 15,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  inputContainer: {
    width: '80%',
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 1,
    borderRadius: 25,
    marginTop: 20,
  },
  textInput: {
    fontSize: 18,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    width: '40%',
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 40,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loadingIndicator: {
    marginTop: 40,
  },
});
