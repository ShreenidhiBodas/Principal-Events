import React, { Component } from "react";
import { Button, View, ScrollView } from "react-native";
import { Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { ListItem, Body } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import {API, graphqlOperation} from "aws-amplify";
import { createNewSession } from '../src/graphql/mutations';
import DocumentPicker from 'react-native-document-picker';
import { RNS3 } from 'react-native-s3-upload';

// var AWS = require('aws-sdk');
// var s3 = new AWS.S3({accessKeyId:'AKIAR5KIOWOZMM6I2IQH', secretAccessKey:'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', region:'us-east-1'});
 
// var params = {Bucket: 'principal-app', Key: 'sessionDocs/doc-1.pdf', ContentType: 'application/pdf'};
// s3.getSignedUrl('putObject', params, function (err, url) {
//     console.log('Your generated pre-signed URL is', url);
// });

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
            speaker: "",
            s3URL: '',
            file: ''
        }
    }

    renderLeftComponent = () => {
        return (
          <MaterialIcons name="arrow-back" size={25} style={{marginLeft: 10, color: "#fff"}} onPress={() => this.props.navigation.goBack()} />
        )
    }

    // async selectOneFile() {
    //     try {
    //       const res = await DocumentPicker.pick({
    //         type: [DocumentPicker.types.allFiles],
    //       });
    //       console.log('res : ' + JSON.stringify(res));
    //       console.log('URI : ' + res.uri);
    //       console.log('Type : ' + res.type);
    //       console.log('File Name : ' + res.name);
    //       console.log('File Size : ' + res.size);
    //       this.setState({ file: res });
    //     } catch (err) {
    //       if (DocumentPicker.isCancel(err)) {
    //         alert('Canceled from single doc picker');
    //       } else {
    //         //For Unknown Error
    //         alert('Unknown Error: ' + JSON.stringify(err));
    //         throw err;
    //       }
    //     }
    //   }

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
                        <ListItem>
                            <Body>
                                <Text key={e.id}>
                                    {e.title} {e.description}
                                    {moment(e.startDate).format('DD/MM/YYYY hh:mm A')} {moment(e.endDate).format('DD/MM/YYYY hh:mm A')}
                                </Text>
                            </Body>
                        </ListItem>
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
                    {/* <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={this.selectOneFile.bind(this)}>
                        {/*Single file selection button*/}
                        {/* <Text style={{ marginRight: 10, fontSize: 19 }}>
                            Click here to pick one file
                        </Text>
                    </TouchableOpacity> */}
                    
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
                                    alert('Sessions Saved!');
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