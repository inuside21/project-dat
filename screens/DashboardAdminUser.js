import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, ImageBackground, Text, TouchableWithoutFeedback, View, Platform, Keyboard, Pressable, ScrollView, Dimensions } from 'react-native';
import { Surface, TextInput, Button } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import validator from 'validator';

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function DashboardAdminUser({ navigation, route }) {
  // Variable
  // ===========================
  const userData = route.params.data;

  const [isFetching, setIsFetching] = useState(false);
  const [resultData, setResultData] = useState({});
  const [resultList, setResultList] = useState([]);
  const [resultMode, setResultMode] = useState("");


  // Start
  // --------------------------------------
  {
    // Load
    useEffect(() => {
      const start = navigation.addListener('focus', () => {
        LoadDataList();
      });

      return start;
    }, [navigation])
  }


  // Function
  // ===========================
  function LoadDataList()
  {
    setIsFetching(true);

    const urlReq = ConfigConnection.server + "api.php?mode=userlist";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        setResultList(dat.data);
      }

      setIsFetching(false);
    })
  }

  
  // Event
  // ===========================
  const OnPressHold = (uid) =>
  {
    setIsFetching(true);

    const urlReq = ConfigConnection.server + "api.php?mode=userhold";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        uid: uid,
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        ConfigAlert(dat.title, dat.message);
        setResultList(dat.data);
      }

      setIsFetching(false);
    })
  }

  const OnPressUnhold = (uid) =>
  {
    setIsFetching(true);

    const urlReq = ConfigConnection.server + "api.php?mode=userunhold";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        uid: uid,
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        ConfigAlert(dat.title, dat.message);
        setResultList(dat.data);
      }

      setIsFetching(false);
    })
  }

  const OnPressDelete = (uid) =>
  {
    setIsFetching(true);

    const urlReq = ConfigConnection.server + "api.php?mode=userdelete";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        uid: uid,
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        ConfigAlert(dat.title, dat.message);
        setResultList(dat.data);
      }

      setIsFetching(false);
    })
  }
  

  // Component
  // ===========================
  const Component1 = ({e}) => {
    return (
      <View style={{ backgroundColor: ConfigColors.GREENCOLOR, width: "100%", height: 60, marginBottom: 5, flexDirection: "row", padding: 10, alignItems: "center" }}>
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 11, flex: 1 }}>{e.user_fname}</Text>
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 11, flex: 1 }}>{e.user_uname}</Text>
        <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 11, flex: 1 }}>{e.user_pword}</Text>
          <View style={{ flex: 1, alignItems: "center" }}>
            { e.user_active == "1" ?
                <View style={{ backgroundColor: "#BCF028", justifyContent: "center", alignItems: "center", borderRadius: 12, width: "80%", height: 15 }}>
                  <Pressable onPress={() => OnPressHold(e.id)}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 8 }}>Hold</Text>
                  </Pressable>
                </View>
              :
                <View style={{ backgroundColor: "#BCF028", justifyContent: "center", alignItems: "center", borderRadius: 12, width: "80%", height: 15 }}>
                  <Pressable onPress={() => OnPressUnhold(e.id)}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 8 }}>Unhold</Text>
                  </Pressable>
                </View>
            }
            
            <View style={{ backgroundColor: "#B94326", justifyContent: "center", alignItems: "center", borderRadius: 12, width: "80%", height: 15, marginTop: 5 }}>
              <Pressable onPress={() => OnPressDelete(e.id)}>
                <Text style={{ textAlign: "center", color: "#fff", fontSize: 8 }}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
        
      </View>
    )
  }

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
                  <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>List of Users</Text>
                </View>

                <Surface elevation={2} style={{ marginVertical: 10, flex: 10, justifyContent: "flex-start" }}>
                  <View style={{ width: "100%", height: 50, flexDirection: "row", backgroundColor: "#46B944", padding: 10, alignItems: "center" }}>
                    <Text style={{ textAlign: "center", color: "#fff", marginTop: 10, fontWeight: "bold", fontSize: 16, flex: 1 }}>Name</Text>
                    <Text style={{ textAlign: "center", color: "#fff", marginTop: 10, fontWeight: "bold", fontSize: 16, flex: 1 }}>Username</Text>
                    <Text style={{ textAlign: "center", color: "#fff", marginTop: 10, fontWeight: "bold", fontSize: 16, flex: 1 }}>Password</Text>
                  </View>

                  <ScrollView style={{ flex: 1 }}> 
                    { /* List */
                      resultList.length > 0 ?
                        resultList.map((e) => {
                          return (
                            <Component1 e={e} />
                          );
                        })
                      :
                        isFetching ?
                            <Text style={{ fontSize: 14, alignSelf: "center", marginTop: 20 }}>Loading...</Text>
                          :
                            <Text style={{ fontSize: 14, alignSelf: "center", marginTop: 20 }}>Nothing to display</Text>
                    }

                  </ScrollView>
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