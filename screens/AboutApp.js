import React, { Component, Fragment } from "react";
import {
    Dimensions,
    Image,
    FlatList,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import * as Icon from "@expo/vector-icons";

import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class AboutApp extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <Button onPress={() => { }}>
                    <Icon.Entypo name="dots-three-horizontal" color={theme.colors.gray} />
                </Button>
            )
        };
    };

    renderGallery() {
        const { about } = this.props;
        return (

            <Image
                source={require("../assets/images/billu.jpg")}
                resizeMode="contain"
                style={{ width, height: height / 2.8 }}
            />



        );
    }

    render() {
        const { about } = this.props;

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {this.renderGallery()}

                <Block style={styles.about}>
                    <Text h2 bold>
                        {about.name}
                    </Text>
                    {/* <Block flex={false} row margin={[theme.sizes.base, 0]}>
                        {about.tags.map(tag => (
                            <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                                {tag}
                            </Text>
                        ))}
                    </Block> */}
                    <Text gray light height={22}>
                        {about.description}
                    </Text>

                    <Divider margin={[theme.sizes.padding * 0.9, 0]} />

                    {/* <Block> */}
                    {/* <Text semibold>Gallery</Text>
                        <Block row margin={[theme.sizes.padding * 0.9, 0]}> */}
                    {/* {about.images.slice(1, 3).map((image, index) => (
                                <Image
                                    key={`gallery-${index}`}
                                    source={image}
                                    style={styles.image}
                                />
                            ))} */}
                    {/* <Block
                            flex={false}
                            card
                            center
                            middle
                            color="rgba(197,204,214,0.20)"
                            style={styles.more}
                        > */}
                    {/* <Text gray>+{about.images.slice(3).length}</Text> */}
                    {/* </Block> */}
                    {/* </Block> */}
                    {/* </Block> */}
                </Block>
            </ScrollView>
        );
    }
}

AboutApp.defaultProps = {
    about: mocks.aboutapp[0]
};

export default AboutApp;

const styles = StyleSheet.create({
    about: {
        paddingHorizontal: theme.sizes.base * 2,
        paddingVertical: theme.sizes.padding
    },
    tag: {
        borderColor: theme.colors.gray2,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: theme.sizes.base,
        paddingHorizontal: theme.sizes.base,
        paddingVertical: theme.sizes.base / 2.5,
        marginRight: theme.sizes.base * 0.625
    },
    image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight: theme.sizes.base
    },
    more: {
        width: 55,
        height: 55
    }
});