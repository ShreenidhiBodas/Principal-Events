import React, { Component } from "react";
import { Button, View, ScrollView } from "react-native";
import { Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import {API, graphqlOperation} from "aws-amplify";
import { createNewSession } from '../src/graphql/mutations';


class AddSession extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDatePickerVisible: false,
            isendDatePickerVisible: false,
            sessions: [],
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            eventId: "",
            type: "",
            speaker: ""
        }
    }

    renderLeftComponent = () => {
        return (
          <MaterialIcons name="arrow-back" size={25} style={{marginLeft: 10, color: "#fff"}} onPress={() => this.props.navigation.goBack()} />
        )
    }

    render() {
        const { email } = this.props.route.params;
        return (
            <View style={{ flex: 1 }}>
                {/* <View>
                <Header 
                    centerComponent = {{text: 'ADD SESSION', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' }}}
                    leftComponent = { this.renderLeftComponent() }
                />
                </View> */}
                <ScrollView style={{ margin: 20 }}>
                    {this.state.sessions.map(e => (
                        <Text key={e.id}>
                            {e.title} {e.description}
                            {moment(e.startDate).format('DD/MM/YYYY hh:mm A')} {moment(e.endDate).format('DD/MM/YYYY hh:mm A')}
                        </Text>
                    ))}
                    <Text style={styles.header}>Add New Session</Text>
                    <TextInput
                        placeholder="Enter title"
                        onChangeText={(text) => { this.setState({ title: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        value={this.state.title}
                    />
                    <TextInput
                        placeholder="Description"
                        onChangeText={(text) => { this.setState({ description: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        multiline
                        value={this.state.description}
                    />
                    <TextInput
                        placeholder="Enter session type"
                        onChangeText={(text) => { this.setState({ type: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        value={this.state.type}
                    />
                    <TextInput
                        placeholder="Enter session speaker"
                        onChangeText={(text) => { this.setState({ speaker: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        value={this.state.speaker}
                    />
                    <Button
                        title="Select start time"
                        onPress={() => this.setState({ isDatePickerVisible: true })}
                        style={{
                            marginBottom: 30,
                        }}
                    />
                    <Text style={{margin: 20, fontSize: 18}}>
                        Start Date : {this.state.startDate ? moment(this.state.startDate).format('DD/MM/YYYY hh:mm A') : ""}
                    </Text>
                    <DateTimePickerModal
                        isVisible={this.state.isDatePickerVisible}
                        mode="datetime"
                        onConfirm={(date) => { this.setState({ isDatePickerVisible: false }); this.setState({ startDate: date }) }}
                        onCancel={() => { this.setState({ isDatePickerVisible: false }) }}
                    />
                    <Button
                        title="Select end time"
                        onPress={() => this.setState({ isendDatePickerVisible: true })}
                        style={{
                            marginBottom: 30,
                        }}
                    />
                    <Text style={{margin: 20, fontSize: 18}}>
                        End Date : {this.state.endDate ? moment(this.state.endDate).format('DD/MM/YYYY hh:mm A') : ""}
                    </Text>
                    <DateTimePickerModal
                        isVisible={this.state.isendDatePickerVisible}
                        mode="datetime"
                        onConfirm={(date) => { this.setState({ isendDatePickerVisible: false }); this.setState({ endDate: date }) }}
                        onCancel={() => { this.setState({ isendDatePickerVisible: false }) }}
                    />

                    <Button
                        title="Add Session"
                        onPress={() => { 
                            const { eventId } = this.props.route.params;
                            const session = {
                                eventId: eventId, title: this.state.title, startDate: this.state.startDate, endDate: this.state.endDate, type: this.state.type, description: this.state.description, speaker: this.state.speaker
                            }
                            const sessions = this.state.sessions;
                            sessions.push(session);
                            this.setState({ sessions: sessions });
                        }}
                        style={{
                            marginTop: 30,
                            marginBottom: 10
                        }}
                    />
                    <Button
                        title = "Save Sessions"
                        onPress = {() => {
                            this.state.sessions.map((session) => {
                                API.graphql(graphqlOperation(createNewSession, { input: session }))
                                .then(result => {
                                    console.log(`Session ${result.data.createNewSession.sessionId}  created`);
                                })
                                .catch(err => console.log(err));
                            });
                        }}
                        style = {{
                            marginTop: 30,
                        }}
                    />
                    <Button
                        title = "Go Home"
                        onPress = {() => {
                            this.props.navigation.navigate("MAIN TAB", { email: email });
                        }}
                        style = {{
                            marginTop: 30,
                        }}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default AddSession;

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        color: '#0091da',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        height: 40,
        marginBottom: 30,
        alignSelf: 'stretch',
        color: '#0091da',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
});