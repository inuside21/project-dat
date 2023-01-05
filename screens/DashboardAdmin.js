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
export default function DashboardAdmin({ navigation, route }) {
  // Variable
  // ===========================
  const userData = route.params.data;


  // Function
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
                  <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>Admin Dashboard</Text>
                </View>

                <Surface elevation={2} style={{ marginVertical: 10, flex: 10, padding: 10, justifyContent: "flex-start" }}>
                  <View style={{ justifyContent: "space-between", flexDirection: "row", marginVertical: 10 }}>
                    <View style={{ height: 180, width: 150, alignItems: "center", backgroundColor: ConfigColors.GREENCOLOR }}>
                      <Pressable onPress={() => navigation.navigate('DashboardAdminUser', { data: userData })}>
                        <Image source={require('../assets/others/dashboard-adminusr.png')} style={{ width: 120, height: 120 }} />
                        <Text style={{ textAlign: "center", color: "#fff", marginTop: 10, fontWeight: "bold", fontSize: 21 }}>List of Users</Text>
                      </Pressable>
                    </View>

                    <View style={{ height: 180, width: 150, alignItems: "center", backgroundColor: ConfigColors.GREENCOLOR }}>
                      <Pressable onPress={() => navigation.navigate('DashboardAdminReport', { data: userData })}>
                        <Image source={require('../assets/others/dashboard-adminrep.png')} style={{ width: 120, height: 120 }} />
                        <Text style={{ textAlign: "center", color: "#fff", marginTop: 10, fontWeight: "bold", fontSize: 21 }}>Reports</Text>
                      </Pressable>
                    </View>
                  </View>

                  <View style={{ justifyContent: "space-between", flexDirection: "row", marginVertical: 10 }}>
                    <View style={{ height: 180, width: 150, alignItems: "center", backgroundColor: ConfigColors.GREENCOLOR }}>
                      <Pressable onPress={() => navigation.navigate('Login')}>
                        <Image source={require('../assets/others/dashboard-adminlgo.png')} style={{ width: 120, height: 120 }} />
                        <Text style={{ textAlign: "center", color: "#fff", marginTop: 10, fontWeight: "bold", fontSize: 21 }}>Log-out</Text>
                      </Pressable>
                    </View>
                  </View>
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
  },

  formButton: {
    textTransform: "uppercase",
    marginTop: 10,
    borderRadius: 12,
  }
});