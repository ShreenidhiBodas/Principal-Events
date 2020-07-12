import React, { Component } from 'react';
import {
    Alert,
    // Modal,
    Text,
    TouchableHighlight,
    Image,
    Dimensions,

} from "react-native";

import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, ListItem, Overlay, Button, Header } from 'react-native-elements';
import { block } from 'react-native-reanimated';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import { theme, mocks } from "../constants";
import { Block } from "../components";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

class Attendee extends Component {
    state = {
        attendee: {},
        isVisible: false
    };

    renderLeftComponent = () => {
        return (
          <MaterialIcons name="arrow-back" size={25} style={{marginLeft: 10, color: "#fff"}} onPress={() => this.props.navigation.goBack()} />
        )
    }

    render() {
        let attendees = [];
        const { event } = this.props.route.params;
        event.sessions.items.map(session => {
            session.attendees.items.map(attendee => {
                attendees.push(attendee.email);
            })
        })
        let unique = attendees.filter((v, i, a) => a.indexOf(v) === i)

        return (
            <View style={{flex:1}}>
                <Header 
                        centerComponent = {{text: 'Attendees', style: { color: '#fff', fontSize: 22, fontWeight: '500' }}}
                        leftComponent = { this.renderLeftComponent() }
                        containerStyle = {{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                />
                <ScrollView>
                    {
                        unique.map((l, i) => (
                            <View>
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
                                    title={l}
                                    // subtitle={l.subtitle}
                                    bottomDivider
                                    titleStyle={{ color: '#0091DA', fontWeight: 'bold' }}
                                    subtitleStyle={{ color: 'black' }}
                                    // chevron={{ color: '#0091DA' }}
                                />
                            </View>
                        ))
                    }
                </ScrollView>
                
            </View>

        );
    }
}

export default Attendee;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    img: {
        // this should be dynamic based on screen width
        minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
