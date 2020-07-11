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
        const list = [
            {
                id: '1',
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                bio: "Nisi eiusmod Lorem tempor nulla cillum ullamco. Tempor cupidatat ad duis incididunt ut nulla ea laborum labore occaecat laborum. Proident nostrud ea mollit esse veniam culpa do minim eiusmod. Deserunt pariatur proident excepteur dolor.\r\n",
                twitter: "esse",
                github: "occaecat",
                subtitle: "Mobile Developer at Buzzopia",
            },
            {
                id: '2',
                name: 'Chris Jackson',
                bio: "Cillum pariatur ex consectetur enim culpa laboris officia nisi. Nulla quis exercitation non amet incididunt nulla mollit pariatur reprehenderit exercitation irure. Non ea exercitation sit velit mollit est amet laboris veniam do. Ut officia ad labore adipisicing tempor Lorem nisi irure tempor mollit ut quis. Et occaecat consectetur ipsum consequat. Aliquip reprehenderit ea minim incididunt anim irure anim nisi nisi laboris anim. Eu commodo minim ad voluptate cillum deserunt ipsum tempor mollit velit reprehenderit exercitation.\r\n",
                twitter: "proident",
                github: "amet",
                subtitle: "Freelance at Eschoir",
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',

            }
        ];
        return (
            <View>
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
                        list.map((l, i) => (
                            <View>
                                <TouchableOpacity
                                >
                                    <ListItem
                                        onPress={() => {
                                            this.setState({ isVisible: true, attendee: l })
                                        }}
                                        key={l.id}
                                        leftAvatar={{ source: { uri: l.avatar_url } }}
                                        title={l.name}
                                        subtitle={l.subtitle}
                                        bottomDivider
                                        titleStyle={{ color: '#0091DA', fontWeight: 'bold' }}
                                        subtitleStyle={{ color: 'black' }}
                                        chevron={{ color: '#0091DA' }}
                                    />
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                    {
                        <TouchableOpacity>

                            <Overlay
                                isVisible={this.state.isVisible}
                                onBackdropPress={() => this.setState({ isVisible: false })}
                            >

                                <Card title={(this.state.attendee.name || '').toUpperCase()} image={{ uri: this.state.attendee.avatar_url }} imageStyle={styles.img}>
                                    <View>
                                        <Text style={{ fontWeight: '700' }}>{this.state.attendee.subtitle}</Text>
                                        <Text style={{ textAlign: 'justify' }}>{this.state.attendee.bio}</Text>

                                        {/* <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                                            <Icon.Button name="twitter" backgroundColor="transparent" color={theme.colors.blue}>
                                                <Text>@{this.state.attendee.twitter}</Text>
                                            </Icon.Button>
                                            <Icon.Button name="github" backgroundColor="transparent" color={theme.colors.blue}>
                                                <Text>@{this.state.attendee.github}</Text>
                                            </Icon.Button>
                                        </View> */}
                                        <Button
                                            title='CLOSE'
                                            buttonStyle={{
                                                backgroundColor: theme.colors.blue,
                                                marginTop: 10
                                            }}
                                            onPress={() => this.setState({ isVisible: false })}
                                        />

                                    </View>
                                </Card>

                            </Overlay>

                        </TouchableOpacity>
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