import React, { Component, Fragment, useState } from "react";
import DropdownMenu from 'react-native-dropdown-menu';
import {
    Dimensions,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Button,
    TextInput
} from "react-native";
import { Input, Rating } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { View, SectionList } from 'react-native';
import { Card, Badge, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { Entypo, FontAwesome5 } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker';
// import ModalDropdown from 'react-native-modal-dropdown';
const { width } = Dimensions.get("window");

class AddSpeaker extends Component {

    state = {
        speakers: [],
        name: "",
    };

    submitAndClear = () => {
        this.props.writeText(this.state.name)
        this.setState({
            name: ''
        })
    }


    render() {

        return (
            <Block>
                <View style={{ height: 20 }} />
                {this.state.speakers.map(cc => (
                    <Text>{cc.name}</Text>
                ))}
                <TextInput
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                    placeholder='Enter Speaker Name..'
                    clearButtonMode='always'
                />
                <Button onPress={() => {

                    const speaker = { name: this.state.name };
                    const speakers = this.state.speakers;
                    speakers.push(speaker)
                    this.submitAndClear
                    this.setState({ Speakers: speakers, name: "" });


                }} title="Press">

                </Button>
            </Block>


        );
    }


}
export default AddSpeaker;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2
    },
    tabs: {
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2
    },
    tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
    },
    active: {
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 3
    },
    categories: {
        flexWrap: "wrap",
        paddingHorizontal: theme.sizes.base * 2,
        marginBottom: theme.sizes.base * 3.5
    },
    category: {
        // this should be dynamic based on screen width
        minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
    }
});


