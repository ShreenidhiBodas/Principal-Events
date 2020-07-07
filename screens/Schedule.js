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
class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {},
            modal: false,
            // events: mocks.events[0]
        };
    }

    renderLeftComponent = () => {
        return (
          <MaterialIcons name="arrow-back" size={25} style={{marginLeft: 10, color: "#fff"}} onPress={() => this.props.navigation.goBack()} />
        )
      }

    render() {
        const DATA = mocks.events


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
                        renderItem={({ item, index, section }) => <ListItem containerStyle={{ borderLeftColor: item.color, borderLeftWidth: 6 }} key={index} title={item.name} subtitle={item.time + ' ' + item.place} onPress={() => this.setState({ event: item, modal: true })} />}
                        renderSectionHeader={({ section: { title } }) => <ListItem title={title}
                            containerStyle={{ backgroundColor: theme.colors.blue }}
                            titleStyle={{ color: theme.colors.white, fontWeight: '800' }}
                            chevronColor={theme.colors.gray}
                            stickySectionHeadersEnabled={true}
                        />}
                        // sections={this.state.events || []}
                        keyExtractor={(item, index) => item + index} />


                    {
                        <Modal isVisible={this.state.modal}
                            onSwipe={() => this.setState({ modal: false })}
                            onBackdropPress={() => this.setState({ modal: false })}>
                            <Card title={(this.state.event.name || '').toUpperCase()}>
                                <View>
                                    <Text style={{ fontWeight: '700' }}>{this.state.event.time} {this.state.event.place}</Text>
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
