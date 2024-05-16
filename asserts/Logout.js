import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

const Principalhome = ({ navigation }) => {
  const { colors } = useTheme();
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(true); // Set to true initially

  const handleLogout = () => {
    AsyncStorage.clear();
    // Perform logout actions here
    // For example, clearing user data, resetting authentication state, etc.
    // After logout, navigate to the login screen or any other appropriate screen
    navigation.navigate('Onboard'); // Replace 'Login' with your actual login screen name
  };

  const hideLogoutPopup = () => {
    setLogoutPopupVisible(false);
  };

  const handleConfirmLogout = () => {
    hideLogoutPopup();
    handleLogout();
  };

  return (
    <View style={styles.container}>
      <TextInput
        textColor={colors.text}
        placeholderTextColor={colors.text}
        textContentType='name'
        activeOutlineColor={colors.text}
        outlineColor={colors.text}
        mode='outlined'
        style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}
      />
      <TextInput
        textColor={colors.text}
        placeholderTextColor={colors.text}
        textContentType='name'
        activeOutlineColor={colors.text}
        outlineColor={colors.text}
        mode='outlined'
        placeholder='Mother Occcupation'
        style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', marginTop: 20 }}
      />

      {logoutPopupVisible && (
        <View style={styles.popup}>
          <Text>Are you sure you want to logout?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={() => navigation.navigate('Principalhome')} />
            <Button title="Logout" onPress={handleConfirmLogout} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,width:'66%',height:177,
    zIndex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Principalhome;
