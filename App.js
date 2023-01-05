import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Navi
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navi Create
const Stack = createNativeStackNavigator();

// Config
import { ConfigConnection } from './config/config';
import { ConfigColors, ConfigStyles } from './config/style';

// Screen
import Login from './screens/Login';
import Reset from './screens/Reset';
import Email from './screens/Email';
import Terms from './screens/Terms';
import Policy from './screens/Policy';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import DashboardTrading from './screens/DashboardTrading';
import DashboardEquipment from './screens/DashboardEquipment';
import DashboardSupport from './screens/DashboardSupport';
import DashboardInformation from './screens/DashboardInformation';
import Profile from './screens/Profile';
import ProfileReceive from './screens/ProfileReceive';
import ProfileReceiveData from './screens/ProfileReceiveData';
import ProfileReceiveReport from './screens/ProfileReceiveReport';
import ProfileProduct from './screens/ProfileProduct';
import ProfileEquipment from './screens/ProfileEquipment';
import ProfileEquipmentReturn from './screens/ProfileEquipmentReturn';
import ProfileEquipmentReturnData from './screens/ProfileEquipmentReturnData';
import SelectCategory from './screens/SelectCategory';
import ViewProduct from './screens/ViewProduct';
import ViewProductData from './screens/ViewProductData';
import ViewSupport from './screens/ViewSupport';
import ViewSupportData from './screens/ViewSupportData';

import TopExchange from './screens/TopExchange';
import TopExchangeList from './screens/TopExchangeList';

import TradingAdd from './screens/TradingAdd';
import EquipmentAdd from './screens/EquipmentAdd';
import SupportAdd from './screens/SupportAdd';

import EditTradingData from './screens/EditTradingData';
import EditEquipmentData from './screens/EditEquipmentData';
import EditSupportData from './screens/EditSupportData';

import CalendarSeason from './screens/CalendarSeason';
import CalendarMonth from './screens/CalendarMonth';
import CalendarProduct from './screens/CalendarProduct';

import PestView from './screens/PestView';
import PestViewData from './screens/PestViewData';
import PestViewDataRef from './screens/PestViewDataRef';
import PestViewDataPesticide from './screens/PestViewDataPesticide';

import Message from './screens/Message';
import MessageView from './screens/MessageView';

import DashboardAdmin from './screens/DashboardAdmin';
import DashboardAdminUser from './screens/DashboardAdminUser';
import DashboardAdminReport from './screens/DashboardAdminReport';
import DashboardAdminReportView from './screens/DashboardAdminReportView';


// Entry Point
// ===============================================
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#247F3D" /> 
      <NavigationContainer>
        <Stack.Navigator>

          { /* common */ }
          <Stack.Screen name="Login" component={Login} options={{ title: "Login", headerShown: false }} />
          <Stack.Screen name="Reset" component={Reset} options={{ title: "Reset", headerShown: false }} />
          <Stack.Screen name="Email" component={Email} options={{ title: "Email", headerShown: false }} />
          <Stack.Screen name="Terms" component={Terms} options={{ title: "Terms", headerShown: false }} />
          <Stack.Screen name="Policy" component={Policy} options={{ title: "Policy", headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ title: "Register", headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: "Dashboard", headerShown: false }} />
          <Stack.Screen name="DashboardTrading" component={DashboardTrading} options={{ title: "Dashboard", headerShown: false }} />
          <Stack.Screen name="DashboardEquipment" component={DashboardEquipment} options={{ title: "Dashboard", headerShown: false }} />
          <Stack.Screen name="DashboardSupport" component={DashboardSupport} options={{ title: "Dashboard", headerShown: false }} />
          <Stack.Screen name="DashboardInformation" component={DashboardInformation} options={{ title: "Dashboard", headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile", headerShown: false }} />
          <Stack.Screen name="ProfileReceive" component={ProfileReceive} options={{ title: "Profile Receive", headerShown: false }} />
          <Stack.Screen name="ProfileReceiveData" component={ProfileReceiveData} options={{ title: "Profile Receive Data", headerShown: false }} />
          <Stack.Screen name="ProfileReceiveReport" component={ProfileReceiveReport} options={{ title: "Profile Receive Report", headerShown: false }} />
          <Stack.Screen name="ProfileProduct" component={ProfileProduct} options={{ title: "Profile Product", headerShown: false }} />
          <Stack.Screen name="ProfileEquipment" component={ProfileEquipment} options={{ title: "Profile Equipment", headerShown: false }} />
          <Stack.Screen name="ProfileEquipmentReturn" component={ProfileEquipmentReturn} options={{ title: "Profile Equipment Return", headerShown: false }} />
          <Stack.Screen name="ProfileEquipmentReturnData" component={ProfileEquipmentReturnData} options={{ title: "Profile Equipment Return Data", headerShown: false }} />
          <Stack.Screen name="SelectCategory" component={SelectCategory} options={{ title: "Select", headerShown: false }} />
          <Stack.Screen name="ViewProduct" component={ViewProduct} options={{ title: "View Product", headerShown: false }} />
          <Stack.Screen name="ViewProductData" component={ViewProductData} options={{ title: "View Product Data", headerShown: false }} />
          <Stack.Screen name="ViewSupport" component={ViewSupport} options={{ title: "View Product", headerShown: false }} />
          <Stack.Screen name="ViewSupportData" component={ViewSupportData} options={{ title: "View Support Data", headerShown: false }} />

          <Stack.Screen name="TopExchange" component={TopExchange} options={{ title: "View Support Data", headerShown: false }} />
          <Stack.Screen name="TopExchangeList" component={TopExchangeList} options={{ title: "View Support Data", headerShown: false }} />

          <Stack.Screen name="TradingAdd" component={TradingAdd} options={{ title: "Add Post", headerShown: false }} />
          <Stack.Screen name="EquipmentAdd" component={EquipmentAdd} options={{ title: "Add Post", headerShown: false }} />
          <Stack.Screen name="SupportAdd" component={SupportAdd} options={{ title: "Add Post", headerShown: false }} />

          <Stack.Screen name="EditTradingData" component={EditTradingData} options={{ title: "Edit Post", headerShown: false }} />
          <Stack.Screen name="EditEquipmentData" component={EditEquipmentData} options={{ title: "Edit Post", headerShown: false }} />
          <Stack.Screen name="EditSupportData" component={EditSupportData} options={{ title: "Edit Post", headerShown: false }} />

          <Stack.Screen name="CalendarSeason" component={CalendarSeason} options={{ title: "Calendar Season", headerShown: false }} />
          <Stack.Screen name="CalendarMonth" component={CalendarMonth} options={{ title: "Calendar Month", headerShown: false }} />
          <Stack.Screen name="CalendarProduct" component={CalendarProduct} options={{ title: "Calendar Product", headerShown: false }} />
          
          <Stack.Screen name="PestView" component={PestView} options={{ title: "Pest Identification", headerShown: false }} />
          <Stack.Screen name="PestViewData" component={PestViewData} options={{ title: "Pest Identification", headerShown: false }} />
          <Stack.Screen name="PestViewDataRef" component={PestViewDataRef} options={{ title: "Pest References", headerShown: false }} />
          <Stack.Screen name="PestViewDataPesticide" component={PestViewDataPesticide} options={{ title: "Pest Pesticide", headerShown: false }} />

          <Stack.Screen name="Message" component={Message} options={{ title: "Message", headerShown: false }} />
          <Stack.Screen name="MessageView" component={MessageView} options={{ title: "View Message", headerShown: false }} />

          <Stack.Screen name="DashboardAdmin" component={DashboardAdmin} options={{ title: "Dashboard Admin", headerShown: false }} />
          <Stack.Screen name="DashboardAdminUser" component={DashboardAdminUser} options={{ title: "Dashboard User", headerShown: false }} />
          <Stack.Screen name="DashboardAdminReport" component={DashboardAdminReport} options={{ title: "Dashboard Report", headerShown: false }} />
          <Stack.Screen name="DashboardAdminReportView" component={DashboardAdminReportView} options={{ title: "Dashboard Report View", headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


// Styles
// ===============================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
