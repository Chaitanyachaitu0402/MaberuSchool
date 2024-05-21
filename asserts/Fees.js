
 import * as React from 'react';
 import { SafeAreaView, StyleSheet, View, Text ,Dimensions,FlatList} from 'react-native';
 import { Card, SegmentedButtons, useTheme, } from 'react-native-paper';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

 export default function Fee({navigation}) {
   const [value, setValue] = React.useState('');
   const [feeData, setfeeData] = React.useState([]);
  
   const { colors } = useTheme();

   const horizontalview = [{   status: 'Paid',fees:'Term-I Fees' ,time:'Paid on: 01-03-2024',amount:'Amount Paid :Rs 2444'},{   status: 'Unpaid',fees:'Term-II Fees' ,time:'Due Date: 01-03-2024',amount:'Due Amount :Rs 3300'},{   status: 'Unpaid',fees:'Exam Fees' ,time:'Due Date: 01-03-2024',amount:'Due Amount :Rs 3300'},{   status: 'Unpaid',fees:'Bus Fees' ,time:'Due Date: 05-05-2024',amount:'Due Amount :Rs 3300'}]

   const apperancce = ({ item }) => {

     return (
       <Card style={{ width: '85%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8 }}>

         <View style={{ flexDirection: 'row', margin: 6, justifyContent: 'space-between' }}>
         <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', margin: 7, }}>{item.fees}</Text>

           <View>
             {(() => { if (value!=="All") {
               switch (item.status) {
                 case 'Paid':
                   return <Text style={{ color: "#008000", fontWeight: 'bold' }}>Paid</Text>;
                 case 'Unpaid':
                   return <Text style={{ color: "#ff0000", fontWeight: 'bold' }}>Unpaid</Text>;
                 default:
                   return <Text style={{ color: "#000000", fontWeight: 'bold' }}></Text>;

               }
             } 
             })()}
           </View>

         </View>

         <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', margin: 5, }}>{item.time}</Text>
         <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', margin: 5, }}>{item.amount}</Text>

       </Card>

     )
   }

   const allFee=()=>{
 setfeeData(horizontalview)
   }
   const paidFee=()=>{
    const paiddata= horizontalview.filter(item=>item.status=='Paid');
    setfeeData(paiddata)
    
   }
   const unpaidFee=()=>{
     const unpaiddata= horizontalview.filter(item=>item.status=='Unpaid');
     setfeeData(unpaiddata)
   }

   return (

     <SafeAreaView style={{  flex: 1,height:600,
      alignItems: 'center',}}>
       <View style={{flex:1,width:'100%',backgroundColor:colors.primary,}}>

       <View style={{width:'77%',margin:5,alignSelf:'center'}}>

       <SegmentedButtons
         value={value}
         onValueChange={setValue}
         buttons={[
           {
             value: 'All',
             label: 'All ',
             onPress:(allFee)
           },
           {
             value: 'Paid',
             label: 'Paid',
             onPress:(paidFee)

           },
           {
             value: 'Unpaid',
             label: 'Unpaid',
             onPress:(unpaidFee)

           },
         ]} 
       />

     </View  >
<FlatList data={feeData} renderItem={apperancce} horizontal={false} ></FlatList>

     </View>


     </SafeAreaView>
   );
 };


















