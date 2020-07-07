import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { Container, Content, Button, Text, H2 } from 'native-base';
import events from '../data/events';

/**
 * Air Transportation
 * Attire
 * FLight Assistance
 * Hotel Accomodation
 * IT and Salesforce Desk
 * Local Weather
 * Registration and hospitality
 * WiFi instructions
 */

const HomePage = ({ navigation }) => {
    return (
        <View style={{flex: 1, justifyContent: "center"}}>
            <Container>
                <Content>
                    <Button block info onPress={() => navigation.push("Air Transportation")} style={{marginBottom: 20, marginTop: 20}}>
                        <Text>Air Transportation</Text>
                    </Button>
                    <Button block info onPress={() => navigation.push("Attire")} style={{marginBottom: 20}}>
                        <Text>Attire</Text>
                    </Button>
                    <Button block info onPress={() => navigation.push("Flight Assistance")} style={{marginBottom: 20}}>
                        <Text>FLight Assistance</Text>
                    </Button>
                    <Button block style={{marginBottom: 20}} info onPress={() => navigation.push("Hotel Accomodation")}>
                        <Text>Hotel Accomodation</Text>
                    </Button>
            </Content>
        </Container>
        </View>
    )
}

const AirportScreen = ({ navigation, route }) => {
    let { key } = route.params;
    {console.log(JSON.stringify(key))}
    return (
        <Container>
            <Content>
                <H2>Event: {key}</H2>
                <Text style={styles.displayText}>Ground transportation is not provided. Upon arrival in San Diego, please plan to take a cab. </Text>
                <Text style={styles.displayText}>Please Coordinate with others on the flight</Text>
            </Content>
        </Container>
    );
}

const AttireScreen = ({ navigation, route }) => {
    let { key } = route.params;
    return (
        <Container>
            <Content>
                <H2>Event: {key}</H2>
                <Text style={styles.displayText}>Something related to attire</Text>
            </Content>
        </Container>
    )
}

const FlightAssistanceScreen = ({ navigation, route }) => {
    let { key } = route.params;
    return (
        <Container>
            <Content>
                <H2>Event: {key}</H2>
                <Text style={styles.displayText}>Something related to flight assistance</Text>
            </Content>
        </Container>
    )
}

const HotelAccomodationScreen = ({ navigation, route }) => {
    let { key } = route.params;
    return (
        <Container>
            <Content>
                <H2>Event: {key}</H2>
                <Text style={styles.displayText}>Something related to Hotel Accomodation</Text>
            </Content>
        </Container>
    )
}

const EventStack = createStackNavigator();


const EventInfoScreen = ({ route, navigation }) => {
    let { key } = route.params;
    return (
        <EventStack.Navigator>
            <EventStack.Screen name="Home Page" component={HomePage}/>
            <EventStack.Screen name="Air Transportation" component={AirportScreen} initialParams={{key: key}}/>
            <EventStack.Screen name="Attire" component={AttireScreen} initialParams={{key: key}}/>
            <EventStack.Screen name="Flight Assistance" component={FlightAssistanceScreen} initialParams={{key: key}}/>
            <EventStack.Screen name="Hotel Accomodation" component={HotelAccomodationScreen} initialParams={{key: key}}/>
        </EventStack.Navigator>
    )
}

export default EventInfoScreen;

const styles = StyleSheet.create({
    displayText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

