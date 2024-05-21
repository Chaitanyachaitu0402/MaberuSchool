// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import LinearGradient from 'react-native-linear-gradient';
// import { Card, useTheme, Button,Menu, Divider, Provider  } from 'react-native-paper'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import AsyncStorage from '@react-native-async-storage/async-storage';


// const Studentlist = ({navigation}) => {
//     const [isShimmering, setisShimmering] = useState(false);
//     const openMenu = (index) => setVisibleMenuIndex(index);
//     const closeMenu = () => setVisibleMenuIndex(null);
//     const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

//     {/* <Text>----Flatlist appearance----</Text> */ }

//     const horizontalview5 = [{ number: '01', name: 'NAME: Ravi', id: 'ID NO : 12345', section: 'SECTION : A' }, { number: '02', name: 'NAME: Leela', id: 'ID NO : 27896', section: 'SECTION : B' }, { number: '03', name: 'NAME: Vamsi', id: 'ID NO : 98765', section: 'SECTION : C' }, { number: '04', name: 'NAME: Rahul', id: 'ID NO : 12334', section: 'SECTION : A' }, { number: '05', name: 'NAME: Swetha', id: 'ID NO : 12344', section: 'SECTION : C' }, { number: '06', name: 'NAME: Praneeth', id: 'ID NO : 12332', section: 'SECTION : B' }, { number: '07', name: 'NAME: Lakshmi', id: 'ID NO : 12346', section: 'SECTION : A' }, { number: '08', name: 'NAME: Rajesh', id: 'ID NO : 12333', section: 'SECTION : C' }, { number: '09', name: 'NAME: Ramu', id: 'ID NO : 12112', section: 'SECTION : C' }, { number: '10', name: 'NAME: Harika', id: 'ID NO : 12421', section: 'SECTION : B' },]
//     const apperancce = (data,index) => {
//         const isMenuVisible = visibleMenuIndex === index;

//         console.log("data : ", data);
//         return (

//             <Card style={{ width: '100%', height: 100, margin: 4, borderRadius: 10, backgroundColor: colors.primary }}>

//                 <View style={{ flexDirection: 'row' }}>

//                     <View>
//                         <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >
//                             <Text style={{ color: colors.primary, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{data.item.number}</Text>
//                         </Card>
//                     </View>

//                     <View style={{ justifyContent: 'center' }}>
//                         <Text style={{ color: colors.text, fontSize: 14, margin: 5 }}>{data.item.name}</Text>
//                         <Text style={{ color: colors.text, fontSize: 14, margin: 3 }}>{data.item.id}</Text>
//                         <Text style={{ color: colors.text, fontSize: 14, margin: 3 }}>{data.item.section}</Text>
//                     </View>
//                    
//                 </View>
//             </Card>
//         )
//     }

//     {/* <Text>----Flatlist appearance----</Text> */ }

//     const { colors } = useTheme();
//     // const [branchCode, setbranchCode] = useState("")
//     // const [accessToken, setaccessToken] = useState("")
//     // const [refreshtoken, setrefreshToken] = useState("")
//     // const [role, setrole] = useState("")
//     // const [studentData, setstudentData] = useState([])



//     {/* <Text>----Integration----</Text> */ }

//     // const getStudentListData = async (branchCode, role) => {
//     //     try {
//     //         const studentlistresponse = await fetch("https://localhost.com:3000/get-all-Studentlist", {
//     //             method: "POST",
//     //             body: JSON.stringify({ branchCode: branchCode, role: role }),
//     //             Authorization: `Bearer ${accessToken}`,
//     //             headers: { Accept: "application/JSON, text/plain, */*", 'Content-Type': 'application/json; charset=UTF-8' }
//     //         }).then((Res) => { return Res.json() });

//     //         const studentlistdata = await studentlistresponse.then(data);
//     //         if (studentlistdata.success) {
//     //             setstudentData(studentlistdata.response)
//     //             setTimeout(() => {
//     //                 console.log('=========================>')
//     //                 setisShimmering(true);
//     //             }, 3000);

//     //         } else {
//     //             if (studentlistdata.message == "invalid token") {
//     //                 generateRefreshtoken(refreshtoken);
//     //             } else {
//     //                 Alert.alert('this studentlist cant be updated right now')
//     //             }
//     //         }
//     //     } catch (error) {
//     //         Alert.alert(error)
//     //     }
//     // }

//     // const getuserdata = async () => {
//     //     const accessToken = await AsyncStorage.getItem("accessToken");
//     //     const refreshtoken = await AsyncStorage.getItem("refreshtoken");
//     //     const branchCode = await AsyncStorage.getItem("branchCode");
//     //     setbranchCode(branchCode);
//     //     setaccessToken(accessToken);
//     //     setrefreshToken(refreshtoken);
//     //     setrole(role);

//     //     getStudentListData(branchCode, role);
//     // }

//     // useEffect(() => {
//     //     getuserdata()
//     // }, [])

//     {/* <Text>----Integration----</Text> */ }
//     setTimeout(() => {
//                         console.log('=========================>')
//                         setisShimmering(true);
//                    }, 3000);
//     return (

//         <View style={styles.container}>

//             {isShimmering ? (

//                 <View style={{ backgroundColor: colors.primary, flex: 1 }}>


//                     <Card style={{ width: '100%', height: 150, margin: 4, borderRadius: 10, backgroundColor: colors.primary }}>

//                         <View style={{ flexDirection: 'row' }}>

//                             <View>
//                                 <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >
//                                     <Text style={{ color: colors.bg, alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>VI</Text>
//                                 </Card>
//                             </View>

//                             <View style={{ justifyContent: 'center' }}>
//                                 <Text style={{ color: colors.text, fontSize: 16, margin: 5 }}>Section name : A</Text>
//                                 <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>No of students : 30 </Text>
//                                 <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>Class teacher : Sirisha</Text>
//                             </View>

//                         </View>

//                         <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

//                             <Button textColor={colors.primary} buttonColor={colors.background} labelStyle={{ fontSize: 15, color: colors.primary }} style={{ width: '20%', height: 37, borderColor: colors.primary, borderRadius: 6, marginTop: 10 }}onPress={()=>navigation.navigate('Addstudent')}> Add
//                             </Button >

//                             <Button textColor={colors.primary} buttonColor={colors.background} labelStyle={{ fontSize: 15, color: colors.primary }} style={{ width: '20%', height: 37, borderColor: colors.primary, borderRadius: 6, marginTop: 10 }}onPress={()=>navigation.navigate('Editsection')}>
//                                 Edit
//                             </Button >

//                             <Button textColor={colors.primary} buttonColor={colors.background} labelStyle={{ fontSize: 15, color: colors.primary }} style={{ width: '20%', height: 37, borderColor: colors.primary, borderRadius: 6, marginTop: 10 }}>
//                                 Delete
//                             </Button >

//                         </View>

//                     </Card>

//                     {/* <Text>----Flatlist view----</Text> */}

//                     <FlatList data={horizontalview5} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>

//                     {/* <Text>----Flatlist view----</Text> */}

//                 </View>

//             ) : (

//                 <View>
//                     <Card style={{ width: '100%', height: 100, margin: 4, borderRadius: 10, justifyContent: 'center', alignSelf: 'center' }}>

//                         <View style={{ flexDirection: 'row' }}>

//                             <ShimmerPlaceholder style={{ width: 70, height: 70, marginStart: 5, borderRadius: 35, }}
//                                 LinearGradient={LinearGradient}
//                                 gradientColors={['#e1e9ee', '#f0f4f7', '#e1e9ee']}
//                                 visible={isShimmering}
//                                 autoRun={isShimmering}>
//                             </ShimmerPlaceholder>

//                             <View style={{ justifyContent: 'center' }}>
//                                 <ShimmerPlaceholder style={{ margin: 5, width: '70%' }}
//                                     LinearGradient={LinearGradient}
//                                     gradientColors={['#e1e9ee', '#f0f4f7', '#e1e9ee']}
//                                     visible={isShimmering}
//                                     autoRun={isShimmering}>
//                                 </ShimmerPlaceholder>
//                                 <ShimmerPlaceholder style={{ margin: 5, width: '85%' }}
//                                     LinearGradient={LinearGradient}
//                                     gradientColors={['#e1e9ee', '#f0f4f7', '#e1e9ee']}
//                                     visible={isShimmering}
//                                     autoRun={isShimmering}>
//                                 </ShimmerPlaceholder>
//                                 <ShimmerPlaceholder style={{ margin: 5, width: '90%' }}
//                                     LinearGradient={LinearGradient}
//                                     gradientColors={['#e1e9ee', '#f0f4f7', '#e1e9ee']}
//                                     visible={isShimmering}
//                                     autoRun={isShimmering}>
//                                 </ShimmerPlaceholder>
//                             </View>

//                         </View>

//                     </Card>
//                 </View>
//             )}

//             {/* <Text>----Shimmer view----</Text> */}

//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {

//         padding: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'white'
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',

//     },
//     shimmerContainer: {
//         width: '100%', height: 100, margin: 8, justifyContent: 'center', borderRadius: 7
//     },
//     text: {
//         fontSize: 22,
//         color: 'black',
//         textAlign: 'center'
//     },
// });

// {/* <Text>----Shimmer Styling----</Text> */ }

// export default Studentlist;








import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Card, useTheme, Button, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const Exampleshimmer = ({ navigation }) => {
  const [isShimmering, setIsShimmering] = useState(false);
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

  const openMenu = (index) => setVisibleMenuIndex(index);
  const closeMenu = () => setVisibleMenuIndex(null);


  const horizontalview5 = [{ number: '01', name: 'NAME: Ravi', id: 'ID NO : 12345', section: 'SECTION : A' }, { number: '02', name: 'NAME: Leela', id: 'ID NO : 27896', section: 'SECTION : B' }, { number: '03', name: 'NAME: Vamsi', id: 'ID NO : 98765', section: 'SECTION : C' }, { number: '04', name: 'NAME: Rahul', id: 'ID NO : 12334', section: 'SECTION : A' }, { number: '05', name: 'NAME: Swetha', id: 'ID NO : 12344', section: 'SECTION : C' }, { number: '06', name: 'NAME: Praneeth', id: 'ID NO : 12332', section: 'SECTION : B' }, { number: '07', name: 'NAME: Lakshmi', id: 'ID NO : 12346', section: 'SECTION : A' }, { number: '08', name: 'NAME: Rajesh', id: 'ID NO : 12333', section: 'SECTION : C' }, { number: '09', name: 'NAME: Ramu', id: 'ID NO : 12112', section: 'SECTION : C' }, { number: '10', name: 'NAME: Harika', id: 'ID NO : 12421', section: 'SECTION : B' },]
   const appearance = (data, index) => {
    const isMenuVisible = visibleMenuIndex === index;
    
    return (
      <Card style={{  height: 100,
        margin: 8,
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: colors.primary,width:'88%',alignSelf:'center'}} onPress={()=>navigation.navigate('Studentdetails')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
<View style={{flexDirection:'row'}}>

<View style={{ flexDirection: 'row' }}>

                   <View>
                       <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >
                           <Text style={{ color: colors.primary, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{data.item.number}</Text>
                       </Card>
                   </View>

                   <View style={{ justifyContent: 'center' }}>
                       <Text style={{ color: colors.text, fontSize: 14, margin: 5 }}>{data.item.name}</Text>
                       <Text style={{ color: colors.text, fontSize: 14, margin: 3 }}>{data.item.id}</Text>
                       <Text style={{ color: colors.text, fontSize: 14, margin: 3 }}>{data.item.section}</Text>
                   </View> 
               </View>       


          </View>

          <Menu
            visible={isMenuVisible}
            onDismiss={closeMenu}
            anchor={<Icon name='dots-vertical' size={26} onPress={() => openMenu(index)} />}
          >
            <Menu.Item title="Edit" onPress={() => navigation.navigate("Editstudent")} />
            <Menu.Item title="Delete" />
          </Menu>
          
        </View>
      </Card>
    );
  };

  const { colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setIsShimmering(true);
    }, 3000);
  }, []);

  return (
    <View style={{width:'99%',flex:1}}>

    <View style={[styles.container,{backgroundColor: 'white'}]}>
        <View style={styles.shimmerContainer}>

<View style={{width:'100%'}}>

           <Card style={{ height: 150, margin: 4, borderRadius: 10, backgroundColor: colors.primary,width:Dimensions.get('window').width }}>

                       <View style={{ flexDirection: 'row' }}>

                           <View>
                               <Card mode='contained' style={{ width: 70, height: 70, backgroundColor: 'transparent', marginStart: 5 }} contentStyle={{ width: 90, height: 90, backgroundColor: colors.background, borderWidth: 1, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', marginTop: 3 }} >
                                   <Text style={{ color: colors.bg, alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>VI</Text>
                               </Card>
                           </View>

                           <View style={{ justifyContent: 'center' }}>
                               <Text style={{ color: colors.text, fontSize: 16, margin: 5 }}>Section name : A</Text>
                               <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>No of students : 30 </Text>
                               <Text style={{ color: colors.text, fontSize: 16, margin: 3 }}>Class teacher : Sirisha</Text>
                           </View>

                       </View>

                       <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                           <Button textColor={colors.primary} buttonColor={colors.background} labelStyle={{ fontSize: 15, color: colors.primary }} style={{ width: '44%', height: 37, borderColor: colors.primary, borderRadius: 6, marginTop: 10 }}onPress={()=>navigation.navigate('Addstudent')}> Add
                           </Button >

                       </View>

                   </Card>
  
                   </View>


          <FlatList
            data={horizontalview5}
            renderItem={({ item, index }) => appearance({ item }, index)}
            contentContainerStyle={{ margin: 9,
              columnGap: 5,width:Dimensions.get('window').width}}
          />
        </View>
   
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerPlaceholder: {
    width: '88%',
    height: 100,
    margin: 8,
    borderRadius: 7,
    backgroundColor: '#ffffff',
  },
  card: {
  
  },


});

export default Exampleshimmer;
