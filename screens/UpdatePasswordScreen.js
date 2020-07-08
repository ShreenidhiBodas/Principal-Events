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


class UpdatePasswordScreen extends React.Component {
  state = {
    login: false,
    email: '',
    oldPassword: '',
    newPassword: ''
  }

  updateEmail = (value) => {
    this.setState({ email: value });
  }

  updateOldPassword = (value) => {
    this.setState({ oldPassword: value });
  }

  updateNewPassword = (value) => {
    this.setState({ newPassword: value });
  }

  changePass = () => {
      Auth.changePassword(user, this.state.oldPassword, this.state.newPassword)
      .then(() => {
          console.log("Password Changed!")
      })
      .catch(err => { console.log(err) });
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
                  <Input placeholder="Email" onChangeText={(value) => this.updateEmail(value)}/>
                </Item>
                <Item>
                  <Input placeholder="Old Password" secureTextEntry onChangeText={(value) => { this.updateOldPassword(value) }}/>
                </Item>
                <Item>
                  <Input placeholder="New Password" secureTextEntry onChangeText={(value) => { this.updateNewPassword(value) }}/>
                </Item>
                <Button block info style={{marginTop: 40, marginLeft:10, marginRight: 10, }} onPress={() => this.changePass()} >
                  <Text style={{color: "#fff", fontSize: 20}}>SUBMIT</Text>
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

export default UpdatePasswordScreen;