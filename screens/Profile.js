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
export default function Profile({ navigation, route }) {
  // Variable
  // ===========================
  const [userData, setUserData] = useState(route.params.data);

  // image
  const [formImage, setFormImage] = useState({});

  // form
  const [formSubmit, setFormSubmit] = useState(false);
  

  // Function
  // ===========================
  // Start
  {
    // Load
    useEffect(() => {
      //LoadSearchData();
      
    }, [navigation])
  }

  function LoadSearchData() {
    setFormSubmit(true);

    // send data
    const urlReq = ConfigConnection.server + "api.php?mode=1";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          dUser: userData.user_uname,
          dPass: userData.user_pword,
        }),
      })
      .then((res) => { return res.json(); })
      .then((dat) => {
        if (dat.status == "ok")
        {
          setUserData(dat.data)
        }

        setFormSubmit(false);
      })
  }
  
  // Submit
  const onPressSubmit = () => {
    // check
    if (formSubmit)
    {
      return;
    }

    // set
    setFormSubmit(true);

    // send data
    {
      const urlReq = ConfigConnection.server + "api.php?mode=4";
      fetch(urlReq, {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: JSON.stringify({
          uid: userData.id,
          formImage: formImage?.base64 ? formImage.base64 : "",
          formUname: userData.user_uname,
          formPword: userData.user_pword,
          formFname: userData.user_fname,
          formCname: userData.user_cname,
          formGender: userData.user_gender,
          formContact: userData.user_contact,
          formAddress: userData.user_address,
        }),
      })
      .then((res) => { return res.json(); })
      .then((dat) => {
        LoadSearchData();
        /*
        if (dat.status == "ok")
        {
          ConfigAlert(dat.title, dat.message);
        }
        else
        {
          ConfigAlert(dat.title, dat.message);
        }
        */

        setFormSubmit(false);
      })
    }
  }

  const onPressAddImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      setFormImage(result);
    }
  };

  const onPressRemoveImage = () => {
    setFormImage({});
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
                    <Pressable onPress={() => navigation.navigate('Dashboard', { data: userData })}>
                      <Image source={require('../assets/others/icon_back.png')} style={{ height: 20, width: 20 }} />
                    </Pressable>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>Profile</Text>
                  </View>

                  <View style={{ flex: 2, justifyContent: "center", backgroundColor: "#D9D9D9", borderRadius: 5, marginHorizontal: 15, }}>
                      {
                        Object.keys(formImage).length > 0 ?
                          <View style={{ width: 76, height: 76, alignSelf: "center" }}>
                            <Pressable onPress={() => onPressRemoveImage()}>
                              <Image source={{ uri: formImage.uri }} style={{ width: "100%", height: "100%", borderRadius: 38 }} />
                            </Pressable>
                          </View>
                        :
                          <View style={{ width: 76, height: 76, alignSelf: "center" }}>
                            <Pressable onPress={() => onPressAddImage()}>
                              <Image source={{ uri: ConfigConnection.image + userData.user_pic }} style={{ width: "100%", height: "100%", borderRadius: 38 }} />
                            </Pressable>
                          </View>
                      }
                  </View>

                  <View style={{ flex: 10, padding: 5, }}>
                    <ScrollView>
                      <TextInput 
                        placeholder="Name" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        maxLength={50}
                        style={styles.formInput}
                        onChangeText={t => setUserData(val => ({...val, user_fname: t }))}  
                        value={userData.user_fname}
                      />

                      <TextInput 
                        placeholder="Username" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        maxLength={50}
                        style={styles.formInput}
                        onChangeText={t => setUserData(val => ({...val, user_cname: t }))}   
                        value={userData.user_cname}
                      />

                      <TextInput 
                        placeholder="Gender" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        maxLength={500}
                        style={styles.formInput}
                        onChangeText={t => setUserData(val => ({...val, user_gender: t }))}   
                        value={userData.user_gender}
                      />

                      <TextInput 
                        placeholder="Phone" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        maxLength={500}
                        style={styles.formInput}
                        onChangeText={t => setUserData(val => ({...val, user_contact: t }))}  
                        value={userData.user_contact}
                      />

                      <TextInput 
                        placeholder="Email" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        maxLength={500}
                        style={{ ...styles.formInput, marginTop: 20 }}
                        onChangeText={t => setUserData(val => ({...val, user_uname: t }))}  
                        value={userData.user_uname}
                      />

                      <TextInput 
                        placeholder="Change Password" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        maxLength={500}
                        style={styles.formInput}
                        onChangeText={t => setUserData(val => ({...val, user_pword: t }))}  
                        value={userData.user_pword}
                      />

                      <TextInput 
                        placeholder="My Items" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        editable={false}
                        maxLength={50}
                        right={<TextInput.Icon icon="chevron-right" color="#fff" onPress={() => navigation.navigate('ProfileReceive', { data: userData })} />} 
                        style={{ ...styles.formInput, marginTop: 20 }}
                      />

                      <TextInput 
                        placeholder="Posted Products" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        editable={false}
                        maxLength={50}
                        right={<TextInput.Icon icon="chevron-right" color="#fff" onPress={() => navigation.navigate('ProfileProduct', { data: userData })} />} 
                        style={{ ...styles.formInput  }}
                      />

                      <TextInput 
                        placeholder="Posted Tools and Equipment" 
                        mode="outlined" 
                        activeOutlineColor={ConfigColors.MAINCOLOR} 
                        outlineColor="#ddd" 
                        autoCapitalize="none"
                        editable={false}
                        maxLength={50}
                        right={<TextInput.Icon icon="chevron-right" color="#fff" onPress={() => navigation.navigate('ProfileEquipment', { data: userData })} />} 
                        style={{ ...styles.formInput }}
                      />
                    </ScrollView>
                  </View>

                  <View style={{ flex: 1, marginHorizontal: 100 }}>
                    <Button mode="contained" buttonColor={ConfigColors.GREENCOLOR} contentStyle={{ height: 40 }} style={styles.formButton} onPress={onPressSubmit} loading={formSubmit}>
                      Update Profile
                    </Button>
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