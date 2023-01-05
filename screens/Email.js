import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, ImageBackground, Text, TouchableWithoutFeedback, View, Platform, Keyboard, Pressable, ScrollView, Dimensions } from 'react-native';
import { Surface, TextInput, Button } from 'react-native-paper';
import validator from 'validator';

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function Email({ navigation, route }) {
  // Variable
  // ===========================
  const [textUsername, setTextUsername] = useState("");
  const [textPassword, setTextPassword] = useState("");

  const [passwordSecure, setPasswordSecure] = useState(true);
  const [formSubmit, setFormSubmit] = useState(false);


  // Function
  // ===========================
  // Login
  const onPressLogin = () => {
    setFormSubmit(true);

    // send data
    const urlReq = ConfigConnection.server + "api.php?mode=1";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          dUser: textUsername,
          dPass: textPassword,
        }),
      })
      .then((res) => { return res.json(); })
      .then((dat) => {
        if (dat.status == "ok")
        {
          navigation.navigate('Dashboard', { data: dat.data });
        }
        else
        {
          ConfigAlert(dat.title, dat.message);
        }

        setFormSubmit(false);
      })
  }
  

  // Output
  // ===========================
  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('../assets/others/agri-bg2.png')} resizeMode="cover" style={styles.mainContainerImage}>
          
          <View style={styles.mainContentBody}>
            <View style={styles.mainContentHeader}>
              <Image source={require('../assets/agri-logo.png')} style={{ height: 400, width: 400 }} />
            </View>
            
            <View style={styles.mainForm} >
              <Image source={require('../assets/others/email.png')} style={{ height: 300, width: 300 }} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center", color: "#eee", fontSize: 20, paddingHorizontal: 50, textAlign: "center" }}>
                The confirmation of your account will be sent through Email.
              </Text>

              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={{ alignSelf: "center", color: "#eee", marginTop: 30, }}>
                  Return to <Text style={{ fontWeight: "bold", color: "#FBFF07" }}>Login</Text>
                </Text>
              </Pressable>
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
    height: Dimensions.get("screen").height,
  },

  mainContentHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  mainContentBody: {
    flex: 1,
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
    flex: 2,
    alignItems: "center",
  },

  // Link
  textFormLink: {
    color: "#f5f5f5",
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
    color: "#f5f5f5",
    fontSize: 58,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: -40,
    marginLeft: 38,
  },

  textHeader2: {
    color: "#f5f5f5",
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 38,
  },

  // Input
  formInput: {
    backgroundColor: "transparent",
    color: "#fefefe"
  },

  formButton: {
    color: "#fff",
    textTransform: "uppercase",
    marginTop: 10,
    borderRadius: 1,
  }
});