import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { StyleSheet, ActivityIndicator, Image, ImageBackground, Text, TouchableWithoutFeedback, View, KeyboardAvoidingView, Platform, Keyboard, Pressable, ScrollView, FlatList, Dimensions } from 'react-native';
import { Surface, TextInput, Button, Checkbox, } from 'react-native-paper';
import validator from 'validator';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Config
import { ConfigConnection } from '../config/config';
import { ConfigAlert } from '../config/config';
import { ConfigColors, ConfigStyles } from '../config/style';


// Entry Point
// ===============================================
export default function Message({ navigation, route }) {
  // Variable
  // ===========================
  const userData = route.params.data;
  const txnId = route.params.txnid;
  
  const [isFetching, setIsFetching] = useState(true);

  // message
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState("");

  // product
  const [productData, setProductData] = useState({});
  const [productQty, setProductQty] = useState(0);
  const [formSubmit, setFormSubmit] = useState(false);

  // transaction
  const [transactionData, setTransactionData] = useState({});
  const [targetUser, setTargetUser] = useState({});

  // checkbox
  const [isCheck, setIsCheck] = useState(false);
  

  // Function
  // ===========================
  // Start
  {
    // Load
    useEffect(() => {
      const start = navigation.addListener('focus', () => {
        LoadMessage();
      });
  
      return start;
    }, [navigation])
  }

  // Load Message
  function LoadMessage()
  {
    setIsFetching(true);

    const urlReq = ConfigConnection.server + "api.php?mode=71";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        txnid: txnId,
      }),
    })
    .then((res) => { return res.json(); })
    .then((dat) => {
      if (dat.status == "ok")
      {
        setMessageList(dat.data.msg);
        setTransactionData(dat.data.trans);
        setProductData(dat.data.product);

        if (dat.data.trans.trans_seller == userData.id)
        {
          setTargetUser(dat.data.userbuyer);
        }
        else
        {
          setTargetUser(dat.data.userseller);
        }

        setIsFetching(false);
      }
    })
  }

  // Result List Item
  const ResultItem = ({ item, index }) => {

    if (userData.id == item.msg_from)
    {
      return (
        <View style={{ flexDirection: "row-reverse" }}>
          <View style={{ backgroundColor: "#F5F5F5", marginVertical: 5, padding: 15, borderRadius: 4 }}>
            <Text style={{ }}>{item.msg_body}</Text>
          </View>
        </View>
      )
    }
    else
    {
      return (
        <View style={{ flexDirection: "row" }}>
          <View style={{ backgroundColor: "#F5F5F5", marginVertical: 5, padding: 15, borderRadius: 4 }}>
            <Text style={{ }}>{item.msg_body}</Text>
          </View>
        </View>
      )
    }
  };

  // Send Message
  const onPressMessage = () => {
    const urlReq = ConfigConnection.server + "api.php?mode=72";
    fetch(urlReq, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        fUIdTo: transactionData.trans_seller != userData.id ? transactionData.trans_seller : transactionData.trans_buyer,
        fUIdFrom: userData.id,
        fMessage: messageNew,
        ftxn: transactionData.id,
      }),
    })
    .then((res) => { 
      setMessageNew("");
      LoadMessage();
    })
  }

  // Submit
  const onPressSubmit = () => {
    // check
    if (formSubmit)
    {
      return;
    }

    // checkbox
    if (!isCheck)
    {
      ConfigAlert("Error", "Please check the Terms and Condition");
      return;
    }

    // set
    setFormSubmit(true);

    // send data
    {
      const urlReq = ConfigConnection.server + "api.php?mode=120";
      fetch(urlReq, {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: JSON.stringify({
          uid: userData.id,
          pid: productData.id,
          tid: transactionData.id,
          pqty: productQty,
          smode: transactionData.trans_type,
        }),
      })
      .then((res) => { return res.json(); })
      .then((dat) => {
        if (dat.status == "ok")
        {
          ConfigAlert(dat.title, dat.message);
          setProductQty(0);
          //navigation.navigate('ViewProduct', { data: userData, sdata: formCat, smode: 23 })
          LoadMessage();
        }
        else
        {
          ConfigAlert(dat.title, dat.message);
        }

        setFormSubmit(false);
      })
    }
  }


  // Output
  // ===========================
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require('../assets/others/bgmain.png')} resizeMode="cover" style={styles.mainContainerImage}>        
        <View style={styles.mainContentBody}>

          { /* Content */ }
          <View style={styles.mainForm}>
            { !isFetching && 
              <KeyboardAwareScrollView>
                <Surface elevation={2} style={{ marginVertical: 10, height: 700, }}>
                  
                  <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", marginVertical: 10, marginHorizontal: 10 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                      <Image source={require('../assets/others/icon_back.png')} style={{ height: 20, width: 20 }} />
                    </Pressable>
                    <Image source={{ uri: ConfigConnection.image + targetUser.user_pic }} style={{ height: 20, width: 20, marginLeft: 10, borderRadius: 10 }} />
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>@{targetUser.user_fname}</Text>
                  </View>

                  { /* msg header */}
                  <View style={{ flex: 5, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5", borderRadius: 5, marginHorizontal: 15, padding: 5 }}>
                    <View style={{ flex: 1, }}>
                      <Image source={{ uri: ConfigConnection.image + productData.img.img_name }} style={{ width: 100, height: 100 }} />
                    </View>
                    <View style={{ flex: 2 }}>
                      <View style={{ flexDirection: "row", marginVertical: 5 }}>
                        <View style={{ flex: 2, marginHorizontal: 10 }}>
                          <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Name</Text>
                        </View>
                        <View style={{ flex: 2, marginHorizontal: 10 }}>
                          <Text style={{ fontWeight: "bold" }}>{productData.trading_name}</Text>
                        </View>
                      </View>
                    
                      <View style={{ flexDirection: "row", marginVertical: 5 }}>
                        <View style={{ flex: 2, marginHorizontal: 10 }}>
                          <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Location</Text>
                        </View>
                        <View style={{ flex: 2, marginHorizontal: 10 }}>
                          <Text style={{ fontWeight: "bold" }}>{productData.trading_location}</Text>
                        </View>
                      </View>

                      { productData.trading_qty &&
                        <View style={{ flexDirection: "row", marginVertical: 5 }}>
                          <View style={{ flex: 2, marginHorizontal: 10 }}>
                            <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Stock</Text>
                          </View>
                          <View style={{ flex: 2, marginHorizontal: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>{productData.trading_qty} {productData.trading_uom}</Text>
                          </View>
                        </View>
                      }

                      { productData.trading_price &&
                        <View style={{ flexDirection: "row", marginVertical: 5 }}>
                          <View style={{ flex: 2, marginHorizontal: 10 }}>
                            <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Price</Text>
                          </View>
                          <View style={{ flex: 2, marginHorizontal: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>₱ {productData.trading_price}</Text>
                          </View>
                        </View>
                      }

                      { productData.trading_qty && transactionData.trans_seller == userData.id &&
                          <>
                              { transactionData.trans_status == "pending" &&
                                  <>
                                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Product Quantity</Text>
                                      </View>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <TextInput 
                                          placeholder="" 
                                          mode="outlined" 
                                          activeOutlineColor={ConfigColors.MAINCOLOR} 
                                          outlineColor="#ddd" 
                                          autoCapitalize="none"
                                          maxLength={5}
                                          keyboardType="numeric"
                                          style={styles.formInput2}
                                          value={productQty}
                                          onChangeText={t => setProductQty(t)}  
                                        />
                                      </View>
                                    </View>
                                    <View style={{ marginTop: 5, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                      <Checkbox.Item label="I accept the " status={isCheck ? "checked" : "unchecked"} labelStyle={{ fontSize: 10 }} position="leading" onPress={() => setIsCheck(!isCheck)}/>
                                      <Text style={{ fontSize: 10, marginLeft: -15, color: "#2CCC74" }} onPress={() => navigation.navigate("Terms") }>Terms and Condition</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 50 }}>
                                      <Button mode="contained" buttonColor={ConfigColors.GREENCOLOR} contentStyle={{ }} labelStyle={{ fontSize: 12 }} style={styles.formButton} onPress={onPressSubmit} loading={formSubmit}>
                                        Confirm
                                      </Button>
                                    </View>
                                  </>
                              }
                              { transactionData.trans_status == "deliver" &&
                                  <>
                                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Product Quantity</Text>
                                      </View>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <Text style={{ fontWeight: "bold" }}>{transactionData.trans_qty}</Text>
                                      </View>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                      <Button mode="contained" buttonColor={ConfigColors.GREENCOLOR} contentStyle={{ }} labelStyle={{ fontSize: 12 }} style={styles.formButton} loading={formSubmit}>
                                        Wait for buyer...
                                      </Button>
                                    </View>
                                  </>
                                  
                              }
                              { transactionData.trans_status == "complete" &&
                                  <>
                                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Product Quantity</Text>
                                      </View>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <Text style={{ fontWeight: "bold" }}>{transactionData.trans_qty}</Text>
                                      </View>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                      <Button mode="contained" buttonColor={ConfigColors.GREENCOLOR} contentStyle={{ }} labelStyle={{ fontSize: 12 }} style={styles.formButton} loading={formSubmit}>
                                        Transaction Fulfilled!
                                      </Button>
                                    </View>
                                  </>
                              }
                          </>
                      }

                      { productData.trading_qty && transactionData.trans_seller != userData.id &&
                          <>
                              { transactionData.trans_status == "pending" &&
                                  <>
                                    <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                      <Text style={{ fontSize: 10, color: "#2CCC74" }} onPress={() => navigation.navigate("Terms") }><Text style={{ color: "#000" }}>I accept the </Text>Terms and Condition</Text>
                                    </View>
                                  </>
                              }
                              { transactionData.trans_status == "deliver" &&
                                  <>
                                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Product Quantity</Text>
                                      </View>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <Text style={{ fontWeight: "bold" }}>{transactionData.trans_qty}</Text>
                                      </View>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                      <Button mode="contained" buttonColor={ConfigColors.GREENCOLOR} contentStyle={{ }} labelStyle={{ fontSize: 11 }} style={styles.formButton} onPress={() => navigation.navigate('ProfileReceive', { data: userData })} loading={formSubmit}>
                                        Proceed to recievable products
                                      </Button>
                                    </View>
                                  </>
                                  
                              }
                              { transactionData.trans_status == "complete" &&
                                  <>
                                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <Text style={{ color: ConfigColors.SECONDARYCOLOR }}>Product Quantity</Text>
                                      </View>
                                      <View style={{ flex: 2, marginHorizontal: 10 }}>
                                        <Text style={{ fontWeight: "bold" }}>{transactionData.trans_qty}</Text>
                                      </View>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                      <Button mode="contained" buttonColor={ConfigColors.GREENCOLOR} contentStyle={{ }} labelStyle={{ fontSize: 12 }} style={styles.formButton} loading={formSubmit}>
                                        Transaction Fulfilled!
                                      </Button>
                                    </View>
                                  </>
                              }
                          </>
                      }
                      
                    </View>
                  </View>

                  { /* msg content */}
                  <View style={{ flex: 9, }}>
                    
                    <View style={{ flex: 7, }}>
                        <View style={{ flex: 1, marginTop: 10, marginHorizontal: 15 }}>
                          {
                            <FlatList 
                              data={messageList}
                              renderItem={({item, index}) => <ResultItem item={item} index={index} />} 
                              keyExtractor={(item, index) => item + index}
                              
                            />
                          }
                        </View>
                    </View>

                    { /* msg input */}
                    <View style={{ flex: 1, backgroundColor: ConfigColors.GREENCOLOR, }}>
                        <View style={{ flex: 1, justifyContent: "center", }}>
                        
                        <TextInput 
                          placeholder="Type a message..." 
                          mode="flat" 
                          activeOutlineColor={ConfigColors.GREENCOLOR} 
                          outlineColor={ConfigColors.GREENCOLOR} 
                          textColor="#000"
                          underlineColor="#fff"
                          autoCapitalize="none"
                          maxLength={50}
                          style={styles.formInput}
                          onSubmitEditing={() => onPressMessage()}
                          onChangeText={t => setMessageNew(t)}  
                          value={messageNew}
                          dense
                        />

                      </View>
                    </View>

                  </View>
                </Surface>
              </KeyboardAwareScrollView>
            }
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
              <Pressable onPress={() => navigation.navigate('ViewSupport', { data: userData, sdata: "Labor Support", smode: 43 })} style={{ alignItems: "center", alignSelf: "center" }}>
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
    marginHorizontal: 10
  },

  formInput2: {
    height: 18
  },

  formButton: {
    borderRadius: 12,
  },
});