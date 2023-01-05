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
export default function Policy({ navigation, route }) {
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
                Privacy Policy
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </Text>
                <Text style={{ fontSize: 16,  marginVertical: 12 }}> 
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Interpretation 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Definitions 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  For the purposes of this Privacy Policy: {'\n'}{'\n'}

                  • Account means a unique account created for You to access our Service or parts of our Service. {'\n'}{'\n'}

                  • Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority. {'\n'}{'\n'}

                  • Application means the software program provided by the Company downloaded by You on any electronic device, named Dev-Ag {'\n'}{'\n'}

                  • Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Dev-Ag. {'\n'}{'\n'}

                  • Country refers to: Philippines {'\n'}{'\n'}

                  • Device means any device that can access the service, such as a smartphone. {'\n'}{'\n'}

                  • Personal Data is any information that relates to an identified or identifiable individual. {'\n'}{'\n'}

                  • Service refers to the Application. {'\n'}{'\n'}

                  • Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. {'\n'}{'\n'}

                  • You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Personal Data
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: {'\n'}{'\n'}

                  • Email address {'\n'}{'\n'}

                  • First name and last name {'\n'}{'\n'}

                  • Phone number {'\n'}{'\n'}

                  • Address, State, Province, ZIP/Postal code, City
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Information Collected while Using the Application
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission: {'\n'}{'\n'}

                  • Pictures and other information from your Device's camera and photo library {'\n'}{'\n'}

                  We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device. {'\n'}{'\n'}

                  You can enable or disable access to this information at any time, through Your Device settings.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Use of Your Personal Data
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  The Company may use Personal Data for the following purposes:
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  To provide and maintain our Service
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  including to monitor the usage of our Service.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  To manage Your Account: to manage Your registration as a user of the Service.
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  For the performance of a contract: 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  To contact You: 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  To provide You 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  To provide You 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  To manage Your requests: 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  To attend and manage Your requests to Us.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  For business transfers: 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  For other purposes: 
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience. {'\n'}{'\n'}

                  We may share Your personal information in the following situations: {'\n'}{'\n'}

                  • With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You. {'\n'}{'\n'}

                  • For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company. {'\n'}{'\n'}

                  • With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us. {'\n'}{'\n'}

                  • With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. {'\n'}{'\n'}

                  • With Your consent: We may disclose Your personal information for any other purpose with Your consent.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Retention of Your Personal Data
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. {'\n'}{'\n'}

                  The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Transfer of Your Personal Data
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction. {'\n'}{'\n'}

                  Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer. {'\n'}{'\n'}

                  The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Delete Your Personal Data
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. {'\n'}{'\n'}

                  Our Service may give You the ability to delete certain information about You from within the Service. {'\n'}{'\n'}

                  You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us. {'\n'}{'\n'}

                  Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Business Transactions
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Law enforcement
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Other legal requirements
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  The Company may disclose Your Personal Data in the good faith belief that such action is necessary to: {'\n'}{'\n'}

                  • Comply with a legal obligation {'\n'}{'\n'}
                  • Protect and defend the rights or property of the Company {'\n'}{'\n'}
                  • Prevent or investigate possible wrongdoing in connection with the Service {'\n'}{'\n'}
                  • Protect the personal safety of Users of the Service or the public {'\n'}{'\n'}
                  • Protect against legal liability
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Security of Your Personal Data
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Changes to this Privacy Policy
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. {'\n'}{'\n'}

                  We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy. {'\n'}{'\n'}

                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#24AC64", marginVertical: 12 }}>
                  Contact Us
                </Text>

                <Text style={{ fontSize: 16, marginVertical: 12 }}>
                  If you have any questions about this Privacy Policy, You can contact us: {'\n'}{'\n'}

                  • By email: cs.dev-aghr@gmail.com 
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