import { View, StyleSheet, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const bounceAnim = useRef(new Animated.Value(10)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.sequence([
      // Bounce animation
      Animated.timing(bounceAnim, {
        toValue: 1.2, // Scale up to 20% more than the original size
        duration: 500, // Duration of the bounce animation
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 1, // Scale back to original size
        duration: 500, // Duration of the bounce animation
        useNativeDriver: true,
      }),
      // Full screen animation
      Animated.timing(scaleAnim, {
        toValue: 1, // Target scale
        duration: 2000, // Duration in ms
        useNativeDriver: true, // Use native driver for better performance
      }),
    ]).start(() => {
      navigation.navigate('Onboard');
    });

    const delay = setTimeout(() => {
      navigation.navigate('Onboard');
    }, 3000);

    return () => clearTimeout(delay);
  }, [bounceAnim, navigation, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { transform: [{ scale: bounceAnim }] }]}>
        <Animated.Image
          source={require('./Image/School.jpg')}
          style={[styles.gif, { transform: [{ scale: scaleAnim }] }]}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F0F4',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  animatedimg:{
  borderRadius: 10,
  },
});

export default Splash;
