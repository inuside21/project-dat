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
export default function MessageView({ navigation, route }) {
  // Variable
  // ===========================
  const userData = route.params.data;

  const [isFetching, setIsFetching] = useState(true);

  // message
  const [messageList, setMessageList] = useState([]);

  // Function
  // ===========================
  // Start
  {
    // Load
    useEffect(() => {
      const start = navigation.addListener('focus', () => {
        LoadMessageList();
      });

      return start;
    }, [navigation])
  }

  // Load Message
  function LoadMessageList()
  {
    setIsFetching(true);

    const urlReq = ConfigConnection.server + "api.php?mode=70";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        uid: userData.id,
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        setMessageList(dat.data);
      }

      setIsFetching(false);
    })
  }

  // Result List Item
  const ResultItem = ({ item, index }) => (
    <Surface elevation={2} style={{ marginHorizontal: 10, marginVertical: 10, height: 75 }}>
      
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 10, marginHorizontal: 10 }}>
      
      <Pressable onPress={() => navigation.navigate('Message', { data: userData, txnid: item.transactioninfo.id  })} style={{ flexDirection: "row"}}>
        <Image source={{ uri: ConfigConnection.image + item.userinfo.user_pic, cache: 'reload' }} style={{ height: 50, width: 50, borderRadius: 25 }} />
        <View style={{ marginLeft: 10, justifyContent: "center", flexShrink: 1 }}>
          
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.productinfo.trading_name}</Text>
            <Text>{item.userinfo.user_fname}</Text>
          
        </View>
        </Pressable>
        
      </View>
    </Surface>
  );

  // Result List Refresh
  const onRefresh = () => {
    setIsFetching(true);
    LoadMessageList();
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

                <Surface elevation={2} style={{ marginVertical: 10, height: 700 }}>
                  <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", marginVertical: 10, marginHorizontal: 10 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                      <Image source={require('../assets/others/icon_back.png')} style={{ height: 20, width: 20 }} />
                    </Pressable>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>Messages</Text>
                  </View>

                  { /* Body */ }
                  <View style={{ flex: 14, padding: 5, }}>
                    { messageList && messageList.length > 0 ?
                        <FlatList 
                          data={messageList}
                          renderItem={({item, index}) => <ResultItem item={item} index={index} />} 
                          keyExtractor={(item, index) => item + index}
                          onRefresh={onRefresh} 
                          refreshing={isFetching} 
                        />
                      :
                        isFetching ?
                            <Text style={{ fontSize: 14, alignSelf: "center", marginTop: 20 }}>Loading...</Text>
                          :
                            <Text style={{ fontSize: 14, alignSelf: "center", marginTop: 20 }}>Nothing to display</Text>
                    }
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