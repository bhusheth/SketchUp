import React from 'react';
import { View, Text, StyleSheet, ScrollView  } from 'react-native';
import ButtonClass from './Button';
import { Button } from '@shoutem/ui';
import { Input, SocialIcon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUp extends React.Component {
    static navigationOptions = {
        title: 'Sign Up',
    };
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={styles.textStyle}>Try with other account sign up!</Text>
                    <View style={styles.socialIconStyle}>
                        <SocialIcon type='facebook' onPress={() => this.props.navigation.navigate('SignIn')} />
                        <SocialIcon type='twitter' />
                        <SocialIcon type='google' />
                    </View>
                    <Text style={styles.textStyle}>Or create an account...</Text>
                    {/* <Input
                        placeholder='INPUT WITH CUSTOM ICON'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    /> */}
                    <FormLabel>Full Name</FormLabel>
                    <FormInput />
                    <FormLabel>Username</FormLabel>
                    <FormInput />
                    <FormLabel>Email</FormLabel>
                    <FormInput />
                    <FormLabel>Password</FormLabel>
                    <FormInput />
                    <FormLabel>Confirm Password</FormLabel>
                    <FormInput />
                    <ButtonClass title='Continue'/>
                    <Text style={styles.textStyle}>Already have an account?</Text>
                    <ButtonClass title='Log In' onPress={() => this.props.navigation.navigate('SignIn')} />
                </ScrollView> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffff',
    },
    button: { 
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    textStyle: {
        paddingTop: 20,
        color: 'blue',
        textAlign: 'center',
    },
    socialIconStyle: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});