import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useTheme, Card, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Leavedetail({ navigation }) {
    const { colors } = useTheme();
    const [studentDataList, setStudentDataList] = useState([]); // State to store multiple student data

    // Replace with the actual student IDs you want to fetch
    const studentIds = [
        "b2bb6321-d6e1-4deb-8885-9f6e8ac018c6",
        "917fa2de-a122-4f01-aaec-dd0b311f3b36"

    ];

    const handleGetStudentLeaveDetails = async (id) => {
        try {
            const response = await fetch('http://10.0.2.2:3000/student-leaves/get-student-leave-by-id', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }), // Use the student ID
            });

            if (!response.ok) {
                throw new Error('Failed to fetch details. Status: ' + response.status);
            }

            const data = await response.json();
            console.log("Student Leave details fetched ===> ", data);

            if (data.success) {
                // Store fetched data in state
                setStudentDataList(prevDataList => [...prevDataList, data.data]); // Append to the array
            } else {
                Alert.alert("Error in fetching the student details");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // Fetch data for each student ID when the component mounts
        studentIds.forEach(id => {
            handleGetStudentLeaveDetails(id);
        });
    }, []);

    return (
        <SafeAreaView>
            <View style={{ flex: 1, backgroundColor: colors.b, height: Dimensions.get('window').height }}>
                <Button
                    textColor={colors.primary}
                    buttonColor={colors.primary}
                    labelStyle={{ fontSize: 14, color: colors.bg, alignSelf: 'center' }}
                    style={{ width: '55%', height: 43, borderColor: colors.background, borderRadius: 6, alignSelf: 'center', borderWidth: 2, margin: 5 }}
                    onPress={() => navigation.navigate('Parentleaveadd')}
                >
                    Add Leave
                </Button>

                {studentDataList.map((studentData, index) => (
                    <Card key={index} style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8, height: 220 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 6 }}>
                            <Text style={{ color: colors.text, fontSize: 17, fontWeight: 'bold' }}>Casual Leave</Text>
                            <Text style={{ color: colors.bg, fontSize: 17, fontWeight: 'bold' }} onPress={() => navigation.navigate('Parentleaveedit')}>Edit</Text>
                        </View>

                        {studentData ? (
                            <View>
                                <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500', marginStart: 12 }}>Name: {studentData.name}</Text>
                                <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500', marginStart: 12 }}>Student ID: {studentData.student_id}</Text>
                                <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500', marginStart: 12 }}>Class: {studentData.class}</Text>
                                <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500', marginStart: 12 }}>Section: {studentData.section}</Text>
                                <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500', marginStart: 12 }}>From: {studentData.from} To: {studentData.to}</Text>
                                <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal', marginStart: 12, marginTop: 8 }}>
                                    Reason: {studentData.reason}
                                </Text>
                            </View>
                        ) : (
                            <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500', marginStart: 12 }}>Loading...</Text>
                        )}
                    </Card>
                ))}
            </View>
        </SafeAreaView>
    );
}
