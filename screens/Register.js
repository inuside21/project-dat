import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, ImageBackground, Text, TouchableWithoutFeedback, View, Platform, Keyboard, Pressable, ScrollView, Dimensions } from 'react-native';
import { Surface, TextInput, Button, Checkbox  } from 'react-native-paper';
import validator from 'validator';
import * as ImagePicker from 'expo-image-picker';

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function Register({ navigation, route }) {
  // Variable
  // ===========================
  const [textFullName, setTextFullName] = useState("");
  const [textContact, setTextContact] = useState("");
  const [textAddress, setTextAddress] = useState("");

  const [textUsername, setTextUsername] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [textPassword2, setTextPassword2] = useState("");

  const [passwordSecure, setPasswordSecure] = useState(true);
  const [passwordSecure2, setPasswordSecure2] = useState(true);

  const [images, setImages] = useState("");
  const [checked, setChecked] = React.useState(false);
  const [formSubmitCheck, setFormSubmitCheck] = useState(false);
  

  // form
  const [formSubmit, setFormSubmit] = useState(false);


  // Function
  // ===========================

  const onPressAddImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      setImages(result.assetId);
    }
  };
  
  // Register
  const onPressRegister = () => {
    // check name
    if (textFullName == "")
    {
      ConfigAlert("Register Error", "Please check your full name");
      return;
    }

    // check num
    if (textContact == "" || validator.contains(textContact, ' ') || !validator.isNumeric(textContact))
    {
      ConfigAlert("Register Error", "Please check your contact number");
      return;
    }

    // check name
    if (textAddress == "")
    {
      ConfigAlert("Register Error", "Please check your address");
      return;
    }
    
    // check email
    if (textUsername == "" || validator.contains(textUsername, ' ') || !validator.isEmail(textUsername))
    {
      ConfigAlert("Register Error", "Please check your email address");
      return;
    }

    // check password
    if (textPassword == "" || validator.contains(textPassword, ' '))
    {
      ConfigAlert("Register Error", "Please check your password");
      return;
    }

    // check repassword
    if (textPassword != textPassword2)
    {
      ConfigAlert("Register Error", "Mismatched password. Please check your password");
      return;
    }

    // set
    setFormSubmit(true);

    // send data
    const urlReq = ConfigConnection.server + "api.php?mode=2";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          dUser: textUsername,
          dPass: textPassword,
          dFname: textFullName,
          dContact: textContact,
          dAddress: textAddress,
        }),
      })
      .then((res) => { return res.json(); })
      .then((dat) => {
        if (dat.status == "ok")
        {
          ConfigAlert(dat.title, dat.message);
          navigation.navigate('Email');
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
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground source={require('../assets/others/bg.png')} resizeMode="cover" style={styles.mainContainerImage}>
            
            <View style={styles.mainContentBody}>
              <View style={styles.mainFormLink}>
                <Text style={styles.textFormLink}>REGISTRATION</Text>
              </View>

              <View style={styles.mainForm} >

                <TextInput 
                  placeholder="Full Name" 
                  mode="flat"
                underlineColor="#fefefe"
                activeUnderlineColor="#fefefe"
                autoCapitalize="none"
                maxLength={50}
                textColor="#fff"
                placeholderTextColor="#fff"
                  style={styles.formInput}
                  onChangeText={t => setTextFullName(t)}  
                />

                <TextInput 
                  placeholder="Contact" 
                  mode="flat"
                underlineColor="#fefefe"
                activeUnderlineColor="#fefefe"
                autoCapitalize="none"
                maxLength={50}
                textColor="#fff"
                placeholderTextColor="#fff"
                  style={styles.formInput}
                  onChangeText={t => setTextContact(t)}  
                />

                <TextInput 
                  placeholder="Address" 
                  mode="flat"
                underlineColor="#fefefe"
                activeUnderlineColor="#fefefe"
                autoCapitalize="none"
                maxLength={50}
                textColor="#fff"
                placeholderTextColor="#fff"
                  style={styles.formInput}
                  onChangeText={t => setTextAddress(t)}  
                />


                <TextInput 
                  placeholder="Email" 
                  mode="flat"
                underlineColor="#fefefe"
                activeUnderlineColor="#fefefe"
                autoCapitalize="none"
                maxLength={50}
                textColor="#fff"
                placeholderTextColor="#fff"
                  style={{ ...styles.formInput, marginTop: 20, }}
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

                <TextInput 
                  placeholder="Re-Type Password" 
                  mode="flat"
                underlineColor="#fefefe"
                activeUnderlineColor="#fefefe"
                autoCapitalize="none"
                maxLength={50}
                textColor="#fff"
                placeholderTextColor="#fff"
                  secureTextEntry={passwordSecure2} 
                  right={<TextInput.Icon icon="eye" iconColor="#fff" onPress={() => setPasswordSecure2(!passwordSecure2) } />} 
                  style={styles.formInput}
                  onChangeText={t => setTextPassword2(t)}  
                />

                  <Text style={{ color: "#fff", marginTop: 20, justifyContent: "center",  }}>
                    To become a Verified member, upload a copy of your identity document
                  </Text>
                  <Text style={{ color: "#fff"}}>
                    (Government-Issued ID Card, Driver's License, etc.) and click to upload
                  </Text>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}>
                  <Button mode="contained" buttonColor="#fff" textColor='#000' contentStyle={{ height: 40 }} style={{ ...styles.formButton, marginRight: 10}} onPress={onPressAddImage}>
                    Upload Image
                  </Button>
                  <Text style={{ color: "#fff"}}>
                    {images}.PNG
                  </Text>
                </View>
                
                <View style={{ marginTop: 30 }}>
                  <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Checkbox.Item  status={formSubmitCheck ? "checked" : "unchecked"} position="leading" color='#fff' style={{ paddingLeft: 0, paddingRight: 0 }} onPress={() => setFormSubmitCheck(!formSubmitCheck)}/>
                    <Text style={{ color: "#fff", alignSelf: "center" }}>
                      I agree to the <Text style={{ color: "#FBFF07" }} onPress={() => navigation.navigate("Terms")}>Terms & Conditions</Text> and <Text style={{ color: "#FBFF07" }} onPress={() => navigation.navigate("Policy")}>Privacy Policy</Text>
                    </Text>
                    
                  </View>
                  
                  { formSubmitCheck &&
                    <Button mode="contained" buttonColor="#fff" textColor='#000' contentStyle={{ height: 40 }} style={styles.formButton} onPress={onPressRegister} loading={formSubmit}>
                      Register
                    </Button>
                  }
                  
                </View>
                
                
              </View>
            </View>
            
          </ImageBackground>
        </TouchableWithoutFeedback>
      </ScrollView>
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
    justifyContent: "flex-start",
  },

  mainContentBody: {
    flex: 1,
  },

  // Box
  mainFormLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 15,
    paddingHorizontal: 20,
  },

  mainForm: {
    marginTop: 50,
    marginHorizontal: 15,
    paddingHorizontal: 20
  },

  // Link
  textFormLink: {
    color: "#fff",
    fontSize: 36,
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
    backgroundColor: "transparent",
    color: "#fff"
  },

  formButton: {
    textTransform: "uppercase",
    borderRadius: 1,
  }
});