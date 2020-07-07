import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PresentScreen from './PersentScreen';
import PastScreen from './PastScreen';

const HomeTab = createMaterialTopTabNavigator();

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header 
              centerComponent = {{text: 'PRINCIPAL EVENTS', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' }}}
              leftComponent = { { icon: 'menu', color: '#fff' } }
        />
        <HomeTab.Navigator>
          <HomeTab.Screen name="Present & Upcoming" component={PresentScreen}/>
          <HomeTab.Screen name="Past" component={PastScreen} />
      </HomeTab.Navigator>
      </View>
      
    ); 
  }
}

export default HomeScreen;