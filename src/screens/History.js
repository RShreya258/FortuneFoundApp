/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Image, StyleSheet,ActivityIndicator, FlatList,Pressable, Text, View,SafeAreaView,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily, Border, FontSize} from '../GlobalStyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useStore} from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState,useEffect} from 'react';
import axios from 'axios';
// import BottomNav from '../components/BottomNav.js';


const History = () =>
{
    const navigation = useNavigation();
    // const tabBarHeight = useBottomTabBarHeight();
    // const OrderHistoryList = useStore((state) => state.OrderHistoryList);
    const [users, setUsers] = useState([]);
    const value = AsyncStorage.getItem('email');
    const val = value._j;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/fooddetail/"shreyaraghu258@gmail.com"');
        console.log(data);// Update with your actual backend URL
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };


      const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text>{item.types}</Text>
          <Text>{item.ngoname}</Text>
          <Text>{item.hours}</Text>

        </View>
      );

      const myItemSeparator = () => {
        return <View style={{ height: 1, backgroundColor: 'grey',marginHorizontal:10}} />;
        };

      const myListEmpty = () => {
        return (
          <View style={{ alignItems: 'center' }}>
          <Text style={styles.item}>No data found</Text>
          </View>
        );
      };
    return (
      <SafeAreaView style={styles.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => <View style = {{margin:20,marginRight:20,backgroundColor:'#C9D7DD',borderRadius:30,width:'80%',height:150}}>
        <Text style={styles.item}>NGO : {item.ngoname}</Text>
        <Text style={styles.heading}>type : Food</Text>
        <Text style={styles.item2}>variety : {item.types}</Text>
        <Text style={styles.item2}>no.of meals :{item.quantity}</Text>
        {/* <Text style={styles.item2}>{item.hours}</Text> */}
        </View>}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <View style ={{width:400,height:100}}>
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <Text style={[styles.foodDetails, styles.quantityTypo]}>
          History
        </Text>
        </View>

      )}

      // ListFooterComponent={() => (
      //   // <BottomNav />
      // //   <View style={styles.footerpos}>
      // //   <Image
      // //     style={[styles.biclockIcon, styles.iconLayout2]}
      // //     resizeMode="cover"
      // //     source={require('../assets/group.png')}
      // //   />

      // //   <Image
      // //     style={[styles.fluenthome20RegularIcon, styles.iconLayout2]}
      // //     resizeMode="cover"
      // //     source={require('../assets/fluenthome20regular.png')}
      // //   />
      // //   <Pressable
      // //     style={[styles.ggprofile, styles.iconLayout2]}
      // //     onPress={() => navigation.navigate('Profile')}>
      // //     <Image
      // //       style={[styles.icon, styles.iconLayout1]}
      // //       resizeMode="cover"
      // //       source={require('../assets/ggprofile.png')}
      // //     />
      // //   </Pressable>
      // // </View>
      // )}
    />


  </SafeAreaView>
  );
    //     <SafeAreaView>
    //     <View style={[styles.rectangleParent, styles.groupChildLayout]}>
    //     <View style={[styles.groupChild, styles.groupPosition1]} />
    //     <Text style={[styles.foodDetails, styles.quantityTypo]}>
    //       History
    //     </Text>
    //     </View>
    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   {data.length > 0 ? (
    //     <FlatList
    //       data={data}
    //       renderItem={({ item }) => (
    //         <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>

    //           <Text>{item.ngoname}</Text>
    //           <Text>{item.types}</Text>
    //           <Text>{item.hours}</Text>

    //           {/* Render other content as needed */}
    //         </View>
    //       )}
    //       keyExtractor={(item, index) => index.toString()}
    //     />
    //   ) : (
    //     <Text>No documents available</Text>
    //   )}
    // </View>
    //   </SafeAreaView>
    };

const styles = StyleSheet.create({
        rectangleParent: {
            top: 26,
            left: 35,
            backgroundColor: Color.signupBack,
            padding: {bottom: 10},
          },
          icon: {
            height: '100%',
            overflow: 'hidden',
          },
          iconLayout1: {
            width: '100%',
            overflow: 'hidden',
          },
          footerpos: {
            top: 10,
            left: 20,
            width:300,
            height:400,
            position:'absolute',
            backgroundColor:'pink',
          },
          ggprofile: {
            left: 149,
            top: 0,
          },
          biclockIcon: {
            left: 204,
            top: 0,
            width: 24,
            overflow: 'hidden',
          },
          iconLayout2: {
            height: 24,
            width: 24,
            position: 'absolute',
          },
          item: {
            padding: 2,
            marginTop: 5,
            marginLeft:20,
            fontSize: 20,
            fontFamily:FontFamily.kaushanScriptRegular,
          },
          item2: {
            padding: 2,
            marginTop: 5,
            marginLeft:60,
            fontSize: 20,
            fontFamily:FontFamily.kaushanScriptRegular,
          },
          heading: {
            padding: 2,
            marginTop: 5,
            marginLeft:20,
            fontSize: 20,
            fontFamily:FontFamily.kaushanScriptRegular,
            color:'black',
          },
          groupChildLayout: {
            height: 66,
            width: 317,
            position: 'absolute',
          },
          groupChild: {
            backgroundColor: Color.headingscolor,
            height: 66,
            width: 310,
            left:50,
            position: 'absolute',
          },
           groupPosition1: {
            borderRadius: Border.br_36xl,
            left: 45,
            top: 20,
          },
          foodDetails: {
            top: 25,
            left: 150,
            textAlign:'center',
            Color: Color.colorBlack,
            fontFamily:FontFamily.kaushanScriptRegular,
          },
          quantityTypo: {
            textAlign: 'left',
            fontFamily: FontFamily.kaushanScriptRegular,
            position: 'absolute',
            fontSize:FontSize.size_13xl,
          },

    });
export default History;
