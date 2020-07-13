import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base';
import { events } from '../data/events';
import moment from 'moment';
import {Amplify,API,graphqlOperation} from "aws-amplify";
import config from "../aws-exports";
import { listEvents } from '../src/graphql/queries';

class PastScreen extends React.Component {
  state = {
    pressedEvent: null,
    events_db: []
  }

  pressed = (key, title, u) => {
    this.setState({ pressedEvent: key });
    this.props.navigation.navigate("Event Menu", { key: key, title: title, event: u });
  }

  getAllEvents() {
    API.graphql(graphqlOperation(listEvents))
    .then(result => {
      if (result !== null) {
        this.setState({ events_db: result.data.listEvents.items })
      }
    })
    .catch(err => { console.log(err) });
  }

  render() {
    return (
      <ScrollView>
          <Content>
            {this.getAllEvents()}
              {
                this.state.events_db.map((u) => {
                  const date = new Date(u.endDate);
                  const curr = new Date();
                  if (date.getTime() < curr.getTime()) {
                    return (
                      
                        <ListItem avatar key={u.id} style={{ justifyContent: 'center'}} >
                          <Left>
                            <Thumbnail source={ require("../assets/icons/calendar.png") }/>
                          </Left>
                          <Body>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{u.title}</Text>
                            <Text note>{u.description}</Text>
                            <Text note>{moment(u.startDate).format('DD/MM/YYYY')} - {moment(u.endDate).format('DD/MM/YYYY')}</Text>
                          </Body>
                          <Right style={{justifyContent: 'center'}}>
                            <TouchableOpacity activeOpacity={0.7}>
                              <Icon name="arrow-forward" style={{ paddingRight: 5, fontSize: 30 }} onPress={() => { this.pressed(u.id, u.title, u)}}/>
                            </TouchableOpacity>
                          </Right>
                        </ListItem>
                    )
                  }
                })
              }
          </Content>
      </ScrollView>
    );
  }
}
export default PastScreen;
