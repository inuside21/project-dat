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
export default function Reset({ navigation, route }) {
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
    const urlReq = ConfigConnection.server + "api.php?mode=5";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          dUser: textUsername,
        }),
      })
      .then((res) => { return res.json(); })
      .then((dat) => {
        if (dat.status == "ok")
        {
          ConfigAlert(dat.title, dat.message);
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

            <View style={styles.mainFormLink}>
                <Text style={styles.textFormLink}>Please enter your email</Text>
              </View>
            
            <View style={styles.mainForm} >
              <TextInput 
                label="Email" 
                placeholder="Email" 
                mode="flat"
                underlineColor="#fefefe"
                activeUnderlineColor="#fefefe"
                autoCapitalize="none"
                maxLength={50}
                style={styles.formInput}
                theme={{ colors: { placeholder: "#fefefe", label: "#fefefe", text: "white" } }}
                onChangeText={t => setTextUsername(t)}  
              />

              <Button mode="contained" buttonColor="#fff" textColor='#000' contentStyle={{ height: 40 }} style={styles.formButton} onPress={onPressLogin} loading={formSubmit}>
                Done
              </Button>
              
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
    justifyContent: "center",
    alignItems: "center",
  },

  mainContentBody: {
    flex: 1,
  },

  // Box
  mainFormLink: {
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 15,
    paddingHorizontal: 20,
  },

  mainForm: {
    marginTop: 10,
    marginHorizontal: 15,
    paddingHorizontal: 20
  },

  // Link
  textFormLink: {
    color: "#f5f5f5",
    fontSize: 30,
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