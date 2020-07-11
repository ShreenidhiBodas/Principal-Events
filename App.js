import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import LoginScreen from './screens/LoginScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import AddEvent from './screens/AddEvent';
import AddSession from './screens/AddSession';
import { MainStackScreen } from './screens/MainStackScreen';
import AdminStackScreen from './screens/AdminStackScreen';
import UserStackScreen from './screens/UserStackScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import flags from './global/flags';


const Drawer = createDrawerNavigator();

let customFonts = {
  'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf')
}

export default class App extends React.Component {
  state = {
    userLoggedIn: true,
    fontsLoaded: false
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="User Login   " component={UserStackScreen}></Drawer.Screen>
              {/* <Drawer.Screen name="Home   " component={MainStackScreen}></Drawer.Screen> */}
              <Drawer.Screen name="Admin Login" component={AdminStackScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      );
    }
    else {
      return (
        <AppLoading />
      )
    }
  }
}
