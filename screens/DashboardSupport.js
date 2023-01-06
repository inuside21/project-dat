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
export default function DashboardSupport({ navigation, route }) {
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

                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", paddingTop: 25, marginHorizontal: 10, }}>
                  <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/others/icon_back2.png')} style={{ height: 20, width: 20 }} />
                  </Pressable>
                  <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: -80, color: "#fff" }}>Labor Support</Text>
                  <Pressable onPress={() => navigation.navigate('SupportAdd', { data: userData })}>
                    <Image source={require('../assets/others/addnew2.png')} style={{ height: 20, width: 90, justifyContent: "flex-end" }} />
                  </Pressable>
                </View>

                <View style={{ flex: 5, justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Pressable onPress={() => navigation.navigate('ViewSupport', { data: userData, sdata: "Farm Driver", smode: 43 })}>
                      <Image source={require('../assets/others/dd10.png')} style={{ width: 120, height: 120, resizeMode: "contain" }} />
                    </Pressable>
                  </View>

                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Pressable onPress={() => navigation.navigate('ViewSupport', { data: userData, sdata: "Harvester", smode: 43 })}>
                      <Image source={require('../assets/others/dd11.png')} style={{ width: 120, height: 120, resizeMode: "contain" }} />
                    </Pressable>
                  </View>
                </View>

                <View style={{ flex: 5, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Pressable onPress={() => navigation.navigate('ViewSupport', { data: userData, sdata: "Pesticide Sprayer", smode: 43 })}>
                      <Image source={require('../assets/others/dd12.png')} style={{ width: 120, height: 120, resizeMode: "contain" }} />
                    </Pressable>
                  </View>

                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Pressable onPress={() => navigation.navigate('ViewSupport', { data: userData, sdata: "Agricultural Machinery Mechanics", smode: 43 })}>
                      <Image source={require('../assets/others/dd13.png')} style={{ width: 120, height: 120, resizeMode: "contain" }} />
                    </Pressable>
                  </View>
                </View>

                <View style={{ flex: 5, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                  
                </View>

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