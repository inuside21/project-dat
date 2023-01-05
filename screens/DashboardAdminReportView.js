import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, ImageBackground, Text, TouchableWithoutFeedback, View, Platform, Keyboard, Pressable, ScrollView, Dimensions } from 'react-native';
import { Surface, TextInput, Button } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import validator from 'validator';

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function DashboardAdminReportView({ navigation, route }) {
  // Variable
  // ===========================
  const userData = route.params.data;
  const transId = route.params.tid;

  const [isFetching, setIsFetching] = useState(false);
  const [resultData, setResultData] = useState({});
  const [resultList, setResultList] = useState([]);
  const [resultMode, setResultMode] = useState("");

  // form
  const [formData, setFormData] = useState({});
  const [formType, setFormType] = useState("");
  const [formUser, setFormUser] = useState({});
  const [formImage, setFormImage] = useState([]);

  // report
  const [formImage2, setFormImage2] = useState([]);


  // Start
  // --------------------------------------
  {
    // Load
    useEffect(() => {
      const start = navigation.addListener('focus', () => {
        LoadDataList();
      });

      return start;
    }, [navigation])
  }


  // Function
  // ===========================
  function LoadDataList()
  {
    setIsFetching(true);

    const urlReq = ConfigConnection.server + "api.php?mode=transreport";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        tid: transId,
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        
        setResultData(dat.data);
        setFormImage2(dat.data.timg);
      }

      setIsFetching(false);
    })
  }

  
  // Event
  // ===========================
  

  // Component
  // ===========================


  // Output
  // ===========================
  return (
    <View style={styles.mainContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground source={require('../assets/others/bg.png')} resizeMode="cover" style={styles.mainContainerImage}>
            
            <View style={styles.mainContentBody}>
              { /* Content */ }
              <View style={styles.mainForm} >

                <View style={{ flex: 1, flexDirection: "row", justifyContent:"center", paddingTop: 25, marginHorizontal: 10, }}>
                  <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>Account Reported</Text>
                </View>

                <Surface elevation={2} style={{ marginVertical: 10, flex: 10, justifyContent: "flex-start" }}>
                  <ScrollView style={{ flex: 1 }}> 

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", marginVertical: 10, marginHorizontal: 10 }}>
                      <Pressable onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/others/icon_back.png')} style={{ height: 20, width: 20 }} />
                      </Pressable>
                    </View>
                    
                    <Text style={{ marginVertical: 10, marginHorizontal: 15 }}>Uploaded Images</Text>
                      <View style={{ height: 100, flexDirection: "row", justifyContent: "flex-start", backgroundColor: "#D9D9D9", borderRadius: 5, marginHorizontal: 15, paddingTop: 15, }}>
                        <ScrollView horizontal={true} invertStickyHeaders={true} showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                          { 
                            /* Image */
                            formImage2.map(r => {
                              return (
                                <View style={{ width: 76, height: 76, marginHorizontal: 5 }}>
                                  <Pressable>
                                    <Image source={{ uri: ConfigConnection.image + r.trans_report_img }} style={{ width: "100%", height: "100%" }} />
                                  </Pressable>
                                </View>
                              )
                            })
                          }
                        </ScrollView>
                      </View>

                      <TextInput 
                        placeholder="" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        maxLength={50}
                        numberOfLines={10}
                        multiline={true}
                        editable={false}
                        style={styles.formInput}
                        value={resultData.trans_report_msg}
                      />

                  </ScrollView>
                </Surface>
                

                <View style={{ flex: 2, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                  <View style={{ flex: 1, alignItems: "center" }}>
                    
                  </View>

                  <View style={{ flex: 1, alignItems: "center" }}>
                    
                  </View>
                </View>

              </View>

              { /* Footer */ }
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
    flex: 1,
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
    marginHorizontal: 15,
    marginTop: 10,
  },

  formButton: {
    textTransform: "uppercase",
    marginTop: 10,
    borderRadius: 12,
  }
});