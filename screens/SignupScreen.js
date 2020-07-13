import React from 'react';
import Amplify, { Auth } from 'aws-amplify';

// class LoginScreen extends React.Component {
//   render() {
//     return (
//       <Authenticator usernameAttributes="email"/>
      
//     )
//   }
// }
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Header, Image } from 'react-native-elements';
import { Container, Content, Form, Item, Input, Button, Picker } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';


class SignupScreen extends React.Component {
  state = {
    login: false,
    password: '',
    email: '',
    phone: '',
    // user: '',
    // domain: '@principal.com',
  }

  updatePassword = (value) => {
    this.setState({ password: value });
  }

  updateEmail = (value) => {
    this.setState({ email: value });
  }


  // updateDomain = (value) => {
  //   this.setState({ domain: value });
  // }

  updatePhone = (value) => {
    this.setState({ phone: value });
  }


  signUp = async () => {
      const { email, password, phone } = this.state;
      const username = email;
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
    const { width } = Dimensions.get("window");
    return (
      <View style={{ flex:1 }}>
          <Container>
            <Content>
              <Form style={styles.form}>
                <Item>
                  <Input placeholder="Email" onChangeText={(value) => { this.updateEmail(value) }}/>
                  {/* <Picker
                  note
                  mode="dropdown"
                  style={{ width: width*0.02 }}
                  selectedValue={this.state.domain}
                  onValueChange={(value) => this.updateDomain(value)}
                >
                  <Picker.Item label="@principal.com" value="@principal.com" />
                  <Picker.Item label="@walchandsangli.ac.in" value="@walchandsangli.ac.in" />
              </Picker> */}
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

              

{/* <DropDownPicker
items = { this.state.domains }
containerStyle={{ height: 40, width: width*0.4 }}
style={{backgroundColor: '#fafafa'}}
dropDownStyle={{ backgroundColor: '#fafafa' }}
onChangeItem={item => this.setState({
    domain: item.value
})}
/> */}