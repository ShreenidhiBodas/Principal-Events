import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Header, Image } from 'react-native-elements';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

class LoginScreen extends React.Component {
  state = {
    login: false,
    username: '',
    password: ''
  }

  updateUsername = (value) => {
    this.setState({ username: value });
  }

  updatePassword = (value) => {
    this.setState({ password: value });
  }

  renderLeftComponent = () => {
    return (
      <MaterialIcons name="menu" size={25} style={{marginLeft: 10, color: "#fff"}} onPress={() => this.props.navigation.openDrawer()} />
    )
  }

  render() {
    return (
      <View style={{ flex:1 }}>
          <Header 
                centerComponent = {{text: 'LOGIN', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' }}}
                leftComponent = { this.renderLeftComponent() }
          />
          <View style={{flex: 1.5}}>
            <Image source={{ uri: "https://register.wyfegypt.com/images/form-wizard-login.jpg"}} style={{width: 500, height: 536}} />
          </View>
          <Container>
            <Content>
              <Form style={styles.form}>
                <Item>
                  <Input placeholder="Username" onChangeText={(value) => this.updateUsername(value)}/>
                </Item>
                <Item>
                  <Input placeholder="Password" secureTextEntry onChangeText={(value) => { this.updatePassword(value) }}/>
                </Item>
                <Button block primary style={{marginTop: 20, marginLeft:10, marginRight: 10, }} >
                  <Text>LOGIN</Text>
                </Button>
              </Form>
            </Content>
          </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    marginLeft: 10,
    marginRight: 10
  }
})

export default LoginScreen;