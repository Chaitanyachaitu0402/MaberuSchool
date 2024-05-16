import { StyleSheet, View, Text, Image, Dimensions, ScrollView, Alert, FlatList,ImageBackground } from 'react-native';
import { useTheme, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'react-native-image-picker';

export default function Student({navigation}) {
    const { colors } = useTheme();
    const home=()=>{
        navigation.navigate("schooldrawer4")
    }

    const [fileUris, setfileUris] = useState("");
    const [filename, setfilename] = useState("");
    const [filetype, setfiletype] = useState("");
    let option1 = {
        title: 'select image',
        mediaType: 'mixed'
    };

    const AddPick = () => {
        ImagePicker.launchImageLibrary(option1, (res) => {
            if (res.didCancel) {
                Alert.alert('User cancelled image picker');
            } else if (res.error) {
                Alert.alert('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                Alert.alert('User tapped custom button: ', res.customButton);
                Alert.alert(res.customButton);
            } else {
                // Use res.uri directly as the source for FastImage
                setfileUris(res.assets[0]["uri"]);
                setfilename(res.assets[0]["fileName"]);
                setfiletype(res.assets[0]["type"]);
                // uploadimage(res.assets[0]["uri"], res.assets[0]["fileName"], res.assets[0]["type"])
            }
        });
    }


    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height, }}>

                    <View style={{ width: '90%', backgroundColor: colors.background, columnGap: 14, height: 270, alignSelf: 'center', margin: 7, borderRadius: 9 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>

                         
                        </View >

                        {/* <Image source={require("./Image/boyy.jpg")} style={{ width: '26%', height: 100, alignSelf: 'center', justifyContent: 'center', borderRadius: 88, marginStart: 7, marginTop: 8 }}></Image> */}
                        <ImageBackground resizeMode='stretch' source={{ uri: fileUris ? (fileUris): ('https://www.thestatesman.com/wp-content/uploads/2019/10/mahesh-babu.jpg')}} style={{ width: 100, height: 100,marginTop: 22, alignSelf: 'center', justifyContent: 'center',}}>
                        <Icon name='camera-enhance-outline' color={colors.text} size={24} style={{ position:'relative',alignSelf:'center' }} onPress={AddPick} />
                    </ImageBackground>
                    
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>Name: Pradeep</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Class: VI</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Section: A</Text>

                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}> Class Teacher: Sridevi</Text>


                    </View>

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} placeholder='Fathername'  style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} placeholder='Mothername'  style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} placeholder='Mobile number'  style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} placeholder='Email'  style={{ width: '87%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>
                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} placeholder='Address' multiline={true} style={{ width: '87%',height:77, borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 11, alignSelf: 'center', }}></TextInput>

                    <Button style={{ width: "43%", height: 48, backgroundColor: colors.bg, alignSelf: 'center',marginTop:9 }} labelStyle={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 16,color:colors.primary }}onPress={home}>SAVE</Button>

                </View>


            </ScrollView>

        </SafeAreaView>

    )
}
