import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, ImageBackground, TouchableWithoutFeedback, View, Platform, Keyboard, Pressable, ScrollView, Dimensions } from 'react-native';
import { Surface, Text, TextInput, Button } from 'react-native-paper';
import validator from 'validator';

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function Login({ navigation, route }) {
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
          if (dat.data.user_admin == "1")
          {
            navigation.navigate('DashboardAdmin', { data: dat.data });
          }
          else
          {
            navigation.navigate('Dashboard', { data: dat.data });
          }
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
              <TextInput 
                placeholder="Email" 
                mode="flat"
                underlineColor="#fefefe"
                activeUnderlineColor="#fefefe"
                autoCapitalize="none"
                maxLength={50}
                textColor="#fff"
                placeholderTextColor="#fff"
                style={styles.formInput}
                onChangeText={t => setTextUsername(t)}  
              />

              <TextInput 
                placeholder="Password" 
                mode="flat"
                underlineColor="#fefefe"
                activeUnderlineColor="#fefefe"
                autoCapitalize="none"
                maxLength={50}
                textColor="#fff"
                placeholderTextColor="#fff"
                secureTextEntry={passwordSecure} 
                right={<TextInput.Icon icon="eye" iconColor="#fff" onPress={() => setPasswordSecure(!passwordSecure) } />} 
                style={styles.formInput}
                onChangeText={t => setTextPassword(t)}  
              />

              <Button mode="contained" buttonColor="#fff" textColor='#000' contentStyle={{ height: 40 }} style={styles.formButton} onPress={onPressLogin} loading={formSubmit}>
                Sign In
              </Button>

              
                  <Pressable onPress={() => navigation.navigate("Reset")}><Text style={{ alignSelf: "flex-end", color: "#f5f5f5", marginTop: 15, }}>Forgot Password?</Text></Pressable>
              
            </View>

            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={{ alignSelf: "center", color: "#eee", marginTop: 30, }}>
                Don't have an account? <Text style={{ fontWeight: "bold", color: "#FBFF07" }}>REGISTER</Text>
              </Text>
            </Pressable>
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
    flexDirection: "row",
    justifyContent: "space-between",
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
  },

  formButton: {
    color: "#fff",
    textTransform: "uppercase",
    marginTop: 10,
    borderRadius: 1,
  }
});