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
export default function TermsView({ navigation, route }) {
  // Variable
  // ===========================
  const [textUsername, setTextUsername] = useState("");
  const [textPassword, setTextPassword] = useState("");

  const [passwordSecure, setPasswordSecure] = useState(true);
  const [formSubmit, setFormSubmit] = useState(false);


  // Function
  // ===========================
  

  // Output
  // ===========================
  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('../assets/others/agri-bg2.png')} resizeMode="cover" style={styles.mainContainerImage}>
          
          <View style={styles.mainContentBody}>
            <Surface elevation={2} style={{ width: "90%", height: "90%", padding: 12 }}>
              <ScrollView>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 12 }}>
                  Terms and Conditions
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Welcome to Dev-Ag; an application intended for farmers. 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  This application offers different features that can help users solve their daily agricultural problems and in the long term.
                </Text>
                <Text style={{ fontSize: 16,  marginVertical: 12 }}> 
                  Services have their conditions as expected; this includes the gathering of your personal information and access to files over your phone. 
                </Text>
                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  These data are promised not to be shared, to stay confidential, and to be used only beyond the application process.
                </Text>
                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  All events after transactions, such as misunderstandings and other physical interactions, are not covered by the app. However, admins will help users proceed with a report and inform the reported user that there is a concern pinned to them. 
                </Text>
                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  This is to serve as a confirmation of your agreement to be bound by the Terms and Conditions.
                </Text>
              </ScrollView>
            </Surface>
            
            
            
            
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
    alignItems: "center",
    justifyContent: "center"
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
    color: "#fefefe"
  },

  formButton: {
    color: "#fff",
    textTransform: "uppercase",
    marginTop: 10,
    borderRadius: 1,
  }
});