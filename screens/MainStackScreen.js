import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PresentScreen from './PersentScreen';
import PastScreen from './PastScreen';
import EventInfoScreen from './EventInfoScreen';
import { MaterialIcons } from '@expo/vector-icons';
import LoginScreen from './LoginScreen';
import EventMenuScreen from '../navigation/index';

const HomeTab = createMaterialTopTabNavigator();
// const PresentStack = createStackNavigator();
// const PastStack = createStackNavigator();

const MainStack = createStackNavigator();

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
                )
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
            <MainStack.Screen name="Login" component={LoginScreen} />
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