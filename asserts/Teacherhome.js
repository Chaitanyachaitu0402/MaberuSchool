import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Dimensions, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ({ navigation }) {
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
                        <View style={{ width: '100%', backgroundColor: colors.background, flexDirection: 'row', columnGap: 14, height: 150 }}>
                            <Image source={require("./Image/women.jpg")} style={styles.profileImage}></Image>
                            <View style={{ marginTop: 12 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 26 }}>L.sudharani</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>sudha123@gmail.com</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>year of service:3</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.text, marginTop: 16, marginStart: 8 }}>Information List</Text>
                        <View style={{ flexDirection: 'row', margin: 8, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 10 }}>
                            <Card style={{ width: "40%", height: 110, marginStart: 8 }} onPress={() => handleCardPress('Classlist')}>
                                <Icon name='school-outline' color={colors.bg} size={50} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Student List</Text>
                            </Card>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 17, marginStart: 14, left: 6 }}>Academic Updates</Text>
                        <View style={{ flexDirection: 'row', margin: 8, width: "96%", alignSelf: 'center', justifyContent: 'center', columnGap: 3, marginStart: 3 }}>
                            <Card style={{ width: "29%", height: 110 }} onPress={() => handleCardPress('Teacherhomeworklist')}>
                                <Icon name='note-text-outline' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Create</Text>
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
                            <Card style={{ width: "29%", height: 110 }} onPress={() => handleCardPress('Feesadd')}>
                                <Icon name='cash-multiple' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Fee</Text>
                                <Text style={styles.cardText}>Details</Text>
                            </Card>
                            <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => handleCardPress('Leaveadd')}>
                                <Icon name='account-arrow-left-outline' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Add</Text>
                                <Text style={styles.cardText}>Leave</Text>
                            </Card>
                            <Card style={{ width: "29%", height: 110, marginStart: 13 }} onPress={() => handleCardPress('Attendancecard')}>
                                <Icon name='view-dashboard-edit-outline' color={colors.bg} size={40} style={styles.cardIcon}></Icon>
                                <Text style={styles.cardText}>Student</Text>
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
        width: '22%',
        height: 90,
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
