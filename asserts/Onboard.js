import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Login from '../asserts/Login';

const slides = [
  {
    key: 1,
    title: 'Interactive Dashboard',
    text: 'Stay on top of your tasks with our dynamic, real-time dashboard.',
    image: require('./Image/demo.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Authentication',
    text: 'Secure your access with seamless, robust authentication.',
    image: require('./Image/onboard2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Get Started',
    text: 'Begin your journey effortlessly with our intuitive onboarding.',
    image: require('./Image/onboard3.png'),
    backgroundColor: '#22bcb5',
  }
];

export default function Onboard() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Next</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Done</Text>
      </View>
    );
  };

  const _onDone = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowRealApp(true);
    }, 2000); // Simulate a loading delay
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4146B5" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (showRealApp) {
    return <Login />;
  } else {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}
        onDone={_onDone}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#4146B5",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  image: {
    borderRadius: 50,
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: '#4146B5',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#4146B5',
  },
});
