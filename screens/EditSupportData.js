import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, ImageBackground, Text, TouchableWithoutFeedback, View, Platform, Keyboard, Pressable, ScrollView, Dimensions } from 'react-native';
import { Surface, TextInput, Button } from 'react-native-paper';
import validator from 'validator';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function EditSupportData({ navigation, route }) {
  // Variable
  // ===========================
  const userData = route.params.data;

  // product link
  const productId = route.params.pid;

  const [isFetching, setIsFetching] = useState(true);

  // image
  const [formImage, setFormImage] = useState([]);

  // form
  const [selectMode, setSelectMode] = useState("");
  const [formCat, setFormCat] = useState("");
  const [formName, setFormName] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formDesc, setFormDesc] = useState("");

  const [formSubmit, setFormSubmit] = useState(false);
  

  // Function
  // ===========================
  // Start
  {
    // Load
    useEffect(() => {
      LoadProduct();
    }, [navigation])

    // select start
    useEffect(() => {
      if (selectMode != "")
      {
        navigation.navigate("SelectCategory", { sdata: selectMode, slink: "EditSupportData" })
        setSelectMode("")
      }
    }, [selectMode])

    // select finish
    useEffect(() => {
      if (route.params?.rSelect)
      {
        // cat
        if (route.params?.mSelect == "4")
        {
          setFormCat(route.params.rSelect.dName);
        }
      }
    }, [route.params?.rSelect])
  }

  // Load Product
  function LoadProduct()
  {
    setIsFetching(true);

    const urlReq = ConfigConnection.server + "api.php?mode=42";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        id: productId,
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        setFormCat(dat.data.info.trading_cat);
        setFormName(dat.data.info.trading_name);
        setFormLocation(dat.data.info.trading_location);
        setFormDesc(dat.data.info.trading_desc);

        Promise.all(dat.data.img.map(imgdata => {

          var newImg = {
            uri: ConfigConnection.image + imgdata.img_name,
            assetId: imgdata.id
          };

          setFormImage(formImage => [...formImage, newImg]);
          
        }))
      }

      setIsFetching(false);
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
      const urlReq = ConfigConnection.server + "api.php?mode=41";
      fetch(urlReq, {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: JSON.stringify({
          pid: productId,
          formCat: formCat,
          formName: formName,
          formLocation: formLocation,
          formDesc: formDesc,
          formImage: formImage
        }),
      })
      .then((res) => { return res.json(); })
      .then((dat) => {
        if (dat.status == "ok")
        {
          ConfigAlert(dat.title, dat.message);
          navigation.navigate('Dashboard', { data: userData, sdata: "Labor Support", smode: 43 })
        }
        else
        {
          ConfigAlert(dat.title, dat.message);
        }

        setFormSubmit(false);
      })
    }
  }

  const onPressAddImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      if (result?.selected) {
        result.selected.map(r => {
          setFormImage(formImage => [...formImage, r]);
        });
      }
      else {
        setFormImage(formImage => [...formImage, result]);
      }
    }
  };

  const onPressRemoveImage = (iid) => {
    setFormImage(formImage.filter(item => item.assetId !== iid));
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
                    <Pressable onPress={() => navigation.goBack()}>
                      <Image source={require('../assets/others/icon_back.png')} style={{ height: 20, width: 20 }} />
                    </Pressable>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>Edit Post</Text>
                  </View>

                  <View style={{ flex: 1, marginTop: -30, marginHorizontal: 15, justifyContent: "center" }}>
                    <Text>Upload Image</Text>
                  </View>

                  <View style={{ flex: 2, flexDirection: "row", justifyContent: "flex-start", backgroundColor: "#D9D9D9", borderRadius: 5, marginHorizontal: 15, paddingTop: 15, }}>
                    <ScrollView horizontal={true} invertStickyHeaders={true} showsHorizontalScrollIndicator={false}>
                      { 
                        /* Image */
                        formImage.map(r => {
                          return (
                            <View style={{ width: 76, height: 76, marginHorizontal: 5 }}>
                              <Pressable onPress={() => {}}>
                                <Image source={{ uri: r.uri }} style={{ width: "100%", height: "100%" }} />
                              </Pressable>
                            </View>
                          )
                        })
                      }
                    </ScrollView>
                  </View>

                  <View style={{ flex: 9, padding: 5, }}>
                    <TextInput 
                      placeholder="Category" 
                      mode="outlined" 
                      activeOutlineColor={ConfigColors.MAINCOLOR} 
                      outlineColor="#ddd" 
                      autoCapitalize="none"
                      editable={false}
                      maxLength={50}
                      value={formCat}
                      style={styles.formInput}
                    />

                    <TextInput 
                      placeholder="Name" 
                      mode="outlined" 
                      activeOutlineColor={ConfigColors.MAINCOLOR} 
                      outlineColor="#ddd" 
                      autoCapitalize="none"
                      maxLength={50}
                      style={styles.formInput}
                      value={formName}
                      onChangeText={t => setFormName(t)}  
                    />

                    <TextInput 
                      placeholder="Location" 
                      mode="outlined" 
                      activeOutlineColor={ConfigColors.MAINCOLOR} 
                      outlineColor="#ddd" 
                      autoCapitalize="none"
                      maxLength={50}
                      style={styles.formInput}
                      value={formLocation}
                      onChangeText={t => setFormLocation(t)}  
                    />

                    <TextInput 
                      placeholder="Description" 
                      mode="outlined" 
                      activeOutlineColor={ConfigColors.MAINCOLOR} 
                      outlineColor="#ddd" 
                      autoCapitalize="none"
                      maxLength={500}
                      multiline
                      numberOfLines={4}
                      style={styles.formInput}
                      value={formDesc}
                      onChangeText={t => setFormDesc(t)}  
                    />
                  </View>

                  <View style={{ flex: 2, marginHorizontal: 100 }}>
                    <Button mode="contained" buttonColor={ConfigColors.GREENCOLOR} contentStyle={{ height: 40 }} style={styles.formButton} onPress={onPressSubmit} loading={formSubmit}>
                      Remove
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