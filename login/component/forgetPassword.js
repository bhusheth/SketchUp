import React from 'react';
import { Text, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import ButtonClass from './Button';

export default class ForgetPassword extends React.Component{
    static navigationOptions = {
        title: 'Forget Password',
    };
    render() {
      return (
          <View>
              <FormLabel>Email</FormLabel>
              <FormInput />
              <ButtonClass title='Send'/>
          </View>
      );
    }
}