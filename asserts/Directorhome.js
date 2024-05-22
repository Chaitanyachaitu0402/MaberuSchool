import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { useTheme, Card, ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const Exampletoogle = ({ navigation }) => {
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false);

    const handleCardPress = (navigateTo) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate(navigateTo);
        }, 1000); // Simulate a network request delay
    };

    const renderLoadingScreen = () => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: Dimensions.get('window').height }}>
            <ActivityIndicator size="large" color="#4146B5" />
            <Text style={{ marginTop: 10, fontSize: 18, color: "#4146B5" }}>Loading...</Text>
        </View>
    );

    return (
        <ScrollView>
            {loading ? (
                renderLoadingScreen()
            ) : (
                <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>
                    <View style={{ width: '100%', backgroundColor: colors.background, flexDirection: 'row', columnGap: 14, height: 150 }}>
                        <Image source={require("./Image/princi.jpg")} style={{ width: '22%', height: 90, alignSelf: 'center', justifyContent: 'center', borderRadius: 88, marginStart: 7, marginTop: 8 }} ></Image>
                        <View style={{ marginTop: 12 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 26 }}>L.Sudheer roy</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>ravikumarr123@gmail.com</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>year of service: 10</Text>
                        </View>
                    </View>

                    <View style={{ margin: 9 }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.background, margin: 10 }}>Information List</Text>
                        <View style={{ flexDirection: 'row', marginTop: 21, alignSelf: 'center', justifyContent: 'center', columnGap: 10 }}>
                            <Card style={{ width: "30%", height: 110, marginStart: 8 }} onPress={() => handleCardPress('Classlist')}>
                                <Icon name='book-education-outline' color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, margin: 5 }}></Icon>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Student</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>List</Text>
                            </Card>
                            <Card style={{ width: "30%", height: 110, marginStart: 8 }} onPress={() => handleCardPress('Teacherlist')}>
                                <Icon name='human-male-board' color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, margin: 5 }}></Icon>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Teachers</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>List</Text>
                            </Card>
                            <Card style={{ width: "30%", height: 110, marginStart: 8 }} onPress={() => handleCardPress('Event')}>
                                <Icon name='calendar-heart' color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, margin: 5 }}></Icon>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Event</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>List</Text>
                            </Card>
                        </View>

                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.background, marginTop: 15, marginStart: 8 }}>Current Report</Text>
                        <View style={{ flexDirection: 'row', margin: 9,  alignSelf: 'center', justifyContent: 'center', columnGap: 4, marginTop:25 }}>
                            <Card style={{ width: "30%", height: 110 }}>
                                <View style={{ margin: 7 }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color: colors.bg }}>70</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Total</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Students</Text>
                                </View>
                            </Card>
                            <Card style={{ width: "30%", height: 110, marginStart: 13 }}>
                                <View style={{ margin: 7 }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color: colors.bg }}>30</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Total</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Teaching</Text>
                                     <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>staff</Text>
                                </View>
                            </Card>
                            <Card style={{ width: "30%", height: 110, marginStart: 13 }}>
                                <View style={{ margin: 7 }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color: colors.bg }}>5</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Total Non</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Teaching</Text>
                                     <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>staff</Text>
                                </View>
                            </Card>
                        </View>

                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.background, marginTop: 8, marginStart: 8 }}>Attendance Report</Text>
                        <View style={{ flexDirection: 'row', marginTop: 23, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 8, marginStart: 3,marginTop:25 }}>
                            <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => handleCardPress('Studentattendanceview')}>
                                <Icon name='account-group-outline' color={colors.bg} size={40} style={{ margin: 6, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Student</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>attendance</Text>
                            </Card>
                            <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => handleCardPress('Staffattendanceview')}>
                                <Icon name='notebook-outline' color={colors.bg} size={40} style={{ margin: 5, justifyContent: 'center', alignSelf: 'center', height: 44 }}></Icon>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>staff</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>attendance</Text>
                            </Card>
                        </View>

                        <View style={{ margin: 5, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 8, marginStart: 2 }}></View>
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

export default Exampletoogle;
