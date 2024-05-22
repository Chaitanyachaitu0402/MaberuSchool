import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';





import Login from './asserts/Login';
import Forgot from './asserts/Forgot';
import Logout from './asserts/Logout';
import Addclass from './asserts/Addclass';
import Editclass from './asserts/Editclass';
import Addstudent from './asserts/Addstudent';
import Editstudent from './asserts/Editstudent';
import Addsection from './asserts/Addsection';
import Editsection from './asserts/Editsection';
import Menubar from './asserts/Menubar';
import Addteacher from './asserts/Addteacher';
import Editteacher from './asserts/Editteacher';
import Addbranch from './asserts/Addbranch';
import Editbranch from './asserts/Editbranch';
import Profile from './asserts/Profile';
import Classlist from './asserts/Classlist';
import Sectiondetails from './asserts/Sectiondetails';
import Exampleshimmer from './asserts/Exampleshimmer';
import Teacherlist from './asserts/Teacherlist';
import Editprofile from './asserts/Editprofile';
import Notifications from './asserts/Notifications';
import Exampletoogle from './asserts/Exampletoogle';
import Notificationdetails from './asserts/Notificationdetails';
import Otp from './asserts/Otp';
import Splash from './asserts/Splash';
import Studentattendance from './asserts/Studentattendance';
import Studentattendance2 from './asserts/Studentattendance2';

import Teacherdetails from './asserts/Teacherdetails';
import Timetable from './asserts/Timetable';
import Directorhome from './asserts/Directorhome';
import Eventadd from './asserts/Eventadd';
import Event from './asserts/Event';
import Eventedit from './asserts/Eventedit';
import Time from './asserts/Time';
import Leaveadd from './asserts/Leaveadd';
import Leaveedit from './asserts/Leaveedit';
import Leavelist from './asserts/Leavelist';
import Leavedetail from './asserts/Leavedetail';
import Noticedetails from './asserts/Noticedetails';
import Noticeedit from './asserts/Noticeedit';
import Noticeadd from './asserts/Noticeadd';
import Onboard from './asserts/Onboard';
import Principalhome from './asserts/Principalhome';
import Teacherhome from './asserts/Teacherhome';
import Parenthomepage from './asserts/Parenthomepage';
import Parentleaveadd from './asserts/Parentleaveadd';
import Parentleaveedit from './asserts/Parentleaveedit';
import Parentleavelist from './asserts/Parentleavelist';
import Parenthomework from './asserts/Parenthomework';
import Homeworkdetail from './asserts/Homeworkdetail';
import Parentnotice from './asserts/Parentnotice';
import Parentpersonal from './asserts/Parentpersonal';
import Parentexam from './asserts/Parentexam';
import Parentevent from './asserts/Parentevent';
import Parenteventdetail from './asserts/Parenteventdetail';
import Monthattendance from './asserts/Monthattendance';
import Student from './asserts/Student';
import Studentedit from './asserts/Studentedit';
import { useTheme } from 'react-native-paper';
import Fees from './asserts/Fees';
import Review from './asserts/Review';
import Receipt from './asserts/Receipt';
import Studentreview from './asserts/Studentreview';
import Principalreview from './asserts/Principalreview';
import Confirmpass from './asserts/Confirmpass';
import Note from './asserts/Note';
import Sectionname from './asserts/Sectionname';
import Branchlist from './asserts/Branchlist';
import Branchdetails from './asserts/Branchdetails';
import Result from './asserts/Result';
import Examsresult from './asserts/Examsresult';
import Resultsearch from './asserts/Resultsearch';
import Permission from './asserts/Permission';
import Feesview from './asserts/Feesview';
import Feesadd from './asserts/Feesadd';
import Createfee from './asserts/Createfee';
import Examtime from './asserts/Examtime';
import Examtimetable from './asserts/Examtimetable';
import Teacheraddfee from './asserts/Teacheraddfee';
import Teacherworkcreate from './asserts/Teacherworkcreate';
import Teacherhomeworklist from './asserts/Teacherhomeworklist';
import Studentdetails from './asserts/Studentdetails';
import Staffattendanceview from './asserts/Staffattendanceview';
import Staffattendancecreate from './asserts/Staffattendancecreate';
import Studentattendanceview from './asserts/Studentattendanceview';
import Studentleaverequest from './asserts/Studentleaverequest';
import Leavesections from './asserts/Leavesections';
import Searchstudent from './asserts/Searchstudent';
import Teachernoticelist from './asserts/Teachernoticelist';
import Pendingleavedetails from './asserts/Pendingleavedetails';
import Teacherpendingleave from './asserts/Teacherpendingleave';
import Techerleavelist from './asserts/Techerleavelist';
import Staffaddnotice from './asserts/Staffaddnotice';
import Headsendnotice from './asserts/Headsendnotice';
import Studentattendlist from './asserts/Studentattendlist';
import Attendancelist from './asserts/Attendancelist';
import Administration from './asserts/Administration';
import Addotherstaff from './asserts/Addotherstaff';
import Otherstafflist from './asserts/Otherstafflist';
import Staffattendancecreates from './asserts/Staffattendancecreates';
import Principaladdstaff from './asserts/Principaladdstaff';
import Editstaff from './asserts/Editstaff';
import Adminsendleave from './asserts/Adminsendleave';
import Otherstaffdetails from './asserts/Otherstaffdetails';
import Directorsendnotice from './asserts/Directorsendnotice';
import Principalnoticelist from './asserts/Principalnoticelist';
import Attendancecard from './asserts/Attendancecard';
import Attendancecard2 from './asserts/Attendancecard2';

import Allteachers from './asserts/Allteachers';

import Headnoticelist from './asserts/Headnoticelist';

const stack = createNativeStackNavigator();
const schoolbotstack = createBottomTabNavigator();
const schooltopstack = createMaterialTopTabNavigator();
const Drawstack = createDrawerNavigator();


export default function App() {
  const{colors}=useTheme();

  return (

    <NavigationContainer>
    <stack.Navigator initialRouteName='Splash' screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.primary,
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    }}>
        {/* <stack.Screen name='schoolbottomtab' component={Bottomstack4} options={{ headerShown: false }}></stack.Screen> */}
        <stack.Screen name='Onboard' component={Onboard} options={{ headerShown: false}}></stack.Screen>
        <stack.Screen name='Login' component={Login} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Forgot' component={Forgot} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Addclass' component={Addclass} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Editclass' component={Editclass} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Addstudent' component={Addstudent} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Editstudent' component={Editstudent} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Addsection' component={Addsection} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Editsection' component={Editsection} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Menubar' component={Menubar} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Editteacher' component={Editteacher} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Addbranch' component={Addbranch} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Editbranch' component={Editbranch} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Branchlist' component={Branchlist} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Branchdetails' component={Branchdetails} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Sectiondetails' component={Sectiondetails} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Exampleshimmer' component={Exampleshimmer} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Logout' component={Logout} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Editprofile' component={Editprofile} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Notifications' component={Notifications} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Exampletoogle' component={Exampletoogle} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Notificationdetails' component={Notificationdetails} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Otp' component={Otp} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Studentattendance' component={Studentattendance} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Studentattendance2' component={Studentattendance2} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Principaladdstaff' component={Principaladdstaff} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Editstaff' component={Editstaff} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Adminsendleave' component={Adminsendleave} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Directorsendnotice' component={Directorsendnotice} options={{ headerShown: true }}></stack.Screen>

        <stack.Screen name='Teacherdetails' component={Teacherdetails} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Directorhome' component={Directorhome} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Noticeedit' component={Noticeedit} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Eventedit' component={Eventedit} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Timetable' component={Timetable} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Time' component={Time} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Principalhome' component={Principalhome} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Teacherhome' component={Teacherhome} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Parenthomepage' component={Parenthomepage} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Leaveadd' component={Leaveadd} options={{ headerShown: true}}></stack.Screen>
        <stack.Screen name='Leaveedit' component={Leaveedit} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Leavelist' component={Leavelist} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Leavedetail' component={Leavedetail} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Noticeadd' component={Noticeadd} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Eventadd' component={Eventadd} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Parentleaveadd' component={Parentleaveadd} options={{ headerShown:true }}></stack.Screen>
        <stack.Screen name='Parentleaveedit' component={Parentleaveedit} options={{ headerShown: true}}></stack.Screen>
        <stack.Screen name='Parentleavelist' component={Parentleavelist} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Parenthomework' component={Parenthomework} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Homeworkdetail' component={Homeworkdetail} options={{ headerShown: true}}></stack.Screen>
        <stack.Screen name='Parentnotice' component={Parentnotice} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Parentpersonal' component={Parentpersonal} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Parentexam' component={Parentexam} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Parentevent' component={Parentevent} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Parenteventdetail' component={Parenteventdetail} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Monthattendance' component={Monthattendance} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Student' component={Student} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Studentedit' component={Studentedit} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Fees' component={Fees} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Review' component={Review} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Receipt' component={Receipt} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Studentreview' component={Studentreview} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Principalreview' component={Principalreview} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Confirmpass' component={Confirmpass} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Note' component={Note} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name='Result' component={Result} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Examsresult' component={Examsresult} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Resultsearch' component={Resultsearch} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Permission' component={Permission} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Feesview' component={Feesview} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Feesadd' component={Feesadd} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Createfee' component={Createfee} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Examtime' component={Examtime} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Examtimetable' component={Examtimetable} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Teacheraddfee' component={Teacheraddfee} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Teacherworkcreate' component={Teacherworkcreate} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Teacherhomeworklist' component={Teacherhomeworklist} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Noticedetails' component={Noticedetails} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Studentdetails' component={Studentdetails} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Staffattendanceview' component={Staffattendanceview} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Staffattendancecreate' component={Staffattendancecreate} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Studentattendanceview' component={Studentattendanceview} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Studentleaverequest' component={Studentleaverequest} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Leavesection' component={Leavesections} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Searchstudent' component={Searchstudent} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Addteacher' component={Addteacher} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Teachernoticelist' component={Teachernoticelist} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Pendingleavedetails' component={Pendingleavedetails} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Teacherpendingleave' component={Teacherpendingleave} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Headsendnotice' component={Headsendnotice} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Studentattendlist' component={Studentattendlist} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Attendancelist' component={Attendancelist} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Administration' component={Administration} options={{ headerShown: true }}></stack.Screen>
        {/* <stack.Screen name='Otherstafflist' component={Otherstafflist} options={{ headerShown: true }}></stack.Screen> */}
        <stack.Screen name='Staffattendancecreates' component={Staffattendancecreates} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Attendancecard' component={Attendancecard} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Attendancecard2' component={Attendancecard2} options={{ headerShown: true }}></stack.Screen>

        <stack.Screen name='Techerleavelist' component={Techerleavelist} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Staffaddnotice' component={Staffaddnotice} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Headnoticelist' component={Headnoticelist} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Addotherstaff' component={Addotherstaff} options={{ headerShown: true }}></stack.Screen>
        {/* <stack.Screen name='Allteachers' component={Allteachers} options={{ headerShown: true }}></stack.Screen> */}
        <stack.Screen name='Otherstaffdetails' component={Otherstaffdetails} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='Topstack' component={Topstack} options={{ headerShown: true}}></stack.Screen>

        <stack.Screen name='Sectionname' component={Sectionname} options={{ headerShown: true }}></stack.Screen>
        <stack.Screen name='schooldrawer' component={DrawStacks} options={{ headerShown: false}}></stack.Screen>
        <stack.Screen name='schooldrawer2' component={DrawStack2} options={{ headerShown: false}}></stack.Screen>
        <stack.Screen name='schooldrawer3' component={DrawStack3} options={{ headerShown: false}}></stack.Screen>
        <stack.Screen name='schooldrawer4' component={DrawStack4} options={{ headerShown: false}}></stack.Screen>
        <stack.Screen name='schooldrawer5' component={DrawStack5} options={{ headerShown: false}}></stack.Screen>
        <stack.Screen name='Principalnoticelist' component={Principalnoticelist} options={{ headerShown: true}}></stack.Screen>

        <stack.Screen 
        name='Classlist' 
        component={Classlist} 
        options={({ navigation }) => ({
          title: 'Class', // Set the title of the header
          headerStyle: {
            backgroundColor: colors.background, // Change the background color if needed
            
          },
          headerTintColor: colors.primary, // Change the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Adjust the title font weight
            fontSize: 20 , // Adjust the title font size
          },
          headerTitleAlign: 'center', // Align the title to the center
         
        })}
      />

      <stack.Screen 
        name='Teacherlist' 
        component={Teacherlist} 
        options={({ navigation }) => ({
          title: 'Teacherlist', // Set the title of the header
          headerStyle: {
            backgroundColor: colors.background, // Change the background color if needed
          },
          headerTintColor: colors.primary, // Change the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Adjust the title font weight
            fontSize: 20 , // Adjust the title font size
          },
          headerTitleAlign: 'center', // Align the title to the center
          headerRight: () => (
            <Icon
              name="plus" // Adjust the icon name as needed
              size={24} // Adjust the icon size as needed
              color={colors.primary} // Adjust the icon color as needed
              style={{ marginRight: 15 }} // Adjust the margin as needed
             onPress={()=>navigation.navigate('Addteacher')}
            />
          ),
        })}
      />
        <stack.Screen 
        name='Allteachers' 
        component={Allteachers} 
        options={({ navigation }) => ({
          title: 'Allteachers', // Set the title of the header
          headerStyle: {
            backgroundColor: colors.background, // Change the background color if needed
          },
          headerTintColor: colors.primary, // Change the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Adjust the title font weight
            fontSize: 20 , // Adjust the title font size
          },
          headerTitleAlign: 'center', // Align the title to the center
          headerRight: () => (
            <Icon
              name="plus" // Adjust the icon name as needed
              size={24} // Adjust the icon size as needed
              color={colors.primary} // Adjust the icon color as needed
              style={{ marginRight: 15 }} // Adjust the margin as needed
             onPress={()=>navigation.navigate('Principaladdstaff')}
            />
          ),
        })}
      />
  <stack.Screen 
        name='Otherstafflist' 
        component={Otherstafflist} 
        options={({ navigation }) => ({
          title: 'Nonteaching staff', // Set the title of the header
          headerStyle: {
            backgroundColor: colors.background, // Change the background color if needed
          },
          headerTintColor: colors.primary, // Change the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Adjust the title font weight
            fontSize: 20 , // Adjust the title font size
          },
          headerTitleAlign: 'center', // Align the title to the center
          headerRight: () => (
            <Icon
              name="plus" // Adjust the icon name as needed
              size={24} // Adjust the icon size as needed
              color={colors.primary} // Adjust the icon color as needed
              style={{ marginRight: 15 }} // Adjust the margin as needed
             onPress={()=>navigation.navigate('Addotherstaff')}
            />
          ),
        })}
      />
{/* <stack.Screen 
  name='Otherstafflist' 
  component={Otherstafflist} 
  options={({ navigation }) => ({
    title: 'Nonteaching staff', // Set the title of the header
    headerStyle: {
      backgroundColor: colors.background, // Change the background color if needed
    },
    headerTintColor: colors.primary, // Change the text color of the header
    headerTitleStyle: {
      fontWeight: 'bold', // Adjust the title font weight
      fontSize: 20 , // Adjust the title font size
    },
    headerTitleAlign: 'center', // Align the title to the center
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Addotherstaff')}>
                          <Image source={require("./Image/boy.jpeg")} style={{ width: '22%', height: 90, alignSelf: 'center', justifyContent: 'center', borderRadius: 88, marginStart: 7, marginTop: 8 }} ></Image>

      </TouchableOpacity>
    ),
  })}
/> */}

<stack.Screen 
        name='Event' 
        component={Event} 
        options={({ navigation }) => ({
          title: 'Event', // Set the title of the header
          headerStyle: {
            backgroundColor: colors.background, // Change the background color if needed
          },
          headerTintColor: colors.primary, // Change the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Adjust the title font weight
            fontSize: 20 , // Adjust the title font size
          },
          headerTitleAlign: 'center', // Align the title to the center
          headerRight: () => (
            <Icon
              name="plus" // Adjust the icon name as needed
              size={24} // Adjust the icon size as needed
              color={colors.primary} // Adjust the icon color as needed
              style={{ marginRight: 15 }} // Adjust the margin as needed
             onPress={()=>navigation.navigate('Eventadd')}
            />
          ),
        })}
      />

      </stack.Navigator>
    </NavigationContainer>

  )
}



export const DrawStacks = () => {
  const{colors}=useTheme();
  return (
    <Drawstack.Navigator initialRouteName='Administration' >
   
    <Drawstack.Screen name="Administration" component={Administration}
        options={{
           title: 'Home',
            drawerIcon: ({ size}) => (
              <Icon
                 name="home-outline"
                 size={30}
                 color={colors.background} 
                  />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>   
       


 {/* <Drawstack.Screen name="Directorsendnotice" component={Directorsendnotice}
        options={{
           title: 'Notice',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bell-outline"
                 size={30}
                 color={colors.background} 
              />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>       */}
        
 <Drawstack.Screen name="Leavesections" component={Leavesections}
        options={{
           title: 'LeaveRequests',
            drawerIcon: ({ size}) => (
              <Icon
                 name="account-arrow-left-outline"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>
            
        <Drawstack.Screen name="Time" component={Time}
        options={{
           title: 'Timetable',
            drawerIcon: ({ size}) => (
              <Icon
                 name="timetable"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
          <Drawstack.Screen name="Examtimetable" component={Examtimetable}
        options={{
           title: 'Examtimetable',
            drawerIcon: ({ size}) => (
              <Icon
                 name="timetable"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
          <Drawstack.Screen name="Branchlist" component={Branchlist}
        options={({ navigation }) => ({
          title: 'Branchlist',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bulletin-board"
                 size={30}
                 color={colors.background} 
              />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  }, headerRight: () => (
            <View style={{flexDirection:'row'}}>
              {/* <Icon name="plus" size={24} color={colors.primary} style={{ marginRight: 15 }}  onPress={()=>navigation.navigate(Noticeadd)} /> */}
             
            </View>

          ),
        })}/>  
         <Drawstack.Screen name="Profile" component={Profile}
        options={{
           title: 'Profile',
            drawerIcon: ({ size}) => (
              <Icon
                 name="account"
                 size={30}
                 color={colors.background} 
                  />

           ), headerStyle: {backgroundColor: colors.background },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
   
               
    </Drawstack.Navigator>
  )
}
export const DrawStack2 = () => {
  const{colors}=useTheme();
  return (
    <Drawstack.Navigator initialRouteName='Principalhome' >
     {/* <Drawstack.Screen name="Bottomstack4" component={Bottomstack4}
        options={{
           title: 'Bottom',
            drawerIcon: ({ size}) => (
              <Icon
                 name="home-outline"
                 size={size}
                 color={'blue'} 
                  />

           ), headerStyle: {backgroundColor: '#192f6a',   },headerTintColor: '#ffffff',   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>     */}
    <Drawstack.Screen name="Principalhome" component={Principalhome}
        options={{
           title: 'Home',
            drawerIcon: ({ size}) => (
              <Icon
                 name="home-outline"
                 size={30}
                 color={colors.background} 
                  />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>   
       
     
  
       <Drawstack.Screen name="Notice" component={Note}
        options={({ navigation }) => ({
          title: 'Notice Send',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bulletin-board"
                 size={30}
                 color={colors.background} 
              />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  }, headerRight: () => (
            <View style={{flexDirection:'row'}}>
              <Icon name="plus" size={24} color={colors.primary} style={{ marginRight: 15 }}  onPress={()=>navigation.navigate(Noticeadd)} />
             
            </View>

          ),
        })}/>  



 <Drawstack.Screen name="Principalnoticelist" component={Principalnoticelist}
        options={{
           title: 'Noticeboard',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bell-outline"
                 size={30}
                 color={colors.background} 
              />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>  
       
 <Drawstack.Screen name="Leavesections" component={Leavesections}
        options={{
           title: 'LeaveRequests',
            drawerIcon: ({ size}) => (
              <Icon
                 name="account-arrow-left-outline"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 

 
          <Drawstack.Screen name="Examtimetable" component={Examtimetable}
        options={{
           title: 'Examtimetable',
            drawerIcon: ({ size}) => (
              <Icon
                 name="timetable"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
          <Drawstack.Screen name="Time" component={Time}
        options={{
           title: 'Classtimetable',
            drawerIcon: ({ size}) => (
              <Icon
                 name="timetable"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
         <Drawstack.Screen name="Profile" component={Profile}
        options={{
           title: 'Profile',
            drawerIcon: ({ size}) => (
              <Icon
                 name="account"
                 size={30}
                 color={colors.background} 
                  />

           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>        
    </Drawstack.Navigator>
  )
}
export const DrawStack3 = () => {
  const {colors}=useTheme();

  return (
    <Drawstack.Navigator initialRouteName='Teacherhome' >
    
    <Drawstack.Screen name="Teacherhome" component={Teacherhome}
        options={{
           title: 'Home',
            drawerIcon: ({ size}) => (
              <Icon
                 name="home-outline"
                 size={30}
                 color={colors.background} 
                  />
           ), headerStyle: {backgroundColor:colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>   
        <Drawstack.Screen name="Staffaddnotice" component={Staffaddnotice}
        options={({ navigation }) => ({
          title: 'Notes',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bulletin-board"
                 size={30}
                 color={colors.background} 
              />
           ), headerStyle: {backgroundColor:colors.background ,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  }, headerRight: () => (
            <View style={{flexDirection:'row'}}>
             
            </View>

          ),
        })}/>  
    
   
   <Drawstack.Screen name="Studentleaverequest" component={Studentleaverequest}
        options={{
           title: 'Studentleaverequest',
            drawerIcon: ({ size}) => (
              <Icon
                 name="google-classroom"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>
   
      <Drawstack.Screen name="Notice" component={Teachernoticelist}
        options={({ navigation }) => ({
          title: 'Teachernoticelist',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bulletin-board"
                 size={30}
                 color={colors.background} 
              />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  }, 
       
        })}/>  

<Drawstack.Screen name="Parentevent" component={Parentevent}
        options={({ navigation }) => ({
          title: 'Event',
            drawerIcon: ({ size}) => (
              <Icon
                 name="calendar-search"
                 size={30}
                 color={colors.background} 
                 
              />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  }, headerRight: () => (
            <View style={{flexDirection:'row'}}>
             
            </View>
          ),
        })}/> 

 <Drawstack.Screen name="Notifications" component={Notifications}
        options={{
           title: 'Notifications',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bell-outline"
                 size={30}
                 color={colors.background} 
              />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>  
     
 <Drawstack.Screen name="Techerleavelist" component={Techerleavelist}
        options={{
           title: 'LeaveRequests',
            drawerIcon: ({ size}) => (
              <Icon
                 name="account-arrow-left-outline"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,},headerTintColor: colors.primary, headerTitleStyle: { fontWeight: 'bold',},
        }}/>    
        <Drawstack.Screen name="Timetable" component={Timetable}
        options={{
           title: 'Timetable create',
            drawerIcon: ({ size}) => (
              <Icon
                 name="timetable"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
          <Drawstack.Screen name="Examtime" component={Examtime}
        options={{
           title: 'Examtimetable create',
            drawerIcon: ({ size}) => (
              <Icon
                 name="timetable"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
         <Drawstack.Screen name="Profile" component={Profile}
        options={{
           title: 'Profile',
            drawerIcon: ({ size}) => (
              <Icon
                 name="account"
                 size={30}
                 color={colors.background} 
                  />

           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>        
    </Drawstack.Navigator>
  )
}
export const DrawStack4 = () => {
  const {colors}=useTheme();
  return (
    <Drawstack.Navigator initialRouteName='Parenthome' >
    
    <Drawstack.Screen name="Parenthome" component={Parenthomepage}
        options={{
           title: 'Home',
            drawerIcon: ({ size}) => (
              <Icon
                 name="home-outline"
                 size={30}
                 color={colors.background} 
                  />
           ), headerStyle: {backgroundColor:colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>   
      
 
    
             <Drawstack.Screen name="Parentleavelist" component={Parentleavelist}
        options={{
           title: 'Parentleavelist',
            drawerIcon: ({ size}) => (
              <Icon
                 name="playlist-check"
                 size={30}
                 color={colors.background} 
                  />

           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>   
        
        <Drawstack.Screen name="Result" component={Result}
        options={{
           title: 'Resultsearch',
            drawerIcon: ({ size}) => (
              <Icon
                 name="alarm-panel-outline"
                 size={size}
                 color={colors.background} 
                  />

           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>    
          <Drawstack.Screen name="Parentnotice" component={Parentnotice}
        options={{
           title: 'Parentnotice',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bulletin-board"
                 size={size}
                 color={colors.background} 
                  />

           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
       <Drawstack.Screen name="Receipt" component={Receipt}
        options={{
           title: 'Receipt',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bulletin-board"
                 size={size}
                 color={colors.background} 
                  />

           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 

              <Drawstack.Screen name="Profile" component={Student}
        options={{
           title: 'Profile',
            drawerIcon: ({ size}) => (
              <Icon
                 name="account"
                 size={size}
                 color={colors.background} 
                  />

           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>                
    </Drawstack.Navigator>
  )
}
export const DrawStack5 = () => {
  const{colors}=useTheme();
  return (
    <Drawstack.Navigator initialRouteName='Directorhome' >
   
    <Drawstack.Screen name="Directorhome" component={Directorhome}
        options={{
           title: 'Home',
            drawerIcon: ({ size}) => (
              <Icon
                 name="home-outline"
                 size={30}
                 color={colors.background} 
                  />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>   
    
       
 

 <Drawstack.Screen name="Notifications" component={Notifications}
        options={{
           title: 'Notifications',
            drawerIcon: ({ size}) => (
              <Icon
                 name="bell-outline"
                 size={30}
                 color={colors.background} 
              />
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/>  
      <Drawstack.Screen name="Adminsendleave" component={Adminsendleave}
        options={{
           title: 'Add Leave',
            drawerIcon: ({ size}) => (
              <Icon
                 name="account-arrow-left-outline"
                 size={30}
                 color={colors.background} 
               
              />
             
           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
      

            
      
      
         <Drawstack.Screen name="Profile" component={Profile}
        options={{
           title: 'Profile',
            drawerIcon: ({ size}) => (
              <Icon
                 name="account"
                 size={30}
                 color={colors.background} 
                  />

           ), headerStyle: {backgroundColor: colors.background,   },headerTintColor: colors.primary,   headerTitleStyle: { fontWeight: 'bold',  },
        }}/> 
           
    </Drawstack.Navigator>
  )
}


// bottom bar

// export const Bottomstack4 = () => {
//   return (
//     <schoolbotstack.Navigator >
//         <schoolbotstack.Screen name='Schooldrawer5' component={DrawStack5} options={{
//         title: 'systemadmin',
//         headerShown: false,
//         tabBarIcon: ({ focused }) => (
//           <Icon name='barley' color='black' size={30} style={{ alignSelf: 'center', justifyContent: 'center' }} />
//         ), tabBarLabelStyle: { fontSize: 15, color: 'black' }
//       }} />  
//        <schoolbotstack.Screen name='Schooldrawer3' component={DrawStack3} options={{
//         title: 'Techer',
//         headerShown: false,
//         tabBarIcon: ({ focused }) => (
//           <Icon name='barley' color='black' size={30} style={{ alignSelf: 'center', justifyContent: 'center' }} />
//         ), tabBarLabelStyle: { fontSize: 15, color: 'black' }
//       }} />  
//        <schoolbotstack.Screen name='Schooldrawer2' component={DrawStack2} options={{
//         title: 'Principal',
//         headerShown: false,
//         tabBarIcon: ({ focused }) => (
//           <Icon name='barley' color='black' size={30} style={{ alignSelf: 'center', justifyContent: 'center' }} />
//         ), tabBarLabelStyle: { fontSize: 15, color: 'black' }
//       }} />   
     
//         <schoolbotstack.Screen name='Schooldrawer4' component={DrawStack4} options={{
//         title: 'parent',
//         headerShown: false,
//         tabBarIcon: ({ focused }) => (
//           <Icon name='barley' color='black' size={30} style={{ alignSelf: 'center', justifyContent: 'center' }} />
//         ), tabBarLabelStyle: { fontSize: 15, color: 'black' }
//       }} /> 
//        <schoolbotstack.Screen name='Schooldrawer' component={DrawStacks} options={{
//         title: 'Director',
//         headerShown: false,
//         tabBarIcon: ({ focused }) => (
//           <Icon name='barley' color='black' size={30} style={{ alignSelf: 'center', justifyContent: 'center' }} />
//         ), tabBarLabelStyle: { fontSize: 15, color: 'black' }
//       }} />  
       
//            <schoolbotstack.Screen name='Login' component={Login} options={{
//         title: 'Login',
//         headerShown: false,
//         tabBarIcon: ({ focused }) => (
//           <Icon name='barley' color='black' size={30} style={{ alignSelf: 'center', justifyContent: 'center' }} />
//         ), tabBarLabelStyle: { fontSize: 15, color: 'black' }
//       }} />    


//     </schoolbotstack.Navigator>
//   )  
// }


export const Topstack = () => {
  return (
    <schooltopstack.Navigator  >
      <schooltopstack.Screen name='notice' component={Parentnotice} options={{}}  />
      <schooltopstack.Screen name='exam' component={Parentexam} options={{}} />
      <schooltopstack.Screen name='personal' component={Parentpersonal} options={{}} />
    </schooltopstack.Navigator>

  )
} 