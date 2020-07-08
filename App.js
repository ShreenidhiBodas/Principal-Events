import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import LoginScreen from './screens/LoginScreen';
import TempSignIn from './screens/TempSignIn';
import MainStackScreen from './screens/MainStackScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import flags from './global/flags'

const Drawer = createDrawerNavigator();

let customFonts = {
  'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf')
}

export default class App extends React.Component {
  state = {
    isLoggedIn: true,
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
              {this.state.isLoggedIn && <Drawer.Screen name="Home   " component={MainStackScreen}></Drawer.Screen>}
              <Drawer.Screen name="User Login   " component={LoginScreen}></Drawer.Screen>
              <Drawer.Screen name="Admin Login   " component={LoginScreen}></Drawer.Screen>
            </Drawer.Navigator>
          </NavigationContainer>
          {/* <TempSignIn /> */}
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
