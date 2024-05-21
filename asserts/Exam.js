// import React from 'react'
// import { useTheme, Card, Button } from 'react-native-paper';
// import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Swiper } from "react-native-swiper"


// export default function Exam() {
//   return (
//     <View style={{flex:1,backgroundColor:'red'}}>










//     </View>
//   )

// }




import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { useTheme, Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SwiperExample(){

    const { colors } = useTheme();
    return (

        <ScrollView>



            <View style={{ flex: 1, backgroundColor: colors.primary }}>



                <View style={{ width: '100%', height: 77, backgroundColor: colors.background, flexDirection: 'row', columnGap: 10, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', columnGap: 5 }}>
                        <Icon name='arrow-left' color={colors.primary} size={24} style={{ marginTop: 20, marginStart: 5 }}></Icon>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primary, marginTop: 22, marginStart: 4 }}>Event</Text>
                    </View>
                </View>



                <View style={{ height: 300, width: '97%', marginTop: 14, marginStart: 8 }}>

                    <Swiper style={{ height: 220 }} dotStyle={{ width: 14, marginTop: -44 }} activeDotColor={'#4A1259'} activeDotStyle={{ width: 13, marginTop: -44 }} dotColor={'#D9D9D9'} showsButtons={false} loop={true} autoplayTimeout={2.0} autoplay={true}>

                        <View style={{ height: 220, width: "97%", borderRadius: 100 }} >
                            <Image source={require("./Image/teacher.png")} resizeMode='contain' style={{ width: "100%", height: '100%', marginStart: 5, borderRadius: 10 }}></Image>
                        </View>

                        <View style={{ height: 220, width: "97%", borderRadius: 100 }} >
                            <Image source={require("./Image/child.jpg")} resizeMode='contain' style={{ width: "100%", height: '100%', marginStart: 5, borderRadius: 10 }}></Image>
                        </View>


                    </Swiper>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.text, marginTop: 23, marginStart: 6 }}>Events</Text>
                    <Button style={{ width: "22%", height: 33, alignSelf: 'center', marginTop: 15, margin: 9, borderColor: colors.text, borderWidth: 1 }} labelStyle={{ fontSize: 13, textAlign: 'center', marginTop: 7, color: colors.text }}>Add+</Button>
                </View>

                <Card style={{ width: '95%', height: 111, alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                        <Text style={{ color: colors.background, fontSize: 17, fontWeight: 'normal', marginStart: 9, marginTop: 5 }}>school anniversary celebrations</Text>
                        <Text style={{ color: colors.background, fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 5 }}>14jan</Text>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                        <Text style={{ color: colors.background, fontSize: 15, fontWeight: 'normal', marginStart: 9, marginTop: 2 }}>Timings:10:00AM TO 04.00PM</Text>
                        <Button style={{ width: "30%", height: 33, backgroundColor: colors.background, alignSelf: 'center', marginTop: 14, position: 'relative' }} labelStyle={{ fontSize: 13, textAlign: 'center', marginTop: 7, }}>Edit event</Button>

                    </View>

                </Card>

                <Card style={{ width: '95%', height: 111, alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                        <Text style={{ color: colors.background, fontSize: 17, fontWeight: 'normal', marginStart: 9, marginTop: 5 }}>World childrens day</Text>
                        <Text style={{ color: colors.background, fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 5 }}>18JAN</Text>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                        <Text style={{ color: colors.background, fontSize: 15, fontWeight: 'normal', marginStart: 9, marginTop: 2 }}>Timings:1:00PM TO 04.00PM</Text>
                        <Button style={{ width: "30%", height: 33, backgroundColor: colors.background, alignSelf: 'center', marginTop: 14, position: 'relative' }} labelStyle={{ fontSize: 13, textAlign: 'center', marginTop: 7, }}>Edit event</Button>

                    </View>

                </Card>

                <Card style={{ width: '95%', height: 111, alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                        <Text style={{ color: colors.background, fontSize: 17, fontWeight: 'normal', marginStart: 9, marginTop: 5 }}>Childrens dance competation</Text>
                        <Text style={{ color: colors.background, fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 5 }}>11FEB</Text>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                        <Text style={{ color: colors.background, fontSize: 15, fontWeight: 'normal', marginStart: 9, marginTop: 2 }}>Timings:9:00AM TO 02.00PM</Text>
                        <Button style={{ width: "30%", height: 33, backgroundColor: colors.background, alignSelf: 'center', marginTop: 14, position: 'relative' }} labelStyle={{ fontSize: 13, textAlign: 'center', marginTop: 7, }}>Edit event</Button>

                    </View>

                </Card>


                <Card style={{ width: '95%', height: 111, alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                        <Text style={{ color: colors.background, fontSize: 17, fontWeight: 'normal', marginStart: 9, marginTop: 5 }}>Sports meet conducted</Text>
                        <Text style={{ color: colors.background, fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 5 }}>14MAR</Text>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
                        <Text style={{ color: colors.background, fontSize: 15, fontWeight: 'normal', marginStart: 9, marginTop: 2 }}>Timings:10:00AM TO 04.00PM</Text>
                        <Button style={{ width: "30%", height: 33, backgroundColor: colors.background, alignSelf: 'center', marginTop: 14, position: 'relative' }} labelStyle={{ fontSize: 13, textAlign: 'center', marginTop: 7, }}>Edit event</Button>

                    </View>

                </Card>


            </View>

        </ScrollView>


    );
};



