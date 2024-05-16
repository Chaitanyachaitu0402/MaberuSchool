// // ConfirmPasswordScreen.js

// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// const ConfirmPasswordScreen = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleConfirm = () => {
//     if (password === confirmPassword) {
//       // Passwords match, proceed with your logic here
//       console.log('Passwords match!');
//     } else {
//       // Passwords don't match, handle the error
//       console.log('Passwords do not match!');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <Icon name="lock" type="font-awesome" />
//         <TextInput
//           secureTextEntry
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           style={styles.input}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Icon name="lock" type="font-awesome" />
//         <TextInput
//           secureTextEntry
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           style={styles.input}
//         />
//       </View>
//       <Button title="Confirm" onPress={handleConfirm} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//   },
// });

// export default ConfirmPasswordScreen;





// ConfirmPasswordScreen.js

// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
//  import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// const ConfirmPasswordScreen = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordStrength, setPasswordStrength] = useState('');
//   const navigation = useNavigation();

//   const handlePasswordChange = (value) => {
//     setPassword(value);
//     // Perform password strength validation here
//     const strength = calculatePasswordStrength(value);
//     setPasswordStrength(strength);
//   };

//   const calculatePasswordStrength = (password) => {
//     // Simple password strength calculation logic
//     if (password.length >= 8) {
//       return 'Strong';
//     } else if (password.length >= 6) {
//       return 'Medium';
//     } else {
//       return 'Weak';
//     }
//   };

//   const handleConfirm = () => {
//     if (password === confirmPassword) {
//       // Passwords match, navigate to another screen
//       navigation.navigate('Login'); // Replace 'NextScreen' with the name of your next screen
//     } else {
//       // Passwords don't match, handle the error
//       console.log('Passwords do not match!');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <Icon name="lock" type="font-awesome" />
//         <TextInput
//           secureTextEntry
//           placeholder="Password"
//           value={password}
//           onChangeText={handlePasswordChange}
//           style={styles.input}
//         />
//       </View>
//       <Text>Password Strength: {passwordStrength}</Text>
//       <View style={styles.inputContainer}>
//         <Icon name="lock" type="font-awesome" />
//         <TextInput
//           secureTextEntry
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           style={styles.input}
//         />
//       </View>
//       <Button title="Confirm" onPress={handleConfirm} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//   },
// });

// export default ConfirmPasswordScreen;







import React, { useState } from 'react';
import { View, TextInput,  StyleSheet, Text } from 'react-native';
import { Button,useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ConfirmPasswordScreen = () => {
    const { colors } = useTheme();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    // Perform password strength validation here
    const strength = calculatePasswordStrength(value);
    setPasswordStrength(strength);
  };

  const calculatePasswordStrength = (password) => {
    // Simple password strength calculation logic
    if (password.length >= 8) {
      return 'Strong';
    } else if (password.length >= 6) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  const handleConfirm = () => {
    if (password === confirmPassword) {
      // Passwords match, navigate to another screen
      navigation.navigate('Login'); // Replace 'Login' with the name of your next screen
    } else {
      // Passwords don't match, handle the error
      console.log('Passwords do not match!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} />
        <TextInput
          secureTextEntry={!isPasswordVisible}
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          style={styles.input}
          placeholderTextColor={colors.text}
        />
        <Icon
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={20}
          onPress={togglePasswordVisibility}
        />
      </View>
      <Text>Password Strength: {passwordStrength}</Text>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} />
        <TextInput
          secureTextEntry={!isConfirmPasswordVisible}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
        />
        <Icon
          name={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
          size={20}
          onPress={toggleConfirmPasswordVisibility}
        />
      </View>
      <Button style={{ width: "35%", height: 44, backgroundColor: colors.bg, alignSelf: 'center', marginTop: 13 }} labelStyle={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 10,color:colors.text }}onPress={handleConfirm}>Save</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default ConfirmPasswordScreen;
