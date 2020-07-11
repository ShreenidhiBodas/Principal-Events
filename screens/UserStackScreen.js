import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen'
import ConfirmSignupScreen from './ConfirmSignupScreen';
import EventMenuScreen from '../navigation/index';

import { MainTabScreen } from './MainStackScreen';
import  { Auth } from 'aws-amplify';

const UserStack = createStackNavigator();

const signOut = (navigation) => {
    Auth.signOut({ global: true })
    .then(() => {
      console.log("Signed out!")
      navigation.navigate("LoginScreen");
    })
    .catch(err => console.log("Error", err));
  }

const UserStackScreen = ({ navigation }) => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen name="LoginScreen" component={LoginScreen} options={{
                headerTitle: "USER LOGIN",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerLeft: () => (
                <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                )
            }} />
            <UserStack.Screen name="MAIN TAB" component={MainTabScreen} options={{
                headerTitle: "PRINCIPAL EVENTS",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerLeft: () => (
                <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                ),
                headerRight: () => (
                  <MaterialCommunityIcons name="logout" size={25} style={{marginRight: 20, color: "#fff"}} onPress={() => signOut(navigation)} />
                )
            }} />
            <UserStack.Screen name="Signup" component={SignupScreen} options={{
                headerTitle: "SIGN UP",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                // headerLeft: () => (
                // <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                // )
            }} />
            <UserStack.Screen name="ConfirmSignup" component={ConfirmSignupScreen} options={{
                headerTitle: "CONFIRM SIGN UP",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
            }} />
            <UserStack.Screen name="Event Menu" component={EventMenuScreen} options={{
                headerTitle: "EVENT MENU",
                headerStyle: {
                backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerLeft: () => (
                    <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                  )
            }}
             />
        </UserStack.Navigator>
    )
}

export default UserStackScreen;
