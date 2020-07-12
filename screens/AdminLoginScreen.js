import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../config';

Amplify.configure(awsConfig);

import { Authenticator } from 'aws-amplify-react-native';

// class LoginScreen extends React.Component {
//   render() {
//     return (
//       <Authenticator usernameAttributes="email"/>
      
//     )
//   }
// }
import { View, StyleSheet } from 'react-native';
import { Text, Header, Image } from 'react-native-elements';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import flags from '../global/flags';

class AdminLoginScreen extends React.Component {
  state = {
    email: '',
    password: ''
  }

  updateEmail = (value) => {
    this.setState({ email: value });
  }

  updatePassword = (value) => {
    this.setState({ password: value });
  }

  signIn = () => {
      console.log(this.state.email, this.state.password, typeof(this.state.email), typeof(this.state.password));
      Auth.signIn(this.state.email, this.state.password)
      .then( user => {
        console.log({ user })
        if (user !== null) {
          this.setState({ email: '', password: '' })
          this.props.navigation.navigate("Create Event   ", { email: user.attributes.email });
        }
      }, err => { console.log(err)})
      .catch(err => console.log(err))
  }
 
  renderLeftComponent = () => {
    return (
      <MaterialIcons name="menu" size={25} style={{marginLeft: 10, color: "#fff"}} onPress={() => this.props.navigation.openDrawer()} />
    )
  }

  renderRightComponent = () => {
    return (
      <MaterialCommunityIcons name="logout" size={25} style={{marginRight: 10, color: "#fff"}} onPress={() => {
        Auth.signOut({ global: true })
        .then(() => {
          this.props.navigation.navigate("Admin Login   ");
        })
        .catch(err => { console.log(err) });
      }} />
    )
  }

  render() {
    return (
      <View style={{ flex:1 }}>
          {/* <Header 
                centerComponent = {{text: 'ADMIN LOGIN', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' }}}
                leftComponent = { this.renderLeftComponent() }
                // rightComponent = { this.renderRightComponent()}
          /> */}
          <Container>
            <Content>
              <Form style={styles.form}>
                <Item>
                  <Input placeholder="Email" onChangeText={(value) => this.updateEmail(value)} value={this.state.email} />
                </Item>
                <Item>
                  <Input placeholder="Password" secureTextEntry onChangeText={(value) => { this.updatePassword(value) }} value={this.state.password} />
                </Item>
                <Button block info style={{marginTop: 20, marginLeft:10, marginRight: 10,  }} onPress={() => { this.signIn() }} >
                  <Text style={{color: "#fff", fontSize: 20}}>LOGIN</Text>
                </Button>
                {/* <Button block transparent light bordered style={{marginTop: 30, marginLeft:10, marginRight: 10, }} onPress={() => this.props.navigation.navigate("Signup")} >
                  <Text  style={{color: "black", fontSize: 20}}>SIGN UP</Text>
                </Button>
                <Button block transparent light bordered style={{marginTop: 30, marginLeft:10, marginRight: 10, }} onPress={() => this.props.navigation.navigate("ChangePass")} >
                  <Text  style={{color: "black", fontSize: 20}}>Change Password</Text> */}
                {/* </Button> */}
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

export default AdminLoginScreen;