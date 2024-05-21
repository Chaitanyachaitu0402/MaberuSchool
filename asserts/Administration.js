import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { useTheme, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Administration({ navigation }) {
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
    <ScrollView>
      {loading ? (
        renderLoadingScreen()
      ) : (
        <View style={{ flex: 1, backgroundColor: colors.primary, height: Dimensions.get('window').height }}>
          <View style={{ width: '100%', backgroundColor: colors.background, flexDirection: 'row', columnGap: 14, height: 150 }}>
            <Image source={require('./Image/nonteach.jpg')} style={{ width: '22%', height: 90, alignSelf: 'center', justifyContent: 'center', borderRadius: 88, marginStart: 7, marginTop: 8 }} />
            <View style={{ marginTop: 12 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 26 }}>M.Nagoor Jyothi prasana</Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary, marginTop: 12 }}>nagoor1123@gmail.com</Text>
            </View>
          </View>

          <View style={{ margin: 9 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.background, margin: 10 }}>Information List</Text>
            <View style={{ flexDirection: 'row', width: '96%', alignSelf: 'center', justifyContent: 'center', columnGap: 10 }}>
              <Card style={{ width: '30%', height: 110, marginStart: 8 }} onPress={() => handleCardPress('Classlist')}>
                <Icon name="book-education-outline" color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, margin: 5 }} />
                <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Add</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Students</Text>
              </Card>
              <Card style={{ width: '29%', height: 110, marginStart: 13 }} onPress={() => handleCardPress('Allteachers')}>
                <Icon name="account-group-outline" color={colors.bg} size={40} style={{ marginTop: 7, justifyContent: 'center', alignSelf: 'center', height: 44 }} />
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Add Staff</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Members</Text>
              </Card>
              <Card style={{ width: '30%', height: 110, marginStart: 8 }} onPress={() => handleCardPress('Event')}>
                <Icon name="calendar-heart" color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, margin: 5 }} />
                <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Event</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>List</Text>
              </Card>
            </View>

            <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.background, margin: 8 }}>Attendance Report</Text>
            <View style={{ flexDirection: 'row', width: '96%', alignSelf: 'center', justifyContent: 'center', columnGap: 8, marginStart: 3 }}>
              <Card style={{ width: '29%', height: 110 }} onPress={() => handleCardPress('Monthattendance')}>
                <Icon name="account-check-outline" color={colors.bg} size={40} style={{ margin: 6, justifyContent: 'center', alignSelf: 'center', height: 44 }} />
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>My</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>attendance</Text>
              </Card>
              <Card style={{ width: '29%', height: 110, marginStart: 13 }} onPress={() => handleCardPress('Attendancecard')}>
                <Icon name="view-dashboard-edit-outline" color={colors.bg} size={40} style={{ margin: 5, justifyContent: 'center', alignSelf: 'center', height: 44 }} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Student</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Attendance</Text>
              </Card>
              <Card style={{ width: '29%', height: 110, marginStart: 7 }} onPress={() => handleCardPress('Attendancecard2')}>
                <Icon name="notebook-outline" color={colors.bg} size={40} style={{ justifyContent: 'center', alignSelf: 'center', height: 44, marginTop: 5 }} />
                <View style={{ margin: 7 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Staff</Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>attendance</Text>
                </View>
              </Card>
            </View>

            <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.background, margin: 7 }}>Other Info</Text>
            <View style={{ flexDirection: 'row', margin: 8, columnGap: 10, marginStart: 3 }}>
              <Card style={{ width: '29%', height: 110, marginStart: 8 }} onPress={() => handleCardPress('Feesadd')}>
                <Icon name="cash-multiple" color={colors.bg} size={40} style={{ margin: 5, justifyContent: 'center', alignSelf: 'center', height: 44 }} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Fee</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Details</Text>
              </Card>
              <Card style={{ width: '29%', height: 110, marginStart: 6 }} onPress={() => handleCardPress('Otherstafflist')}>
                <Icon name="cash-multiple" color={colors.bg} size={40} style={{ margin: 5, justifyContent: 'center', alignSelf: 'center', height: 44 }} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Add</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Other Staff</Text>
              </Card>
              <Card style={{ width: '29%', height: 110, marginStart: 13 }} onPress={() => handleCardPress('Techerleavelist')}>
                <Icon name="account-arrow-right-outline" color={colors.bg} size={40} style={{ margin: 6, justifyContent: 'center', alignSelf: 'center', height: 44 }} />
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Leave</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>Response</Text>
              </Card>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 14,
    height: 150,
  },
  profileImage: {
    width: '22%',
    height: 90,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 88,
    marginStart: 7,
    marginTop: 8,
  },
  profileTextContainer: {
    marginTop: 12,
  },
  profileText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 12,
  },
  section: {
    margin: 9,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    margin: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    width: '96%',
    alignSelf: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  card: {
    width: '30%',
    height: 110,
    marginStart: 8,
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 44,
    margin: 5,
  },
  cardText: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
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
