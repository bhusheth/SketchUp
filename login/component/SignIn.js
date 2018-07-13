import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, SocialIcon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import ButtonClass from './Button';

export default class SignIn extends React.Component{
    static navigationOptions = {
        title: 'Sign In',
    };
    render() {
      return (
          <View>
              <FormLabel>Username</FormLabel>
              <FormInput />
              {/* <FormValidationMessage>Please enter valid username.</FormValidationMessage> */}
              <FormLabel>Password</FormLabel>
              <FormInput />
              {/* <FormValidationMessage>Please enter valid password.</FormValidationMessage> */}
              <Text style={styles.textStyle1} onPress={() => this.props.navigation.navigate('ForgetPassword')}>Foreget password?</Text>
              <ButtonClass
                  title='Log In' 
                  onPress={ () => this.props.navigation.popToTop() }
                />
                <Text style={styles.textStyle}>Log In with</Text>
                  <View style={styles.socialIconStyle}>
                    <SocialIcon type='facebook' onPress={() => this.props.navigation.navigate('SignIn')} />
                    <SocialIcon type='twitter' />
                    <SocialIcon type='google' />
                  </View>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    textStyle1: {
        color: 'blue',
        paddingTop: 10,
        marginLeft: 20,
    },
    socialIconStyle: {
        flex: 1,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textStyle: {
        paddingTop: 150,
        color: 'blue',
        textAlign: 'center',
    },
});