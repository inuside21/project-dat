import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, ImageBackground, Text, TouchableWithoutFeedback, View, Platform, Keyboard, Pressable, ScrollView, FlatList, Dimensions } from 'react-native';
import { Surface, TextInput, Button } from 'react-native-paper';
import validator from 'validator';

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function PestViewData({ navigation, route }) {
  // Variable
  // ===========================
  const userData = route.params.data;
  const searchData = route.params.sdata;

  const [textSearch, setTextSearch] = useState(searchData.pest_name);


  // Function
  // ===========================
  // Start
  {
    // Load
    useEffect(() => {
    }, [navigation])
  }

  // Search Text
  const SearchItem = () => {
    navigation.navigate({name: "PestView", params: { stxt: textSearch }, merge: true});
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
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>Pest Identification</Text>
                  </View>

                  <View style={{ flex: 1, marginTop: -10, marginHorizontal: 15, justifyContent: "center", alignItems: "center", backgroundColor: ConfigColors.GREENCOLOR, borderRadius: 12 }}>
                    <View style={{ width: 270 }}>
                      <TextInput 
                        placeholder="" 
                        mode="flat" 
                        activeOutlineColor={ConfigColors.GREENCOLOR} 
                        outlineColor={ConfigColors.GREENCOLOR} 
                        textColor="#fff"
                        underlineColor="#fff"
                        autoCapitalize="none"
                        maxLength={50}
                        style={styles.formInput}
                        right={<TextInput.Icon icon="magnify" iconColor="#fff" onPress={() => SearchItem()} />} 
                        onChangeText={t => setTextSearch(t)}  
                        onSubmitEditing={SearchItem}
                        value={textSearch}
                        dense
                      />
                    </View>
                  </View>

                  <View style={{ flex: 3, alignItems: "center" }}>
                    <View style={{ backgroundColor: "#24AC64", width: 87, height: 100, marginVertical: 10, marginHorizontal: 15 }}>
                      <Image source={{ uri: ConfigConnection.image + searchData.pest_img }} style={{ height: "80%", width: "100%" }} />
                      <Text style={{ color: "#f5f5f5", fontSize: 9, fontWeight: "bold", alignSelf: "center", paddingVertical: 3 }}>{ searchData.pest_name }</Text>
                    </View>
                  </View>

                  <View style={{ flex: 7, alignItems: "center" }}>
                    <View style={{ backgroundColor: "#24AC64", width: "90%", height: "100%", marginHorizontal: 15, borderRadius: 12 }}>
                      <Text style={{ color: "#f5f5f5", fontSize: 16, fontWeight: "bold", alignSelf: "center", textAlign: 'justify', padding: 20 }}>{ searchData.pest_desc }</Text>
                    </View>
                  </View>

                  <View style={{ flex: 3, flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flex: 1, alignItems: "center", marginVertical: 10, marginHorizontal: 15 }}>
                      <Pressable onPress={() => navigation.navigate('PestViewDataPesticide', { data: userData, sdata: searchData })}>
                        <Image source={require('../assets/others/icon_pesticide.png')} style={{ height: 50, width: 50 }} />
                        <Text style={{ color: ConfigColors.GREENCOLOR, fontSize: 9, fontWeight: "bold", alignSelf: "center", paddingVertical: 3 }}>Pesticides</Text>
                      </Pressable>
                    </View>

                    <View style={{ flex: 1, alignItems: "center", marginVertical: 10, marginHorizontal: 15 }}>
                      <Pressable onPress={() => navigation.navigate('PestViewDataRef', { data: userData, sdata: searchData })}>
                        <Image source={require('../assets/others/icon_info.png')} style={{ height: 50, width: 50 }} />
                        <Text style={{ color: ConfigColors.GREENCOLOR, fontSize: 9, fontWeight: "bold", alignSelf: "center", paddingVertical: 3 }}>References</Text>
                      </Pressable>
                    </View>
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
    backgroundColor: ConfigColors.GREENCOLOR,
  },

  formButton: {
    textTransform: "uppercase",
    marginTop: 10,
    borderRadius: 12,
  }
});