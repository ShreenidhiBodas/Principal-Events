import React from 'react';
import Amplify, { Auth } from 'aws-amplify';

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
import { MaterialIcons } from '@expo/vector-icons';


class SignupScreen extends React.Component {
  state = {
    login: false,
    password: '',
    email: '',
    phone: ''
  }

  updatePassword = (value) => {
    this.setState({ password: value });
  }

  updateEmail = (value) => {
    this.setState({ email: value });
  }

  updatePhone = (value) => {
    this.setState({ phone: value });
  }


  signUp = async () => {
    console.log(this.state.email, this.state.password, this.state.phone, " from SignupScreen");
      const { email, password, phone } = this.state;
      const username = email;
      const name = email;
      try {
        const user = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                // phone,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log({ user });
        if (user !== null) {
          this.props.navigation.navigate("ConfirmSignup");
        }
    } catch (error) {
        console.log('error signing up:', error);
    }
  }
 
  renderLeftComponent = () => {
    return (
      <MaterialIcons name="menu" size={25} style={{marginLeft: 10, color: "#fff"}} onPress={() => this.props.navigation.openDrawer()} />
    )
  }

  render() {
    return (
      <View style={{ flex:1 }}>
          <Container>
            <Content>
              <Form style={styles.form}>
                <Item>
                  <Input placeholder="Email" onChangeText={(value) => { this.updateEmail(value) }}/>
                </Item>
                <Item>
                  <Input placeholder="Password" secureTextEntry onChangeText={(value) => { this.updatePassword(value) }}/>
                </Item>
                <Item>
                  <Input placeholder="Phone No (Enter along with country code)" onChangeText={(value) => { this.updatePhone(value) }}/>
                </Item>
                <Button block info style={{marginTop: 20, marginLeft:10, marginRight: 10, }} onPress={() => this.signUp()} >
                  <Text style={{color: "#fff", fontSize: 20}}>SIGN UP</Text>
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

export default SignupScreen;