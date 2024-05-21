import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
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
        <View style={[styles.container, { backgroundColor: colors.primary, height: Dimensions.get('window').height }]}>
          <View style={[styles.profileContainer, { backgroundColor: colors.background }]}>
            <Image source={require('./Image/nonteach.jpg')} style={styles.profileImage} />
            <View style={styles.profileTextContainer}>
              <Text style={[styles.profileText, { color: colors.primary }]}>M.Nagoor Jyothi</Text>
              <Text style={[styles.profileText, { color: colors.primary }]}>nagoor1123@gmail.com</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.background }]}>Information List</Text>
            <View style={styles.cardContainer}>
              <Card style={styles.card} onPress={() => handleCardPress('Classlist')}>
                <Icon name="book-education-outline" color={colors.bg} size={40} style={styles.icon} />
                <Text style={styles.cardText}>Add</Text>
                <Text style={styles.cardText}>Students</Text>
              </Card>
              <Card style={styles.card} onPress={() => handleCardPress('Allteachers')}>
                <Icon name="account-group-outline" color={colors.bg} size={40} style={styles.icon} />
                <Text style={styles.cardText}>Add Staff</Text>
                <Text style={styles.cardText}>Members</Text>
              </Card>
              <Card style={styles.card} onPress={() => handleCardPress('Event')}>
                <Icon name="calendar-heart" color={colors.bg} size={40} style={styles.icon} />
                <Text style={styles.cardText}>Event</Text>
                <Text style={styles.cardText}>List</Text>
              </Card>
            </View>

            <Text style={[styles.sectionTitle, { color: colors.background }]}>Attendance Report</Text>
            <View style={styles.cardContainer}>
              <Card style={styles.card} onPress={() => handleCardPress('Monthattendance')}>
                <Icon name="account-check-outline" color={colors.bg} size={40} style={styles.icon} />
                <Text style={styles.cardText}>My</Text>
                <Text style={styles.cardText}>attendance</Text>
              </Card>
              <Card style={styles.card} onPress={() => handleCardPress('Attendancecard')}>
                <Icon name="view-dashboard-edit-outline" color={colors.bg} size={40} style={styles.icon} />
                <Text style={styles.cardText}>Student</Text>
                <Text style={styles.cardText}>Attendance</Text>
              </Card>
              <Card style={styles.card} onPress={() => handleCardPress('Attendancecard2')}>
                <Icon name="notebook-outline" color={colors.bg} size={40} style={styles.icon} />
                <Text style={styles.cardText}>Staff</Text>
                <Text style={styles.cardText}>Attendance</Text>
              </Card>
            </View>

            <Text style={[styles.sectionTitle, { color: colors.background }]}>Other Info</Text>
            <View style={styles.cardContainer}>
              <Card style={styles.card} onPress={() => handleCardPress('Feesadd')}>
                <Icon name="cash-multiple" color={colors.bg} size={40} style={styles.icon} />
                <Text style={styles.cardText}>Fee</Text>
                <Text style={styles.cardText}>Details</Text>
              </Card>
              <Card style={styles.card} onPress={() => handleCardPress('Otherstafflist')}>
                <Icon name="cash-multiple" color={colors.bg} size={40} style={styles.icon} />
                <Text style={styles.cardText}>Add</Text>
                <Text style={styles.cardText}>Other Staff</Text>
              </Card>
              <Card style={styles.card} onPress={() => handleCardPress('Techerleavelist')}>
                <Icon name="account-arrow-right-outline" color={colors.bg} size={40} style={styles.icon} />
                <Text style={styles.cardText}>Leave</Text>
                <Text style={styles.cardText}>Response</Text>
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
