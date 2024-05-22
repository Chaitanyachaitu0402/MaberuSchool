import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import { TextInput, useTheme, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [admission, setAdmission] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('schooldrawer3');
    }, 2000); // Simulate a network request delay
  };

  return (
    <ImageBackground source={require('./Image/loginbg.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('./Image/School.jpg')} style={styles.logo} />
        <Text style={styles.loginText}>Effortless Attendance, Enhanced Education</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value={admission}
            onChangeText={setAdmission}
            textColor={colors.text}
            placeholderTextColor={colors.text}
            textContentType='name'
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            placeholder='Admission / Register id'
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
