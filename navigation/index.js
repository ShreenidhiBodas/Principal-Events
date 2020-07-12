import React from "react";
import { Image } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createStackNavigator } from '@react-navigation/stack';


import EventMenu from "../screens/Browse";
import Schedule from "../screens/Schedule";
import Survey from "../screens/Survey";
import Speaker from "../screens/Speaker";
import Attendee from "../screens/Attendee";
import EventInfo from "../screens/EventInfo";
import AboutApp from "../screens/AboutApp";
import EventInfoScreen from '../screens/EventInfoScreen';


import { theme } from "../constants";

const EventMenuStack = createStackNavigator();

// const screens = createStackNavigator(
//   {
//     EventMenu,
//     Survey,
//     Speaker,
//     Schedule,
//     Attendee,
//     EventInfo,
//     AboutApp
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         height: theme.sizes.base * 4,
//         backgroundColor: theme.colors.blue, // or 'white
//         borderBottomColor: "transparent",
//         elevation: 0 // for android
//       },
//       headerBackImage: <Image source={require("../assets/icons/back.png")} />,
//       headerBackTitle: null,
//       headerLeftContainerStyle: {
//         alignItems: "center",
//         marginLeft: theme.sizes.base * 2,
//         paddingRight: theme.sizes.base
//       },
//       headerRightContainerStyle: {
//         alignItems: "center",
//         paddingRight: theme.sizes.base
//       }
//     }
//   }
// );

const EventMenuScreen = ({ navigation, route}) => {
  let { key, event, email } = route.params;
  return (
    <EventMenuStack.Navigator>
      <EventMenuStack.Screen name="EventMenu" component={EventMenu} />
      <EventMenuStack.Screen name="Schedule" component={Schedule} initialParams={{ event: event, email: email }} />
      <EventMenuStack.Screen name="Attendee" component={Attendee} initialParams={{ event: event}}/>
      <EventMenuStack.Screen name="Speaker" component={Speaker}/>
      <EventMenuStack.Screen name="EventInfo" component={EventInfoScreen} initialParams={{ key: key, event: event }}/>
      <EventMenuStack.Screen name="Survey" component={Survey}/>
      <EventMenuStack.Screen name="AboutApp" component={AboutApp}/>
    </EventMenuStack.Navigator>
  )
}

export default EventMenuScreen;