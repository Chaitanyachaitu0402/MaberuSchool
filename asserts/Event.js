
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Card, useTheme, Menu } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Event = ({ navigation }) => {
    const { colors } = useTheme();
    const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

    const openMenu = (index) => setVisibleMenuIndex(index);
    const closeMenu = () => setVisibleMenuIndex(null);

    const [LeaveData, setLeaveData] = useState([])
    const [accessToken, setaccessToken] = useState("")
    const [refreshtoken, setrefreshToken] = useState("")
    const [role, setrole] = useState("")



    const home2 = async () => {
        navigation.navigate("Topstack")
    }

    const horizontalview = [{ time: '11-01-2023, 09:15 AM', description: 'School Anniversary  ', date: '11 Feb' }, { time: '11-01-2023, 09:15 AM', description: 'Science day celebrations ', date: '15 Mar' }, { time: '17-04-2023, 09:15 AM', description: 'School Cultural Meet ', date: '17 Apr' }, { time: '11-06-2023, 09:15 AM', description: 'World Science day  ', date: '11 jun' }, { time: '11-11-2023, 09:15 AM', description: 'Chldrens Day  ', date: '14 nov' }, { time: '11-01-2023, 09:15 AM', description: 'School Anniversary  ', date: '11 Feb' },]
    const appearance = (data, index) => {
        const isMenuVisible = visibleMenuIndex === index;

    

      

        return (

            <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 5 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 5, color: colors.text }}>{data.item.description} </Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 5, color: colors.text }}>{data.item.date} </Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                    <Text style={{ color: colors.text, fontSize: 15, fontWeight: 'normal', marginStart: 9, marginTop: 2 }}> {data.item.time} </Text>

                    <Menu
                        visible={isMenuVisible}
                        onDismiss={closeMenu}
                        anchor={<Icon name='dots-vertical' size={26} onPress={() => openMenu(index)} />}
                    >
                        <Menu.Item title="Edit" onPress={() => navigation.navigate("Eventedit")} />
                        <Menu.Item title="Delete" />
                    </Menu>


                </View>

            </Card>

        )
    }




    return (

        <View style={styles.container}>


                <View style={{ backgroundColor: colors.primary, flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.bg, marginTop: 14, marginStart: 6 }}>Gallery</Text>

                    <View style={{ height: 330, width: '97%', marginTop: 14, margin: 9 }}>

                        <Swiper style={{ height: 300 }} loop={true} autoplayTimeout={2.0} autoplay={true}>

                            <View style={{ height: 300, width: "97%", borderRadius: 100 }} >
                                <Image source={require("./Image/picture.jpg")} resizeMode='contain' style={{ width: "100%", height: '100%', marginStart: 5, borderRadius: 10 }}></Image>
                            </View>

                            <View style={{ height: 300, width: "97%", borderRadius: 100 }} >
                                <Image source={require("./Image/anniver.jpg")} resizeMode='contain' style={{ width: "100%", height: '100%', marginStart: 5, borderRadius: 10 }}></Image>
                            </View>

                            <View style={{ height: 300, width: "97%", borderRadius: 100 }} >
                                <Image source={require("./Image/picture2.jpg")} resizeMode='contain' style={{ width: "100%", height: '100%', marginStart: 5, borderRadius: 10 }}></Image>
                            </View>

                            <View style={{ height: 300, width: "97%", borderRadius: 100 }} >
                                <Image source={require("./Image/scl.jpg")} resizeMode='contain' style={{ width: "100%", height: '100%', marginStart: 5, borderRadius: 10 }}></Image>
                            </View>
                        </Swiper>

                    </View>
                    {/* <Text>Add Swiper</Text> */}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.bg, marginTop: 23, marginStart: 9 }}>Event list</Text>
                    </View>

                    <FlatList
                        data={horizontalview}
                        renderItem={({ item, index }) => appearance({ item }, index)}
                        contentContainerStyle={[styles.flatlistContainer, { backgroundColor: colors.primary }]}
                    />

                </View>


             



        </View>

    );
};

const styles = StyleSheet.create({
    container: {

        padding: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    shimmerContainer: {
        width: '100%', height: 100, margin: 8, justifyContent: 'center', borderRadius: 7
    },

});


export default Event;



