import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PresentScreen from './PersentScreen';
import PastScreen from './PastScreen';
import SignupScreen from './SignupScreen';
import ConfirmSignupScreen from './ConfirmSignupScreen';
import UpdatePasswordScreen from './UpdatePasswordScreen';
import EventInfoScreen from './EventInfoScreen';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import LoginScreen from './LoginScreen';
import TempSignIn from './TempSignIn';
import EventMenuScreen from '../navigation/index';
import Amplify, { Auth } from 'aws-amplify';

const HomeTab = createMaterialTopTabNavigator();
// const PresentStack = createStackNavigator();
// const PastStack = createStackNavigator();

const MainStack = createStackNavigator();

signOut = (navigation) => {
  Auth.signOut({ global: true })
  .then(() => {
    console.log("Signed out!")
    navigation.navigate("User Login   ");
  })
  .catch(err => console.log("Error", err));
}

function MainStackScreen({ navigation }) {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="MAIN TAB" component={MainTabScreen} options={{
                headerTitle: "PRINCIPAL EVENTS",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerLeft: () => (
                <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                ),
                // headerRight: () => (
                //   <MaterialCommunityIcons name="logout" size={25} style={{marginRight: 20, color: "#fff"}} onPress={() => signOut(navigation)} />
                // )
            }} />
            {/* <MainStack.Screen name="Event Information" component={EventInfoScreen} options={{
                headerTitle: "EVENT INFORMATION",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
            }} /> */}
            <MainStack.Screen name="Event Menu" component={EventMenuScreen} options={{
                headerTitle: "EVENT MENU",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerLeft: () => (
                  <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                )
            }} />
            <MainStack.Screen name="LoginScreen" component={LoginScreen} options={{
                headerTitle: "SIGN UP",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerLeft: () => (
                <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                )
            }} />
            <MainStack.Screen name="Signup" component={SignupScreen} options={{
                headerTitle: "SIGN UP",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerLeft: () => (
                <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                )
            }} />
            <MainStack.Screen name="ConfirmSignup" component={ConfirmSignupScreen} options={{
                headerTitle: "CONFIRM SIGN UP",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
            }} />
            <MainStack.Screen name="ChangePass" component={UpdatePasswordScreen} options={{
                headerTitle: "Change Password",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
            }} />
        </MainStack.Navigator>
    )
}

class MainTabScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HomeTab.Navigator>
          <HomeTab.Screen name="Present & Upcoming" component={PresentScreen}/>
          <HomeTab.Screen name="Past" component={PastScreen} />
      </HomeTab.Navigator>
      </View>
      
    ); 
  }
}

export default MainStackScreen;