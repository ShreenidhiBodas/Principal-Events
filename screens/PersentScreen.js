import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base';
import events from '../data/events';

class PresentScreen extends React.Component {
  state = {
    pressedEvent: null,
  }

  pressed = (key) => {
    this.setState({ pressedEvent: key });
    this.props.navigation.navigate("Event Menu", { key: key });
  }

  render() {
    return (
      <ScrollView>
          <Content>
              {
                events.map((u) => {
                  if (u.present) {
                    return (
                      
                        <ListItem avatar key={u.key} style={{ justifyContent: 'center'}} >
                          <Left>
                            <Thumbnail source={{ uri: u.avatar }}/>
                          </Left>
                          <Body>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{u.title}</Text>
                            <Text note>{u.details}</Text>
                            <Text note>{u.date}</Text>
                          </Body>
                          <Right style={{justifyContent: 'center'}}>
                            <TouchableOpacity activeOpacity={0.7}>
                              <Icon name="arrow-forward" style={{ paddingRight: 5, fontSize: 30 }} onPress={() => { this.pressed(u.key)}}/>
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
export default PresentScreen;
