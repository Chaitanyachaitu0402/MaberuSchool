import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Dimensions, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Parenthome({ navigation }) {
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
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4146B5" />
            <Text style={styles.loadingText}>Loading...</Text>
        </View>
    );

    return (
        <SafeAreaView>
            <ScrollView>
                {loading ? (
                    renderLoadingScreen()
                ) : (
                    <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>
                        <View style={{ width: '100%', backgroundColor: colors.background, columnGap: 14, height: 160 }}>
                            <Image source={require("./Image/boy.jpeg")} style={styles.profileImage}></Image>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>N.PRAVEEN</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary, marginTop: 3, alignSelf: 'center', justifyContent: 'center' }}>parent</Text>
                        </View>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 16, marginStart: 14, left: 6 }}>School Updates</Text>
                        <View style={{ flexDirection: 'row', marginTop: 17, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 8, marginStart: 2 }}>
                            <Card style={{ width: "45%", height: 110, marginStart: 5 }} onPress={() => handleCardPress('Parentevent')}>
                                <Icon name='calendar-multiple-check' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Event List</Text>
                            </Card>

                            <Card style={{ width: "45%", height: 110, marginStart: 7 }} onPress={() => handleCardPress('Notifications')}>
                                <Icon name='bell-outline' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Notification</Text>
                            </Card>
                        </View>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}>Academic Updates</Text>
                        <View style={{ flexDirection: 'row', marginTop: 23, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 3, marginStart: 3 }}>
                            <Card style={{ width: "29%", height: 110 }} onPress={() => handleCardPress('Parenthomework')}>
                                <Icon name='note-text-outline' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Assignments</Text>
                            </Card>

                            <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => handleCardPress('Examtimetable')}>
                                <Icon name='notebook-edit-outline' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Exams</Text>
                            </Card>

                            <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => handleCardPress('Time')}>
                                <Icon name='timetable' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Timetable</Text>
                            </Card>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 23, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 3, marginStart: 3 }}>
                            <Card style={{ width: "29%", height: 110 }} onPress={() => handleCardPress('Fees')}>
                                <Icon name='cash-multiple' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Fee Details</Text>
                            </Card>

                            <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => handleCardPress('Parentleaveadd')}>
                                <Icon name='account-arrow-left-outline' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Add Leave</Text>
                            </Card>

                            <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => handleCardPress('Monthattendance')}>
                                <Icon name='account-check-outline' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Attendance</Text>
                            </Card>
                        </View>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    profileImage: {
        width: '26%',
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 88,
        marginStart: 7,
        marginTop: 8,
    },
    cardIcon: {
        margin: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 44,
        marginTop:15,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#000',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
        color: '#4146B5',
    },
});
