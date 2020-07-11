import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import AddEvent from './AddEvent';
import AddSession from './AddSession';
import AdminLoginScreen from './AdminLoginScreen';
import EventMenuScreen from '../navigation/index';

import { MainTabScreen } from './MainStackScreen';
import  { Auth } from 'aws-amplify';

const AdminStack = createStackNavigator();

const signOut = (navigation) => {
    Auth.signOut({ global: true })
    .then(() => {
      console.log("Signed out!")
      navigation.navigate("Admin Login   ");
    })
    .catch(err => console.log("Error", err));
  }

const AdminStackScreen = ({ navigation }) => {
    return (
        <AdminStack.Navigator>
            <AdminStack.Screen name="Admin Login   " component={AdminLoginScreen} options={{
                headerTitle: "ADMIN LOGIN",
                headerStyle: {
                    backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerLeft: () => (
                    <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                )
            }}  />
            <AdminStack.Screen name="Create Event   " component={AddEvent} options={{
                headerTitle: "CREATE EVENT",
                headerStyle: {
                    backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerLeft: () => (
                    <MaterialCommunityIcons name="logout" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => signOut(navigation)} />
                )
            }} />
            <AdminStack.Screen name="Session" component={AddSession} options={{
                headerTitle: "ADD SESSION",
                headerStyle: {
                    backgroundColor: "#348feb",
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                // headerLeft: () => (
                //     <MaterialIcons name="menu" size={25} style={{marginLeft: 20, color: "#fff"}} onPress={() => navigation.openDrawer()} />
                // )
            }} />
            <AdminStack.Screen name="MAIN TAB" component={MainTabScreen} options={{
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
            <AdminStack.Screen name="Event Menu" component={EventMenuScreen} options={{
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
        </AdminStack.Navigator>
    )
}

export default AdminStackScreen;
