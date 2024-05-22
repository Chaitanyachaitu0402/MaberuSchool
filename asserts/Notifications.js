import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions,Alert } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Card, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notifications = ({navigation}) => {
    const homes=()=>{
        navigation.navigate("Notificationdetails")
    }
   
    const [isShimmering, setisShimmering] = useState(false);

    {/* <Text>----Flatlist appearance----</Text> */ }

    const horizontalview = [{ number: '01', name: 'Conducting a Excursion Tour', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit.', time: '11-01-2023, 09:15AM', day: '2days ago' }, { number: '02', name: 'Pre final Exam', description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.', time: '12-01-2023, 10:15AM', day: '3days ago' }, { number: '03', name: 'Annual Celebrations', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.', time: '13-01-2023, 11:15AM', day: '4days ago' },]
    const apperancce =(data)=> {
        console.log("data : ", data);
        return (
            <Card style={{ width: '100%',  margin: 4, borderRadius: 10, backgroundColor: colors.primary }} >


                <View style={{ flexDirection: 'row' }} >

                    <View>
                        <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >
                            <Text style={{ color: colors.primary, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{data.item.number}</Text>
                        </Card>
                    </View>


                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: colors.text, fontSize: 17, margin: 5, fontWeight: 'bold' }}>{data.item.name}</Text>
                        <Text style={{ color: colors.text, fontSize: 14, margin: 3, width: Dimensions.get('window').width / 1.4, }}>{data.item.description}</Text>
                    </View>
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding:6}}>
                    <View>
                        <Text style={{ color: colors.text, fontSize: 12,  }}>{data.item.time}</Text>
                    </View>


                    <View style={{ flexDirection: 'row', columnGap: 4, marginRight: 3 }}>
                        <Icon name='clock-outline' color={colors.text} size={18} style={{  alignSelf: 'flex-end', }}></Icon>
                        <Text style={{ color: colors.text, fontSize: 12,  alignSelf: 'flex-end', }}>{data.item.day}</Text>
                    </View>
                </View>
            </Card>

        )

    }


    const { colors } = useTheme();


    return (

        <View style={styles.container}>


                <View style={{ backgroundColor: colors.primary, flex: 1, }}>

                
                    <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>


                </View>


              


            {/* <Text>----Shimmer style view above---</Text> */}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        padding: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    shimmerContainer: {
        width: '100%', height: 100, margin: 8, justifyContent: 'center', borderRadius: 7, backgroundColor: 'white'
    },
    text: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center'
    },
});

{/* <Text> Shimmer styles above  </Text> */ }

export default Notifications;



