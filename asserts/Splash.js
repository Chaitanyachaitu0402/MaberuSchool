import { View, StyleSheet,Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const delay = setTimeout(() => {
          navigation.navigate('Onboard'); 
        }, 2000);
    
        return () => clearTimeout(delay); 
      }, []);
      
  return (

    <View style={styles.container}>
      <FastImage
        source={{
          uri: 'https://media.giphy.com/media/zLfYX2NarIlKL9aH41/giphy.gif?cid=ecf05e475jnhp377eg4olfcaruxrl6rraeqsu7vp1wxvpgo8&ep=v1_gifs_search&rid=giphy.gif&ct=g', // Replace this with your GIF URL
          priority: FastImage.priority.normal,
       }}
        style={styles.gif}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:'#F2F0F4'
   },
  
   gif: {
     width: 200,
     height: 200,
   
    
},
 });

 export default Splash;





 // SplashScreen.js

