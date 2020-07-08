import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../config';

Amplify.configure(awsConfig);

import { Authenticator } from 'aws-amplify-react-native';

class TempSignIn extends React.Component {
  render() {
    return (
      <Authenticator usernameAttributes={"email", "phone number"}/>
      
    )
  }
}

export default TempSignIn;