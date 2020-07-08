import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { View, StyleSheet } from 'react-native';
import { Text, Header, Image } from 'react-native-elements';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';


class ConfirmSignupScreen extends React.Component {
  state = {
    email: '',
    code: ''
  }

  updateEmail = (value) => {
    this.setState({ email: value });
  }

  updateCode = (value) => {
    this.setState({ code: value });
  }


  confirmSignUp = async () => {
    console.log(this.state.email, " from SignupScreen");
      const { email, code } = this.state;
      const username = email;
      try {
          await Auth.confirmSignUp(username, code);
          this.props.navigation.navigate("LoginScreen");
      }
      catch(err) {
          console.log(err);
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
                  <Input placeholder="Code" onChangeText={(value) => { this.updateCode(value) }}/>
                </Item>
                <Button block info style={{marginTop: 20, marginLeft:10, marginRight: 10, }} onPress={() => this.confirmSignUp()} >
                  <Text style={{color: "#fff", fontSize: 20}}>CONFIRM SIGN UP</Text>
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

export default ConfirmSignupScreen;