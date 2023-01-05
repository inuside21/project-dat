import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ImageBackground, Text, TouchableWithoutFeedback, View, Platform, Keyboard, Pressable, ScrollView, FlatList, Dimensions } from 'react-native';
import { ActivityIndicator, Appbar, Surface, Card, Badge, Paragraph, TextInput, Button, IconButton, FAB, Avatar } from 'react-native-paper';
import validator from 'validator';

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function ViewProduct({ navigation, route }) {
  // Variable
  // ===========================
  const userData = route.params.data;
  const searchData = route.params.sdata;    // category (ex: farm tools, seeds, etc...)
  const searchMode = route.params.smode;    // 23 33

  const [isFetching, setIsFetching] = useState(false);
  const [resultData, setResultData] = useState({});
  const [resultList, setResultList] = useState([]);
  const [resultMode, setResultMode] = useState("");

  // Function
  // ===========================
  // Start
  {
    // Load
    useEffect(() => {
      LoadSearch();
    }, [navigation])
  }

  // Load Search
  function LoadSearch()
  {
    setIsFetching(true);

    const urlReq = ConfigConnection.server + "api.php?mode=" + searchMode;
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        sCat: searchData,
        sSta: "",
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        setResultData(dat.data.cat);
        setResultMode(dat.data.smode);    // if searchMode 33 then 32
        setResultList(dat.data.list);
      }

      setIsFetching(false);
    })
  }

  /*
  // Result List Item
  const ResultItem = ({ item, index }) => (
    <Surface elevation={2} style={{ marginHorizontal: 10, marginVertical: 10, height: 100 }}>
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 10, marginHorizontal: 10 }}>
        <Image source={{ uri: ConfigConnection.image + item.img, cache: 'reload' }} style={{ height: 50, width: 50, borderRadius: 25 }} />
        <View style={{ marginLeft: 10, justifyContent: "center", flexShrink: 1 }}>
          <Pressable onPress={() => navigation.navigate('ViewProductData', { data: userData, sid: item.id, smode: resultMode })}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.trading_name}</Text>
            <Text>{item.trading_qty} {item.trading_uom}</Text>
            <Text>{item.trading_location} - {item.user.user_fname}</Text>
          </Pressable>
        </View>
      </View>
    </Surface>
  );
  */

  const ResultItem = ({ item, index }) => (
    
    
    <Surface elevation={2} style={{ marginHorizontal: 10, marginVertical: 10, height: 150, width: '43%' }}>
      
      <View style={{ flex: 1 }}>
      <Pressable onPress={() => navigation.navigate('ViewProductData', { data: userData, sid: item.id, smode: resultMode })}>
        <Image source={{ uri: ConfigConnection.image + item.img, cache: 'reload' }} style={{ width: "100%", height: 75 }} />
        <View style={{ justifyContent: "center", flexShrink: 1, marginHorizontal: 5 }}>
          
          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 2, alignSelf: "center", fontWeight: "bold", fontSize: 12 }}>{item.trading_name}</Text>
            <View style={{ flex: 1}}>
              <Text style={{ fontSize: 8 }}>Quantity Available</Text>
              <Text style={{ fontWeight: "bold", fontSize: 8 }}>{item.trading_qty} {item.trading_uom}</Text>
            </View>
          </View>
          
          { item.trading_price &&
            <Text style={{ fontWeight: "bold", fontSize: 10, color: "#2CCC74" }}>₱ {item.trading_price}</Text>
          }
          
          { item.user.user_fname &&
            <Text style={{ fontWeight: "bold", fontSize: 8 }}>{item.user.user_fname}</Text>
          }
          <Text style={{ fontSize: 8 }}>{item.trading_location}</Text>
        </View>
        </Pressable>
      </View>
    </Surface>

  );

  // Result List Refresh
  const onRefresh = () => {
    setIsFetching(true);
    LoadSearch();
  };
  


  // Output
  // ===========================
  return (
    <View style={styles.mainContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground source={require('../assets/others/bgmain.png')} resizeMode="cover" style={styles.mainContainerImage}>
            
            <View style={styles.mainContentBody}>
              { /* Content */ }
              <View style={styles.mainForm} >

                <Surface elevation={2} style={{ marginVertical: 10, height: 700, backgroundColor: "#D4D4D4" }}>
                  <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", marginVertical: 10, marginHorizontal: 10 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                      <Image source={require('../assets/others/icon_back.png')} style={{ height: 20, width: 20 }} />
                    </Pressable>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>{searchData}</Text>
                  </View>

                  { /* Body */ }
                  <View style={{ flex: 13, padding: 5, }}>
                  <ScrollView > 
                  <View style={styles.containerss}>
                  { resultList && resultList.length > 0 ?
                        resultList.map((e) => {
                          return (
                            <ResultItem item={e} index={e} />
                          )
                        })
                          
                        :
                          isFetching ?
                            <Text style={{ fontSize: 14, alignSelf: "center", marginTop: 20 }}>Loading...</Text>
                          :
                            <Text style={{ fontSize: 14, alignSelf: "center", marginTop: 20 }}>Nothing to display</Text>
                      }
                  </View>
                  </ScrollView>
                  </View>
                </Surface>

              </View>

              { /* Footer */ }
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 45, marginHorizontal: 10 }}>
                <View style={{ flex: 1 }}>
                  <Pressable onPress={() => navigation.navigate('Dashboard', { data: userData })} style={{ alignItems: "center", alignSelf: "center" }}>
                    <Image source={require('../assets/others/menu_home.png')} style={{ height: 28, width: 28 }} />
                    <Text style={{ color: "#f5f5f5", fontSize: 12, fontWeight: "bold" }}>Home</Text>
                  </Pressable>
                </View>
                <View style={{ flex: 1 }}>
                  <Pressable onPress={() => navigation.navigate('MessageView', { data: userData })} style={{ alignItems: "center", alignSelf: "center" }}>
                    <Image source={require('../assets/others/menu_message.png')} style={{ height: 28, width: 28 }} />
                    <Text style={{ color: "#f5f5f5", fontSize: 12, fontWeight: "bold" }}>Messages</Text>
                  </Pressable>
                </View>
                <View style={{ flex: 1 }}>
                  <Pressable onPress={() => navigation.navigate('DashboardSupport', { data: userData })} style={{ alignItems: "center", alignSelf: "center" }}>
                    <Image source={require('../assets/others/menu_announcement.png')} style={{ height: 28, width: 28 }} />
                    <Text style={{ color: "#f5f5f5", fontSize: 12, fontWeight: "bold" }}>Announcements</Text>
                  </Pressable>
                </View>
                <View style={{ flex: 1 }}>
                  <Pressable onPress={() => navigation.navigate('Profile', { data: userData })} style={{ alignItems: "center", alignSelf: "center" }}>
                    <Image source={require('../assets/others/menu_profile.png')} style={{ height: 28, width: 28 }} />
                    <Text style={{ color: "#f5f5f5", fontSize: 12, fontWeight: "bold" }}>Profiles</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            
          </ImageBackground>
        </TouchableWithoutFeedback>
    </View>
  );
}


// Styles
// ===============================================
const styles = StyleSheet.create({
  // View
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  containerss: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },

  mainContainerImage: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: "100%",
  },

  mainContentHeader: {
    justifyContent: "flex-start",
  },

  mainContentBody: {
    flex: 1,
    justifyContent: "space-between",
  },

  // Box
  mainFormLink: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginHorizontal: 15,
    paddingHorizontal: 20,
  },

  mainForm: {
    paddingHorizontal: 20,
  },

  // Link
  textFormLink: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  textFormLinkInactive: {
    color: "#B1AFB0",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // Text
  textHeader1: {
    color: "#fff",
    fontSize: 58,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: -40,
    marginLeft: 38,
  },

  textHeader2: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 38,
  },

  // Input
  formInput: {
    marginHorizontal: 10,
  },

  formButton: {
    marginHorizontal: 10,
    borderRadius: 12,
  }
});