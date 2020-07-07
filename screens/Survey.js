import React, { Component, Fragment } from "react";
import DropdownMenu from 'react-native-dropdown-menu';
import {
    Dimensions,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { Input, Button, Rating } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { View, SectionList } from 'react-native';
import { Card, Badge, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
// import ModalDropdown from 'react-native-modal-dropdown';
const { width } = Dimensions.get("window");

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: [{ q: 'How was the event?' }, { q: 'On which technology next session should be?' }, { q: 'On which platform you get information about us?' }],
            options: [[{ label: "React-Native", value: "React-Native", selected: true },
            { label: "Ionic", value: "Ionic" },
            { label: "MachineLearning", value: "MachineLearning" }],
            [{ label: "Facebook", value: "Facebook", selected: true }, { label: "LinkedIn", value: "LinkedIn" }, { label: "Instagram", value: "Instagram" }]]
        };
    }

    renderTitle(index) {
        const val = this.state.question[index];
        return (
            <Block>
                <Fragment>
                    <View style={{ height: 45 }} />
                    <Text h3>{val.q}</Text>
                </Fragment>
            </Block>

        );
    }
    renderRating() {
        return (

            <Block>
                <View style={{ height: 10 }} />
                    <Rating showRating fractions="{1}" startingValue="{3.3}" />
            </Block>
        );

    }
    renderFeedBackTitle() {
        return (
            <Block>
                <Fragment>
                    <View style={{ height: 64 }} />
                    <Text h3>Feedback</Text>
                </Fragment>
            </Block>

        );
    }
    renderButton() {
        return (
            <Button
                title="Submit"
            />
        );

    }
    renderInput() {
        return (
                <Block>
                    <View style={{ height: 20 }} />
                    <Input
                        placeholder='Give your feedback'
                        multiline
                    />
                </Block>
        );
    }
    renderDropDown(data) {

        return (<View style={{ flex: 1 }}>
            <View style={{ height: 20 }} />
            <DropDownPicker
                items={data}

                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => this.setState({
                    //change the state
                })}

            />
        </View >);
    }
    renderDivider() {
        return
        (
            <Divider style={{ backgroundColor: 'blue' }} />
        );

    }
    render() {

        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: theme.sizes.base * 2 }} >
                    {this.renderTitle(0)}
                    {this.renderRating()}
                    {this.renderTitle(1)}
                    {this.renderDropDown(this.state.options[0])}
                    {this.renderTitle(2)}
                    {this.renderDropDown(this.state.options[1])}
                    {this.renderFeedBackTitle()}
                    {this.renderInput()}
                    {this.renderButton()}

            </ScrollView>
        );
    }

}
export default Survey;

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


