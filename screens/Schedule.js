import React from "react";
import { Component, Fragment } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList
} from "react-native";
import { ListItem, Button, Card } from 'react-native-elements';
import Constants from "expo-constants";
import { theme, mocks } from "../constants";
import Modal from 'react-native-modal';
import { Block } from "../components";
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import moment from 'moment';
import {API,graphqlOperation} from "aws-amplify";
import { listDL1, listDL2 } from '../src/graphql/queries';
import { createAttendee } from '../src/graphql/mutations';

class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {},
            modal: false,
            // events: mocks.events[0]
        };
    }

    joinSession = (type, email, id) => {
        let dl = [];
        if (type === "DL1") {
            API.graphql(graphqlOperation(listDL1))
            .then(res => {
                console.log(res);
                dl = res.data.listDL1.items;
                const obj = dl.filter(item =>  item.email === email )
                if (obj.length === 1) {
                    const attendee = {
                        sessionId: id, 
                        email: email
                    }
                    API.graphql(graphqlOperation(createAttendee, { input: attendee }))
                    .then(a => {
                        if (a !== null) {
                            console.log(a);
                            alert("You are successfully registered for this event")
                        }
                    })
                    .catch(err => console.log(err));
                }
                else {
                    alert("You are not in the DL for this event");
                }
            })
            .catch(err => console.log(err));
        }
        else {
            API.graphql(graphqlOperation(listDL2))
            .then(res => {
                dl = res.data.listDL2.items;
                const obj = dl.filter(item => { return item.email === email })
                if (obj.length === 1) {
                    const attendee = {
                        sessionId: id, 
                        email: email
                    }
                    API.graphql(graphqlOperation(createAttendee, { input: attendee }))
                    .then(a => {
                        if (a !== null) {
                            console.log(a);
                            alert("You are successfully regiatered for this event")
                        }
                    })
                    .catch(err => console.log(err));
                }
                else {
                    alert("You are not in the DL for this event");
                }
            })
            .catch(err => console.log(err));
        }
    }

    renderLeftComponent = () => {
        return (
          <MaterialIcons name="arrow-back" size={25} style={{marginLeft: 10, color: "#fff"}} onPress={() => this.props.navigation.goBack()} />
        )
      }

    render() {
        // const DATA = mocks.events
        const { event, email } = this.props.route.params;
        const sessions = event.sessions.items;
        const DATA = []
        sessions.map((session, index) => {
          const obj = {
              title: session.title,
              type: session.type,
              id: session.sessionId,
              data: [
                  session
              ]
          }
          DATA.push(obj);
        })
        return (
            <View style={{flex: 1}}>
                <Header 
                        centerComponent = {{text: 'Schedule', style: { color: '#fff', fontSize: 22, fontWeight: '500' }}}
                        leftComponent = { this.renderLeftComponent() }
                        containerStyle = {{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                <SafeAreaView style={styles.container}>
                    <SectionList
                        sections={DATA}
                        renderItem={({ item, index, section }) => <ListItem containerStyle={{ borderLeftColor: "#3392F0", borderLeftWidth: 6 }} key={index} title={item.description} subtitle={moment(item.startDate).format('DD/MM/YYYY hh:mm A') + '-' + moment(item.endDate).format('DD/MM/YYYY hh:mm A')} onPress={() => this.setState({ event: item, modal: true })} />}
                        renderSectionHeader={({ section: { title, type, id } }) => <ListItem title={title}
                            containerStyle={{ backgroundColor: theme.colors.blue }}
                            titleStyle={{ color: theme.colors.white, fontWeight: '800' }}
                            chevronColor={theme.colors.gray}
                            stickySectionHeadersEnabled={true}
                            rightIcon={<Button 
                                title="JOIN"
                                onPress={() => this.joinSession(type, email, id)}
                            />}
                        />}
                        // sections={this.state.events || []}
                        keyExtractor={(item, index) => item + index} />


                    {
                        <Modal isVisible={this.state.modal}
                            onSwipe={() => this.setState({ modal: false })}
                            onBackdropPress={() => this.setState({ modal: false })}>
                            <Card title={(this.state.event.title || '').toUpperCase()}>
                                <View>
                                    <Text style={{ fontWeight: '700' }}>{moment(this.state.event.startDate).format('DD/MM/YYYY hh:mm A') + '-' + moment(this.state.event.endDate).format('DD/MM/YYYY hh:mm A')}</Text>
                                    <Text style={{ textAlign: 'justify', marginTop: 10 }}>{this.state.event.description}</Text>
                                    {
                                        this.state.event.speaker ?
                                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                                <Text style={{ fontWeight: '700' }}>Speaker: </Text>
                                                <Text>{this.state.event.speaker}</Text>
                                            </View> : null
                                    }
                                    <Button
                                        title='CLOSE'
                                        buttonStyle={{
                                            backgroundColor: theme.colors.blue,
                                            marginTop: 15
                                        }}
                                        onPress={() => this.setState({ modal: false })}
                                    />
                                </View>
                            </Card>
                        </Modal>
                    }
                </SafeAreaView>
            </View>
        );
    }
}


export default Schedule;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: theme.colors.blue,
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});
