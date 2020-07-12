import React, { Component } from "react";
import { Button, View, ScrollView } from "react-native";
import { Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import {API, graphqlOperation} from "aws-amplify";
import { createEvent } from '../src/graphql/mutations';


class AddEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDatePickerVisible: false,
            isendDatePickerVisible: false,
            events: [],
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            displayFormat: 'DD/MM/YYYY',
            venue: "",
            attire: "",
            hotel: "",
            air: "",
            flight: "",
            id: ""
        }
    }

    submitAndClear = () => {
        this.props.writeText(this.state.title)
        this.props.writeText(this.state.description)
        this.setState({
            name: '',
            description: '',
        })
    }

    renderLeftComponent = () => {
        return (
          <MaterialIcons name="menu" size={25} style={{marginLeft: 10, color: "#fff"}} onPress={() => this.props.navigation.openDrawer()} />
        )
    }

    render() {
        const { email } = this.props.route.params;
        return (
            <View style={{ flex: 1 }}>
                {/* <View>
                <Header 
                    centerComponent = {{text: 'CREATE EVENT', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' }}}
                    leftComponent = { this.renderLeftComponent() }
                />
                </View> */}
                <ScrollView style={{ margin: 20 }}>
                    {/* {this.state.events.map(e => (
                        <Text key={e.id}>
                            {e.title} {e.description}
                            {moment(e.startDate).format('DD/MM/YYYY')} {moment(e.endDate).format('DD/MM/YYYY')}
                        </Text>
                    ))} */}
                    <Text style={styles.header}>Add New Event</Text>
                    <TextInput
                        placeholder="Enter title"
                        onChangeText={(text) => { this.setState({ title: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        value={this.state.title}
                    />
                    <TextInput
                        placeholder="Venue"
                        onChangeText={(text) => { this.setState({ venue: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        value={this.state.venue}
                    />
                    <TextInput
                        placeholder="Enter event description"
                        onChangeText={(text) => { this.setState({ description: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        value={this.state.description}
                        multiline
                    />
                    <Button
                        title="Select start date"
                        onPress={() => this.setState({ isDatePickerVisible: true })}
                        style={{
                            marginBottom: 30,
                        }}
                    />
                    <Text style={{margin: 20, fontSize: 18}}>
                        Start Date : {this.state.startDate ? moment(this.state.startDate).format(this.state.displayFormat) : ""}
                    </Text>
                    <DateTimePickerModal
                        isVisible={this.state.isDatePickerVisible}
                        mode="date"
                        onConfirm={(date) => { this.setState({ isDatePickerVisible: false }); this.setState({ startDate: date }) }}
                        onCancel={() => { this.setState({ isDatePickerVisible: false }) }}
                    />
                    <Button
                        title="Select end date"
                        onPress={() => this.setState({ isendDatePickerVisible: true })}
                        style={{
                            marginBottom: 30,
                        }}
                    />
                    <Text style={{margin: 20, fontSize: 18}}>
                        End Date : {this.state.endDate ? moment(this.state.endDate).format(this.state.displayFormat) : ""}
                    </Text>
                    <DateTimePickerModal
                        isVisible={this.state.isendDatePickerVisible}
                        mode="date"
                        onConfirm={(date) => { this.setState({ isendDatePickerVisible: false }); this.setState({ endDate: date }) }}
                        onCancel={() => { this.setState({ isendDatePickerVisible: false }) }}
                    />

                    <TextInput
                        placeholder="Enter Event Attire Details"
                        onChangeText={(text) => { this.setState({ attire: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        multiline
                        value={this.state.attire}
                    />
                    <TextInput
                        placeholder="Enter Air Transportation Details"
                        onChangeText={(text) => { this.setState({ air: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        multiline
                        value={this.state.air}
                    />
                    <TextInput
                        placeholder="Enter Hotel Accomodation Details"
                        onChangeText={(text) => { this.setState({ hotel: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        multiline
                        value={this.state.hotel}
                    />
                    <TextInput
                        placeholder="Enter Flight Assistance Details"
                        onChangeText={(text) => { this.setState({ flight: text }) }}
                        style={styles.textinput}
                        underlineColorAndroid={'transparent'}
                        multiline
                        value={this.state.flight}
                    />
                    <Button
                        title="submit"
                        onPress={() => {
                            const event = { title: this.state.title, description: this.state.description,venue: this.state.venue, startDate: this.state.startDate, endDate: this.state.endDate, attire: this.state.attire, airTransport: this.state.air, accomodation: this.state.hotel, flightAssist: this.state.flight }
                            API.graphql(graphqlOperation(createEvent, { input: event }))
                            .then(result => {
                                if (result !== null) {
                                    console.log(result);
                                    this.props.navigation.navigate("Session", { eventId: result.data.createEvent.id, email: email });
                                }
                            })
                            .catch(err => { alert(err.message) })
                        }}
                        style={{
                            marginTop: 30,
                        }}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default AddEvent;

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