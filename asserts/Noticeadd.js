
import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Alert } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { Text, Image, Dimensions, ScrollView } from 'react-native'
import { useTheme, Card, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Noticeadd ({ navigation })  {
    const home=()=>{
        navigation.navigate("schooldrawer2")
    }
    

    const { colors } = useTheme();

    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (key) => {
        setCheckedItems({ ...checkedItems, [key]: !checkedItems[key] });
    };

 
    

    const [Name, setName] = useState("")
    const setNamedetails = (name) => {
        setName(name)
        console.log(name);

    }
    const [Description, setDescription] = useState("")
    const Descriptiondetails = (name) => {
        setDescription(name)
        console.log(name);
    }
    




    return (
        <ScrollView>

            <SafeAreaView>


                <View style={{ backgroundColor: colors.primary, flex: 1,height:900 }}>


                 


                    <View style={{ marginTop: 5, marginStart: 5 }}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 23, marginStart: 7 }}>Title</Text>

                        <TextInput  textColor={colors.text} placeholderTextColor={colors.text} value={Name} onChangeText={setNamedetails} style={{ width: '88%', borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, marginTop: 6, alignSelf: 'center' }}>

                        </TextInput>
                    </View>

                    <View style={{ marginTop: 5, marginStart: 5 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 19, marginStart: 7 }}>Description</Text>
                        <TextInput textColor={colors.text} placeholderTextColor={colors.text} multiline={true} value={Description} onChangeText={Descriptiondetails} style={{ width: '88%', minHeight: 100, borderColor: colors.background, borderWidth: 1, backgroundColor: colors.primary, alignSelf: 'center', marginTop: 6 }}></TextInput>
                    </View>

                    
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 23, marginStart: 9 }}>Send to:</Text>


                    <View style={{margin:3}}>
                        <Checkbox.Item
                            label="Teacher"
                            status={checkedItems['checkbox1'] ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange('checkbox1')}
                            mode='android'
                            color={colors.background}

                        />
                        <Checkbox.Item
                            label="Parents"
                            status={checkedItems['checkbox2'] ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange('checkbox2')}
                            color={colors.background}
                            mode='android'

                        />
                        <Button style={{ width: "55%", height: 48, backgroundColor: colors.bg, alignSelf: 'center' }} labelStyle={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: 13,color:colors.primary }}onPress={home}>submit</Button>

                    </View>



                </View>
            </SafeAreaView>
        </ScrollView>

    );
};




