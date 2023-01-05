import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, ImageBackground, Text, TouchableWithoutFeedback, View, Platform, Keyboard, Pressable, ScrollView, Dimensions } from 'react-native';
import { Surface, TextInput, Button } from 'react-native-paper';
import validator from 'validator';
import * as ImagePicker from 'expo-image-picker';

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function ProfileReceiveData({ navigation, route }) {
  // Variable
  // ===========================
  const userData = route.params.data;
  const searchId = route.params.sid;             // item id
  const searchMode = route.params.smode;         // 22 32 42
  const [transactionData, setTransactionData] = useState(route.params.tdata);    // transaction data
  const sellerData = route.params.sdata;         // seller data

  console.log(transactionData.id)

  const [isFetching, setIsFetching] = useState(false);

  // form
  const [formData, setFormData] = useState({});
  const [formType, setFormType] = useState("");
  const [formUser, setFormUser] = useState({});
  const [formImage, setFormImage] = useState([]);
  

  // Function
  // ===========================
  // Start
  {
    // Load
    useEffect(() => {
      LoadSearchData();
    }, [navigation])
  }

  // Load Search Data
  function LoadSearchData()
  {
    setIsFetching(true);
    
    const urlReq = ConfigConnection.server + "api.php?mode=" + searchMode;
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        id: searchId, 
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        setFormData(dat.data.info);
        setFormType(dat.data.type);
        setFormUser(dat.data.user);
        setFormImage(dat.data.img);
      }

      setIsFetching(false);
    })
  }

  const OnPressReceived = () => {
    setIsFetching(true);
    
    const urlReq = ConfigConnection.server + "api.php?mode=121";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        tid: transactionData.id, 
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        ConfigAlert(dat.title, dat.message);
        setTransactionData(dat.data)
        console.log(dat.data)
      }
      else
      {
        ConfigAlert(dat.title, dat.message);
      }

      setIsFetching(false);
    })
  }


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
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>Product Details</Text>
                  </View>

                  <View style={{ flex: 3, flexDirection: "row", justifyContent: "flex-start", backgroundColor: "#D9D9D9", borderRadius: 5, marginHorizontal: 15, paddingTop: 15, }}>
                    <ScrollView horizontal={true} invertStickyHeaders={true} showsHorizontalScrollIndicator={false}>
                      { 
                        /* Image */
                        formImage && formImage.length > 0 &&
                          formImage.map(r => {
                            return (
                              <View style={{ width: 120, height: 120, marginHorizontal: 5 }}>
                                <Image source={{ uri: ConfigConnection.image + r.img_name }} style={{ width: "100%", height: "100%" }} />
                              </View>
                            )
                          })
                      }
                    </ScrollView>
                  </View>

                  <View style={{ flex: 4, padding: 5, }}>
                    <ScrollView>
                      <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <View style={{ flex: 1, marginHorizontal: 10 }}>
                          <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Category</Text>
                        </View>
                        <View style={{ flex: 2, marginHorizontal: 10 }}>
                          <Text style={{ fontWeight: "bold" }}>{formData.trading_cat}</Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <View style={{ flex: 1, marginHorizontal: 10 }}>
                          <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Name</Text>
                        </View>
                        <View style={{ flex: 2, marginHorizontal: 10 }}>
                          <Text style={{ fontWeight: "bold" }}>{formData.trading_name}</Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <View style={{ flex: 1, marginHorizontal: 10 }}>
                          <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Location</Text>
                        </View>
                        <View style={{ flex: 2, marginHorizontal: 10 }}>
                          <Text style={{ fontWeight: "bold" }}>{formData.trading_location}</Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <View style={{ flex: 1, marginHorizontal: 10 }}>
                          <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Description</Text>
                        </View>
                        <View style={{ flex: 2, marginHorizontal: 10 }}>
                          <Text style={{ fontWeight: "bold" }}>{formData.trading_desc}</Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <View style={{ flex: 1, marginHorizontal: 10 }}>
                          <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Stock</Text>
                        </View>
                        <View style={{ flex: 2, marginHorizontal: 10 }}>
                          <Text style={{ fontWeight: "bold" }}>{formData.trading_qty} {formData.trading_uom}</Text>
                        </View>
                      </View>

                      { formData.trading_price &&
                        <View style={{ flexDirection: "row", marginVertical: 10 }}>
                          <View style={{ flex: 1, marginHorizontal: 10 }}>
                            <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Price</Text>
                          </View>
                          <View style={{ flex: 2, marginHorizontal: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>₱ {formData.trading_price}</Text>
                          </View>
                        </View>
                      }
                    </ScrollView>
                  </View>

                  <View style={{ flex: 2, padding: 5, }}>
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                      <View style={{ flex: 1, marginHorizontal: 10 }}>
                        <Text style={{ fontWeight: "bold" }}>Safety Tips:</Text>
                        <Text style={{ marginTop: 10, }}>Information in the app is provided by users. Please do not transfer or pay cash/money in advance. Verify the user in person and make any cash transaction.</Text>
                      </View>
                    </View>
                  </View>

                  <View style={{ flex: 2, padding: 5, }}>
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                      <View style={{ flex: 1, alignItems: "center" }}>
                        <Image source={{ uri: ConfigConnection.image + sellerData.user_pic, cache: 'reload' }} style={{ height: 50, width: 50, borderRadius: 25 }} />
                        <Text style={{ fontWeight: "bold" }}>{sellerData.user_fname}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={{ flex: 1, marginHorizontal: 70 }}>
                    { transactionData.trans_status == "deliver" &&
                        <View style={{ flexDirection: "row" }}>
                          <Button mode="contained" buttonColor="#FF0000" contentStyle={{ height: 40 }} style={styles.formButton} onPress={() => navigation.navigate('ProfileReceiveReport', { data: userData, smode: searchMode, sid: searchId, tdata: transactionData, sdata: sellerData })}>
                            Report
                          </Button>
                          <Button mode="contained" buttonColor={ConfigColors.GREENCOLOR} contentStyle={{ height: 40 }} style={styles.formButton} onPress={OnPressReceived}>
                            Received
                          </Button>
                        </View>
                        
                    }

                    { transactionData.trans_status == "complete" &&
                        <Button mode="contained" buttonColor={ConfigColors.GREENCOLOR} contentStyle={{ height: 40 }} style={styles.formButton}>
                          Transaction Fulfilled
                        </Button>
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